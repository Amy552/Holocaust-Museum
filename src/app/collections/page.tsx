import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { sanityClient } from "@/lib/sanity";
import { artifactsQuery } from "@/lib/queries";

type Artifact = {
  _id: string;
  title: string;
  slug: string;
  medium?: string;
  period?: string;
  image?: string;
};

export const metadata = {
  title: "Collections",
  description:
    "Photographs, documents, and personal belongings — many donated by survivor families of the Paso del Norte region — held by the El Paso Holocaust Museum and Study Center.",
};
export const revalidate = 60;

const themes = [
  {
    title: "Life before",
    body: "Family photographs, religious objects, and everyday items that record Jewish life in Europe before the Nazi rise to power.",
  },
  {
    title: "Persecution & destruction",
    body: "Identification papers, decrees, yellow stars, and ghetto and camp documents — held with the care their histories demand.",
  },
  {
    title: "Survival & escape",
    body: "Letters, travel papers, and shipboard documents tracing the journeys of refugees who reached the Americas, including those who came to El Paso and Ciudad Juárez.",
  },
  {
    title: "Borderland after",
    body: "Photographs, oral histories, and artifacts donated by survivor families who built new lives in West Texas, southern New Mexico, and northern Chihuahua after 1945.",
  },
];

export default async function CollectionsPage() {
  let artifacts: Artifact[] = [];
  try {
    artifacts = await sanityClient.fetch<Artifact[]>(artifactsQuery);
  } catch {
    // empty
  }

  return (
    <>
      <PageHeader
        eyebrow="Collections"
        title="The collection"
        lede="Photographs, documents, personal belongings, and works of art that record the lives of those who suffered, resisted, and survived. Items are presented in English and Spanish with the care and context their stories deserve."
      />

      <section className="border-b border-ink/10">
        <img
          src="https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=2400&q=70"
          alt="Aged paper documents and letters laid out for study."
          className="h-[35vh] w-full object-cover md:h-[45vh]"
        />
      </section>

      <Container className="py-16">
        <section className="mb-16 grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="eyebrow mb-3">About the collection</p>
            <h2 className="mb-4">A regional record of a global history</h2>
            <p className="prose-museum text-ink-soft">
              The El Paso Holocaust Museum and Study Center holds more than
              two thousand artifacts, photographs, and documents. Many were
              donated by Holocaust survivors who settled in El Paso and
              Ciudad Juárez after the war, by their children and
              grandchildren, and by Borderland families with European
              roots. Together these items make our city a place where a
              global history can be studied through deeply local
              testimony.
            </p>
            <p className="prose-museum text-ink-soft">
              The collection is professionally cared for to museum
              standards and is available for research in the Henry Kellen
              Reading Room by appointment.
            </p>
            <Link
              href="/research"
              className="mt-4 inline-block rounded-sm border border-ink px-5 py-3 no-underline hover:bg-ink hover:text-paper"
            >
              Research access &rarr;
            </Link>
          </div>
          <ul className="grid gap-6">
            {themes.map((t) => (
              <li key={t.title} className="border-t border-ink/10 pt-4">
                <p className="font-serif text-xl">{t.title}</p>
                <p className="mt-1 text-ink-soft">{t.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <p className="eyebrow mb-3">Browse the collection</p>
          <h2 className="mb-6">Featured items</h2>
          {artifacts.length === 0 ? (
            <div className="rounded-sm border border-dashed border-ink/20 p-10 text-center text-ink-muted">
              <p>
                Featured collection items will appear here once published
                in the Sanity Studio. Items presented online are a small
                selection from the museum&rsquo;s holdings; the full
                collection is available to researchers by appointment.
              </p>
            </div>
          ) : (
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {artifacts.map((a) => (
                <li key={a._id}>
                  <Link
                    href={`/collections/${a.slug}`}
                    className="block no-underline"
                  >
                    {a.image && (
                      <img
                        src={a.image}
                        alt=""
                        className="mb-3 aspect-square w-full object-cover"
                      />
                    )}
                    <p className="font-serif text-lg leading-tight">
                      {a.title}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-ink-muted">
                      {[a.medium, a.period].filter(Boolean).join(" · ")}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="mt-16 rounded-sm bg-paper-warm p-10">
          <p className="eyebrow mb-3">Donations to the collection</p>
          <h2 className="mb-4">Entrusting your family&rsquo;s history</h2>
          <p className="prose-museum max-w-prose text-ink-soft">
            If your family holds photographs, documents, or objects that
            tell the story of life before the war, of persecution and
            survival, or of resettlement in the Borderland, our archivists
            would be honored to talk with you. Every potential donation is
            reviewed with care; we accept only items we can responsibly
            preserve, and we are equally glad to suggest other appropriate
            repositories.
          </p>
          <a
            href="mailto:archives@elpasoholocaustmuseum.org"
            className="mt-4 inline-block rounded-sm border border-ink px-5 py-3 no-underline hover:bg-ink hover:text-paper"
          >
            Contact the archives
          </a>
        </section>
      </Container>
    </>
  );
}
