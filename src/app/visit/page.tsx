import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Visit",
  description:
    "Visitor information for the El Paso Holocaust Museum and Study Center at 715 N. Oregon Street in downtown El Paso, Texas. Free admission, bilingual tours.",
};

export default function VisitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Visit"
        title="Plan your visit"
        lede="The El Paso Holocaust Museum and Study Center is open Tuesday through Sunday in downtown El Paso. General admission is free. Visitantes en español son siempre bienvenidos."
      />

      <Container className="grid gap-16 py-16 md:grid-cols-3">
        <section id="hours">
          <p className="eyebrow mb-3">Hours</p>
          <ul className="space-y-1 text-ink-soft">
            <li>Tuesday &ndash; Friday: 9am &ndash; 4pm</li>
            <li>Saturday: 11am &ndash; 5pm</li>
            <li>Sunday: 11am &ndash; 5pm</li>
            <li className="mt-3 text-sm text-ink-muted">
              Closed Mondays, on Jewish High Holidays, and on Thanksgiving,
              December 25, and January 1. Extended evening hours on
              International Holocaust Remembrance Day (January 27).
            </li>
          </ul>
        </section>
        <section id="admission">
          <p className="eyebrow mb-3">Admission</p>
          <p className="text-ink-soft">
            General admission is free, thanks to the generosity of our
            members and Borderland donors. A suggested donation of $8
            supports the museum&rsquo;s ongoing work. Bilingual docent-led
            tours are available by request with one week&rsquo;s notice.
          </p>
          <a
            href="#"
            className="mt-4 inline-block rounded-sm bg-ink px-5 py-3 text-paper no-underline hover:bg-accent"
          >
            Request a guided tour
          </a>
        </section>
        <section id="location">
          <p className="eyebrow mb-3">Location</p>
          <address className="not-italic text-ink-soft">
            715 N. Oregon Street
            <br />
            El Paso, Texas 79902
            <br />
            <a href="tel:+19153510048">(915) 351-0048</a>
          </address>
          <p className="mt-3 text-sm text-ink-muted">
            At the corner of Oregon and Yandell Streets in downtown El Paso,
            one block from San Jacinto Plaza and across from the El Paso
            County Courthouse.
          </p>
        </section>
      </Container>

      <section className="border-t border-ink/10 bg-paper-warm py-16">
        <Container className="grid gap-12 md:grid-cols-2">
          <div id="getting-here">
            <p className="eyebrow mb-3">Getting here</p>
            <h2 className="mb-4">Transit, parking, and crossing the border</h2>
            <ul className="space-y-3 text-ink-soft">
              <li>
                <strong>El Paso Streetcar:</strong> The museum is a short
                walk from the Glory Road and Stanton Street streetcar
                routes, both of which serve downtown.
              </li>
              <li>
                <strong>Sun Metro:</strong> Routes 8, 10, and 14 stop within
                two blocks of the museum at the Downtown Transfer Center.
              </li>
              <li>
                <strong>Parking:</strong> Paid public garages on Mesa,
                Stanton, and Mills Streets are within easy walking distance.
                ADA street parking is available on Oregon Street directly in
                front of the museum.
              </li>
              <li>
                <strong>From Ciudad Juárez:</strong> The museum is
                approximately a fifteen-minute walk from the Paso del Norte
                and Stanton international bridges. Visitors crossing from
                Mexico are warmly welcomed at our bilingual visitor services
                desk.
              </li>
            </ul>
          </div>
          <div id="accessibility">
            <p className="eyebrow mb-3">Accessibility</p>
            <h2 className="mb-4">A welcoming museum for every visitor</h2>
            <ul className="space-y-2 text-ink-soft">
              <li>Step-free access to all public galleries and restrooms.</li>
              <li>Wheelchairs available at the visitor services desk.</li>
              <li>Assistive listening devices and large-print guides in English and Spanish.</li>
              <li>ASL-interpreted tours by request, with 14 days&rsquo; notice.</li>
              <li>Sensory-friendly hours on the first Sunday of each month.</li>
              <li>Service animals are welcome throughout the building.</li>
            </ul>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div id="security" className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Before you arrive</p>
            <h2 className="mb-4">Security &amp; what to bring</h2>
            <p className="prose-museum text-ink-soft">
              All visitors pass through security screening upon entry,
              similar to airport security, and bags are inspected at the
              door. Please plan extra time during peak hours. Large bags and
              backpacks may be checked or stored at the visitor services
              desk at no charge.
            </p>
            <p className="prose-museum text-ink-soft">
              Photography is permitted in most galleries for personal,
              non-commercial use. Flash, tripods, and selfie sticks are not
              permitted out of respect for other visitors and the subject
              matter of the exhibitions.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Inside the building</p>
            <h2 className="mb-4">What to expect</h2>
            <ul className="space-y-2 text-ink-soft">
              <li>
                The Henry Kellen Theater on the first floor screens survivor
                testimonies and short documentary films throughout the day.
              </li>
              <li>
                The permanent gallery follows a chronological path through
                the history of the Holocaust. Plan on 60&ndash;90 minutes for
                an unhurried visit.
              </li>
              <li>
                The Henry Kellen Reading Room on the second floor is open
                to the public by appointment; see{" "}
                <a href="/research" className="underline">
                  Research
                </a>{" "}
                for details.
              </li>
              <li>
                A small museum shop near the entrance carries memoirs,
                children&rsquo;s books, and bilingual classroom materials.
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <section className="border-t border-ink/10 bg-ink py-16 text-paper">
        <Container>
          <div id="groups">
            <p className="eyebrow mb-3 text-paper/70">Group visits</p>
            <h2 className="mb-4 text-paper">
              Schools, community groups, and tours
            </h2>
            <p className="prose-museum max-w-prose text-paper/80">
              Groups of ten or more must reserve in advance. School groups
              receive a pre-visit guide aligned to Texas Essential
              Knowledge and Skills (TEKS) and a docent-led introduction in
              English or Spanish. Field trips are free for partner
              districts, and transportation subsidies are available for
              Title I schools through the Henry Kellen Education Fund.
              Please contact our education team at least three weeks before
              your visit.
            </p>
            <a
              href="mailto:groups@elpasoholocaustmuseum.org"
              className="mt-4 inline-block rounded-sm bg-paper px-5 py-3 text-ink no-underline hover:bg-paper-warm"
            >
              Contact group services
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
