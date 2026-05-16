import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Research",
  description:
    "Library, archives, oral histories, and family history reference at the El Paso Holocaust Museum and Study Center — serving scholars and families across the Paso del Norte region.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Library, archives, and scholarship"
        lede="The El Paso Holocaust Museum and Study Center maintains the only Holocaust-focused research library in West Texas and southern New Mexico. Our collections support scholars, students, journalists, and families seeking to recover the histories of people lost or displaced &mdash; in English, Spanish, Yiddish, German, and other languages."
      />

      <Container className="grid gap-12 py-16 md:grid-cols-2">
        <section>
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=70"
            alt="Old leather-bound books arranged on wooden library shelves."
            className="mb-6 aspect-[4/3] w-full object-cover"
          />
          <h2 className="mb-4">Library</h2>
          <p className="prose-museum text-ink-soft">
            Open to the public by appointment, Tuesday through Friday.
            Holdings include published scholarship, memoirs, periodicals,
            and rare books in English, Spanish, Yiddish, Hebrew, German,
            Polish, and other languages, with a particular strength in
            survivor memoirs and bilingual works developed for Spanish-
            speaking readers.
          </p>
          <p className="mt-3 text-sm text-ink-muted">
            Henry Kellen Reading Room, second floor, 715 N. Oregon Street.
          </p>
        </section>

        <section>
          <img
            src="https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1200&q=70"
            alt="Aged paper documents and letters arranged on a flat surface."
            className="mb-6 aspect-[4/3] w-full object-cover"
          />
          <h2 className="mb-4">Archives</h2>
          <p className="prose-museum text-ink-soft">
            Original documents, photographs, oral histories, identification
            papers, and family papers donated by Holocaust survivors and
            their descendants who built lives in El Paso, Ciudad Juárez,
            and Las Cruces after the war. Many items are available in
            digital surrogates through the reading room; others may be
            consulted on-site with advance notice.
          </p>
        </section>
      </Container>

      <section className="border-t border-ink/10 bg-paper-warm py-16">
        <Container className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="eyebrow mb-3">Oral history collection</p>
            <h2 className="mb-4">Voices of Borderland survivors</h2>
            <p className="prose-museum text-ink-soft">
              Beginning in the 1980s under the museum&rsquo;s founder
              Henry Kellen &mdash; himself a survivor of the Vilna ghetto
              &mdash; staff and volunteers recorded the testimonies of
              survivors and refugees who made their homes in El Paso and
              Ciudad Juárez after 1945. The collection now numbers more
              than two hundred testimonies and continues to grow with
              second- and third-generation family histories. Many
              recordings are bilingual; transcripts are available in both
              English and Spanish.
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              Selected testimonies are accessible online. Full-length
              recordings are available in the reading room.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Family history &amp; survivor records</p>
            <h2 className="mb-4">Bilingual reference service</h2>
            <p className="prose-museum text-ink-soft">
              Our reference staff help individuals trace family members
              who were displaced, killed, or survived. We work with
              international databases including the Arolsen Archives
              (formerly the International Tracing Service), Yad
              Vashem&rsquo;s Central Database of Shoah Victims&rsquo;
              Names, and the United States Holocaust Memorial Museum
              survivors registry. Reference appointments are available in
              English or Spanish at no charge, and we maintain a working
              relationship with the Consulado General de México in El
              Paso to support family-history requests originating in
              Mexico.
            </p>
            <a
              href="mailto:research@elpasoholocaustmuseum.org"
              className="mt-4 inline-block rounded-sm border border-ink px-5 py-3 no-underline hover:bg-ink hover:text-paper"
            >
              Request research help
            </a>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="eyebrow mb-3">Partner institutions</p>
            <h2 className="mb-4">A network across the region</h2>
            <ul className="space-y-3 text-ink-soft">
              <li className="border-t border-ink/10 pt-3">
                United States Holocaust Memorial Museum (Washington, D.C.)
                &mdash; affiliate partner for archives, programming, and
                educator resources.
              </li>
              <li className="border-t border-ink/10 pt-3">
                University of Texas at El Paso (UTEP), Department of
                History &mdash; jointly hosted lectures and a graduate
                research seminar each spring.
              </li>
              <li className="border-t border-ink/10 pt-3">
                New Mexico State University (NMSU) &mdash; collaborative
                programming with the Department of History and the
                Hispanic Studies program.
              </li>
              <li className="border-t border-ink/10 pt-3">
                Texas Holocaust, Genocide, and Antisemitism Advisory
                Commission &mdash; state-designated partner for
                educator training and curriculum review.
              </li>
              <li className="border-t border-ink/10 pt-3">
                Universidad Autónoma de Ciudad Juárez (UACJ) &mdash;
                cross-border seminars and student exchanges.
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=70"
              alt="Rows of bound books on wooden shelves in a quiet reading room."
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </Container>

      <section className="border-t border-ink/10 bg-paper-warm py-16">
        <Container className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="eyebrow mb-3">Fellowships</p>
            <h2 className="mb-4">For scholars and graduate students</h2>
            <p className="prose-museum text-ink-soft">
              The museum awards short-term Henry Kellen Research
              Fellowships each year to scholars working with our
              collections on Holocaust history, post-war refugee
              resettlement in the Americas, comparative genocide studies,
              or the history of antisemitism in the U.S.&ndash;Mexico
              borderlands. Fellowships include a modest stipend and
              dedicated workspace in the reading room. Applications open
              each fall.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Visiting researchers</p>
            <h2 className="mb-4">Plan a research visit</h2>
            <p className="prose-museum text-ink-soft">
              Researchers visiting from outside the region are encouraged
              to contact us at least three weeks before arrival so that
              materials can be pulled and reading-room time reserved. Our
              staff is glad to help coordinate visits with collections at
              UTEP&rsquo;s C.L. Sonnichsen Special Collections and other
              regional repositories.
            </p>
            <a
              href="mailto:library@elpasoholocaustmuseum.org"
              className="mt-4 inline-block rounded-sm border border-ink px-5 py-3 no-underline hover:bg-ink hover:text-paper"
            >
              Contact the library
            </a>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div className="rounded-sm bg-ink p-10 text-paper">
          <p className="eyebrow mb-3 text-paper/70">Hours &amp; access</p>
          <h2 className="mb-4 text-paper">Reading room</h2>
          <ul className="space-y-1 text-paper/80">
            <li>Tuesday &ndash; Friday: 10am &ndash; 4pm, by appointment</li>
            <li>Closed weekends, federal holidays, and Jewish High Holidays</li>
            <li>Wheelchair accessible; assistive listening available</li>
          </ul>
          <p className="mt-6 text-paper/80">
            El Paso Holocaust Museum and Study Center
            <br />
            715 N. Oregon Street, El Paso, Texas 79902
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/visit"
              className="inline-block rounded-sm bg-paper px-5 py-3 text-ink no-underline hover:bg-paper-warm"
            >
              Plan your visit
            </Link>
            <Link
              href="/collections"
              className="inline-block rounded-sm border border-paper/30 px-5 py-3 text-paper no-underline hover:border-paper"
            >
              Browse collections &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
