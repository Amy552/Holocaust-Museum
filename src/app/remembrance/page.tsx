import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Remembrance",
  description:
    "Yom HaShoah, Days of Remembrance, the August 3 community gathering, and other observances at the El Paso Holocaust Museum and Study Center.",
};

export default function RemembrancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Remembrance"
        title="Holding memory together"
        lede="Each year, the El Paso Holocaust Museum and Study Center gathers our community for ceremonies, candle-lightings, and bilingual readings that remember the six million Jewish victims of the Holocaust, the millions of others murdered by Nazi Germany and its collaborators, and the lives lost to hatred in our own city."
      />

      <Container className="py-16">
        <section className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="eyebrow mb-3">Yom HaShoah</p>
            <h2 className="mb-4">Holocaust Remembrance Day</h2>
            <p className="prose-museum text-ink-soft">
              Observed on the 27th of Nisan, Yom HaShoah is marked at the
              museum with a community ceremony co-hosted with Temple Mount
              Sinai and B&rsquo;nai Zion Congregation. The evening includes
              a candle-lighting by the few remaining survivors who settled
              in El Paso after the war and by their children and
              grandchildren, a reading of names, and the recitation of
              Kaddish. Programs are bilingual and open to people of every
              background and faith.
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              Held annually in the spring at 715 N. Oregon Street. Free;
              reservations recommended.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=70"
              alt="Memorial candles lit in a darkened room."
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </section>
      </Container>

      <section className="border-t border-ink/10 bg-paper-warm py-16">
        <Container className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1200&q=70"
              alt="A single lit candle, its flame steady in soft darkness."
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="eyebrow mb-3">Days of Remembrance</p>
            <h2 className="mb-4">A week of programs each spring</h2>
            <p className="prose-museum text-ink-soft">
              The United States Congress designates an annual Days of
              Remembrance, anchored at Yom HaShoah, as the nation&rsquo;s
              week of remembrance for victims of the Holocaust. The El Paso
              Holocaust Museum and Study Center, in coordination with the
              United States Holocaust Memorial Museum and the Texas
              Holocaust, Genocide, and Antisemitism Advisory Commission,
              offers public programs throughout that week &mdash; survivor
              and second-generation panels, film screenings at the Plaza
              Theatre, civic ceremonies at El Paso City Hall, and student
              assemblies at partner campuses in EPISD, YISD, and SISD.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <section className="rounded-sm border border-accent/30 bg-paper p-10">
          <p className="eyebrow mb-3 text-accent">August 3 &mdash; El Paso</p>
          <h2 className="mb-4">Community remembrance after the attack</h2>
          <p className="prose-museum max-w-prose text-ink-soft">
            On August 3, 2019, twenty-three of our neighbors were murdered
            at a Walmart in El Paso in an attack explicitly motivated by
            hatred of Hispanic and Mexican people. Each year on the
            anniversary, the museum opens its doors for a community
            gathering &mdash; a quiet space for reflection, a bilingual
            reading of the victims&rsquo; names, and a renewed commitment
            to confront the ideologies that produced the Holocaust and
            that continue to threaten our communities today.
          </p>
          <p className="prose-museum max-w-prose text-ink-soft">
            We hold this observance alongside, and in dialogue with, our
            Holocaust remembrance work. Both are answers to the same
            question: what does memory ask of us now?
          </p>
        </section>
      </Container>

      <section className="border-t border-ink/10 bg-paper-warm py-16">
        <Container className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="eyebrow mb-3">January 27</p>
            <h2 className="mb-4">International Holocaust Remembrance Day</h2>
            <p className="prose-museum text-ink-soft">
              The anniversary of the liberation of Auschwitz-Birkenau, set
              aside by the United Nations as a day of international
              remembrance. The museum marks the date with extended evening
              hours, free admission, and a public reading drawn from the
              testimonies in our archives.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Kristallnacht commemoration</p>
            <h2 className="mb-4">November 9</h2>
            <p className="prose-museum text-ink-soft">
              On the anniversary of the November Pogrom of 1938, the museum
              hosts an evening of testimony and reflection with
              representatives of El Paso&rsquo;s synagogues, churches, and
              mosques &mdash; a yearly reaffirmation of the bonds across
              our religious communities here on the border.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <section className="rounded-sm bg-ink p-10 text-paper">
          <p className="eyebrow mb-3 text-paper/70">Reading of names</p>
          <h2 className="mb-4 text-paper">
            Submit a name to be read aloud
          </h2>
          <p className="prose-museum max-w-prose text-paper/80">
            Each year the museum reads aloud, in English and Spanish, the
            names of victims of the Holocaust submitted by families and
            communities of the Paso del Norte region. If you would like to
            submit the name of a relative, a friend, or a member of a
            community you remember, please contact our remembrance program.
          </p>
          <p className="prose-museum max-w-prose text-paper/80">
            Si desea enviar un nombre para ser leído en nuestra ceremonia
            anual, por favor escríbanos.
          </p>
          <a
            href="mailto:remembrance@elpasoholocaustmuseum.org"
            className="mt-6 inline-block rounded-sm bg-paper px-5 py-3 text-ink no-underline hover:bg-paper-warm"
          >
            Submit a name / Enviar un nombre
          </a>
        </section>
      </Container>
    </>
  );
}
