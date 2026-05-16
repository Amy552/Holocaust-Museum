import Link from "next/link";
import Container from "@/components/Container";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-ink text-paper">
        <Container className="py-24 md:py-32">
          <p className="eyebrow mb-6 text-paper/70">
            Downtown El Paso &middot; 715 N. Oregon Street
          </p>
          <h1 className="max-w-3xl text-paper">
            We remember the lives lost, honor the voices of survivors, and
            teach so that history is not repeated.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-paper/80">
            The El Paso Holocaust Museum and Study Center &mdash; Texas&rsquo;s
            only Holocaust museum &mdash; preserves the history of the
            Holocaust through artifacts, testimony, scholarship, and bilingual
            education for the people of the Paso del Norte region.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/visit"
              className="no-underline rounded-sm bg-paper px-5 py-3 text-ink hover:bg-paper-warm"
            >
              Plan your visit
            </Link>
            <Link
              href="/exhibitions"
              className="no-underline rounded-sm border border-paper/30 px-5 py-3 text-paper hover:border-paper"
            >
              Current exhibitions
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-paper-warm py-16">
        <Container className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow mb-3">After August 3</p>
            <h2 className="mb-4 max-w-2xl">
              Standing against the hatred that came to El Paso.
            </h2>
            <p className="prose-museum max-w-prose text-ink-soft">
              On August 3, 2019, twenty-three of our neighbors were murdered
              in our city in an attack explicitly targeting Hispanic and
              Mexican families. In the years since, the museum has worked
              alongside teachers, clergy, and community leaders to confront
              the ideologies that produced the Holocaust and that continue to
              threaten our communities today.
            </p>
          </div>
          <Link
            href="/remembrance"
            className="no-underline inline-block self-start rounded-sm border border-ink px-5 py-3 hover:bg-ink hover:text-paper md:self-end"
          >
            Our remembrance work &rarr;
          </Link>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-3">
            <article>
              <p className="eyebrow mb-3">Bear witness</p>
              <h3 className="mb-3">Survivor testimonies</h3>
              <p className="text-ink-soft">
                Recorded accounts from survivors and refugees who built
                lives in El Paso and Ciudad Juárez after the war &mdash;
                preserved in English and Spanish for future generations.
              </p>
              <Link href="/testimonies" className="mt-4 inline-block">
                Listen &rarr;
              </Link>
            </article>
            <article>
              <p className="eyebrow mb-3">Learn</p>
              <h3 className="mb-3">For Borderland classrooms</h3>
              <p className="text-ink-soft">
                Free bilingual lesson plans and field trips for EPISD,
                YISD, SISD, and partner districts across West Texas and
                southern New Mexico.
              </p>
              <Link href="/education" className="mt-4 inline-block">
                Resources &rarr;
              </Link>
            </article>
            <article>
              <p className="eyebrow mb-3">Remember</p>
              <h3 className="mb-3">Days of remembrance</h3>
              <p className="text-ink-soft">
                Yom HaShoah, International Holocaust Remembrance Day, and
                community gatherings with Temple Mount Sinai, B&rsquo;nai
                Zion, and our interfaith partners.
              </p>
              <Link href="/remembrance" className="mt-4 inline-block">
                Observances &rarr;
              </Link>
            </article>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-ink py-20 text-paper">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-3 text-paper/70">Visit</p>
            <h2 className="mb-4 text-paper">
              Open Tuesday through Sunday in downtown El Paso.
            </h2>
            <ul className="space-y-1 text-paper/80">
              <li>Tuesday &ndash; Friday: 9am &ndash; 4pm</li>
              <li>Saturday &amp; Sunday: 11am &ndash; 5pm</li>
              <li>General admission is free</li>
              <li>Bilingual docent-led tours by request</li>
            </ul>
          </div>
          <div>
            <p className="text-paper/80">
              715 N. Oregon Street
              <br />
              El Paso, Texas 79902
              <br />
              <span className="text-paper/60">
                One block from San Jacinto Plaza, on the El Paso Streetcar
                line.
              </span>
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/visit"
                className="no-underline rounded-sm bg-paper px-5 py-3 text-ink hover:bg-paper-warm"
              >
                Visitor information
              </Link>
              <Link
                href="/events"
                className="no-underline rounded-sm border border-paper/30 px-5 py-3 text-paper hover:border-paper"
              >
                Upcoming programs &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-paper-warm py-20">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-4">Support our mission</p>
            <h2 className="mb-4">
              Your gift sustains the work of memory and education in El Paso.
            </h2>
            <p className="text-ink-soft">
              The El Paso Holocaust Museum and Study Center is an
              independent 501(c)(3) nonprofit, sustained by individuals,
              families, foundations, and Borderland businesses who believe
              that this history must be taught here.
            </p>
          </div>
          <div>
            <Link
              href="/support"
              className="no-underline inline-block rounded-sm bg-accent px-6 py-3 text-paper hover:bg-accent-dark"
            >
              Make a gift
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
