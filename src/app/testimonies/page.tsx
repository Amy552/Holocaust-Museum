import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { sanityClient } from "@/lib/sanity";
import { testimoniesQuery } from "@/lib/queries";

type Testimony = {
  _id: string;
  slug: string;
  name: string;
  yearOfBirth?: number;
  placeOfBirth?: string;
  summary?: string;
  portrait?: string;
};

export const metadata = {
  title: "Testimonies",
  description:
    "Voces de Sobrevivientes — bilingual oral history collection of Holocaust survivors and refugees who built lives in El Paso and Ciudad Juárez.",
};
export const revalidate = 60;

export default async function TestimoniesPage() {
  let testimonies: Testimony[] = [];
  try {
    testimonies = await sanityClient.fetch<Testimony[]>(testimoniesQuery);
  } catch {
    // empty
  }

  return (
    <>
      <PageHeader
        eyebrow="Testimony &middot; Testimonio"
        title="Voices of survivors and witnesses"
        lede="Every testimony is a life. The recordings preserved here are shared with the consent of survivors and their families, and are kept in trust for the children, grandchildren, and great-grandchildren of the Borderland."
      />

      <Container className="py-16">
        <section className="mb-16 grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="eyebrow mb-3">Voces de Sobrevivientes</p>
            <h2 className="mb-4">The El Paso oral history collection</h2>
            <p className="prose-museum text-ink-soft">
              Beginning in the 1980s under the museum&rsquo;s founder
              Henry Kellen &mdash; himself a survivor of the Vilna Ghetto
              &mdash; staff and volunteers recorded the testimonies of
              survivors and refugees who made their homes in El Paso and
              Ciudad Juárez after 1945. The collection now numbers more
              than two hundred testimonies and continues to grow with
              second- and third-generation family histories. Many
              recordings are bilingual; transcripts are available in
              English and Spanish.
            </p>
            <p className="prose-museum text-ink-soft">
              Selected testimonies are presented online, with permission of
              survivors and families. The full collection is available for
              listening in the Henry Kellen Reading Room by appointment.
            </p>
            <Link
              href="/research"
              className="mt-4 inline-block rounded-sm border border-ink px-5 py-3 no-underline hover:bg-ink hover:text-paper"
            >
              Reading room access &rarr;
            </Link>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=70"
              alt="A studio microphone in soft light, suggesting recorded voices."
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </section>

        <section>
          <p className="eyebrow mb-3">Listen</p>
          <h2 className="mb-6">Featured testimonies</h2>
          {testimonies.length === 0 ? (
            <div className="rounded-sm border border-dashed border-ink/20 p-10 text-center text-ink-muted">
              <p>
                Selected testimonies will appear here once recorded and
                published with the consent of survivors or their families.
                The museum does not publish any testimony without explicit,
                informed consent.
              </p>
            </div>
          ) : (
            <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {testimonies.map((t) => (
                <li key={t._id} className="border-t border-ink/10 pt-6">
                  <Link
                    href={`/testimonies/${t.slug}`}
                    className="block no-underline"
                  >
                    {t.portrait && (
                      <img
                        src={t.portrait}
                        alt=""
                        className="mb-4 aspect-[3/4] w-full object-cover grayscale"
                      />
                    )}
                    <p className="font-serif text-2xl">{t.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-ink-muted">
                      {[t.yearOfBirth, t.placeOfBirth]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                    {t.summary && (
                      <p className="mt-3 text-ink-soft">{t.summary}</p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="mt-16 rounded-sm bg-paper-warm p-10">
          <p className="eyebrow mb-3">Share a family history</p>
          <h2 className="mb-4">If your family has a story to entrust</h2>
          <p className="prose-museum max-w-prose text-ink-soft">
            The museum continues to record the histories of survivors
            still with us and of second- and third-generation family
            members carrying these stories forward. If you, a relative, or
            someone you love would like to speak with us &mdash; in
            English or in Spanish &mdash; please reach out to our oral
            history program. Sessions are conducted with care, on the
            speaker&rsquo;s own terms, and may be kept in the archive
            with whatever access restrictions the family chooses.
          </p>
          <a
            href="mailto:testimony@elpasoholocaustmuseum.org"
            className="mt-4 inline-block rounded-sm border border-ink px-5 py-3 no-underline hover:bg-ink hover:text-paper"
          >
            Contact the oral history program
          </a>
        </section>
      </Container>
    </>
  );
}
