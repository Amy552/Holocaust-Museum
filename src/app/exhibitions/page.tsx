import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { sanityClient } from "@/lib/sanity";
import { exhibitionsQuery } from "@/lib/queries";

type Exhibition = {
  _id: string;
  title: string;
  slug: string;
  summary?: string;
  kind?: string;
  startDate?: string;
  endDate?: string;
  coverImage?: string;
};

export const metadata = {
  title: "Exhibitions",
  description:
    "Permanent and special exhibitions at the El Paso Holocaust Museum and Study Center, including bilingual interpretation throughout the galleries.",
};
export const revalidate = 60;

export default async function ExhibitionsPage() {
  let exhibitions: Exhibition[] = [];
  try {
    exhibitions = await sanityClient.fetch<Exhibition[]>(exhibitionsQuery);
  } catch {
    // Sanity not yet configured. Page renders without listings.
  }

  const grouped = {
    permanent: exhibitions.filter((e) => e.kind === "permanent"),
    special: exhibitions.filter((e) => e.kind === "special"),
    traveling: exhibitions.filter((e) => e.kind === "traveling"),
    past: exhibitions.filter((e) => e.kind === "past"),
  };

  return (
    <>
      <PageHeader
        eyebrow="Exhibitions"
        title="Exhibitions"
        lede="Permanent galleries, special exhibitions, and traveling shows that examine the history of the Holocaust through artifacts, testimony, and scholarship. Interpretive text is offered throughout the museum in English and Spanish."
      />

      <Container className="py-16">
        <section className="mb-16 grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <p className="eyebrow mb-3">Permanent gallery</p>
            <h2 className="mb-4">From Vilna to El Paso, and beyond</h2>
            <p className="prose-museum text-ink-soft">
              The museum&rsquo;s permanent gallery traces the rise of
              Nazism, the destruction of European Jewish life, the
              experience of survival, the post-war resettlement of
              displaced persons in the Americas &mdash; including those
              who built lives here in El Paso and Ciudad Juárez &mdash;
              and the work of memory in our own time. The path is
              chronological and follows roughly sixty to ninety minutes of
              unhurried visiting.
            </p>
            <p className="prose-museum text-ink-soft">
              Artifacts on long-term display include items donated by
              survivor families of the Borderland: identification papers,
              photographs, letters, and a Torah scroll rescued from a
              destroyed European community and given to B&rsquo;nai Zion
              Congregation in El Paso.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1565060169187-5284a3b1aa44?auto=format&fit=crop&w=1200&q=70"
              alt="A quiet museum gallery in soft, even light."
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </section>

        <div className="space-y-16">
          {exhibitions.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              {grouped.permanent.length > 0 && (
                <Section title="Permanent" items={grouped.permanent} />
              )}
              {grouped.special.length > 0 && (
                <Section title="Special" items={grouped.special} />
              )}
              {grouped.traveling.length > 0 && (
                <Section title="Traveling" items={grouped.traveling} />
              )}
              {grouped.past.length > 0 && (
                <Section title="Past" items={grouped.past} muted />
              )}
            </>
          )}
        </div>
      </Container>
    </>
  );
}

function Section({
  title,
  items,
  muted = false,
}: {
  title: string;
  items: Exhibition[];
  muted?: boolean;
}) {
  return (
    <section>
      <h2 className={`mb-6 ${muted ? "text-ink-muted" : ""}`}>{title}</h2>
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item._id} className="border-t border-ink/10 pt-6">
            <Link
              href={`/exhibitions/${item.slug}`}
              className="block no-underline"
            >
              {item.coverImage && (
                <img
                  src={item.coverImage}
                  alt=""
                  className="mb-4 aspect-[4/3] w-full object-cover"
                />
              )}
              <h3 className="mb-2 text-2xl">{item.title}</h3>
              {item.summary && (
                <p className="text-ink-soft">{item.summary}</p>
              )}
              {(item.startDate || item.endDate) && (
                <p className="mt-3 text-xs uppercase tracking-wider text-ink-muted">
                  {[item.startDate, item.endDate].filter(Boolean).join(" – ")}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function EmptyState() {
  return (
    <div className="rounded-sm border border-dashed border-ink/20 p-10 text-center text-ink-muted">
      <p>
        Special and traveling exhibitions will appear here once published
        in the Sanity Studio. Visit <code>/studio</code> to add your first
        exhibition. The permanent gallery, described above, is always on
        view at 715 N. Oregon Street.
      </p>
    </div>
  );
}
