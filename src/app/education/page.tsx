import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Education",
  description:
    "Bilingual Holocaust education for Borderland classrooms — programs for EPISD, YISD, SISD, Canutillo, Las Cruces, and Ciudad Juárez students and teachers.",
};

const audiences = [
  {
    title: "For students",
    body: "Age-appropriate introductions to Holocaust history for grades 5–12 and university classrooms, with reading lists, glossaries, and bilingual discussion guides developed for Borderland learners.",
  },
  {
    title: "For educators",
    body: "Lesson plans aligned with the Texas Essential Knowledge and Skills (TEKS) and New Mexico social studies standards, on-site professional development, and one-on-one consultation with our education team.",
  },
  {
    title: "For families",
    body: "Recursos en inglés y español for conversations at home, recommended books and films for every age, and questions to help young people understand difficult history.",
  },
  {
    title: "For communities",
    body: "Programs for civic groups, faith communities, and workplaces across the Borderland — examining the Holocaust and what its history asks of us in El Paso today.",
  },
];

const districts = [
  "El Paso Independent School District (EPISD)",
  "Ysleta Independent School District (YISD)",
  "Socorro Independent School District (SISD)",
  "Canutillo, Clint, San Elizario, and Tornillo ISDs",
  "Gadsden and Las Cruces Public Schools (Doña Ana County, NM)",
  "Cross-border partnerships with educators in Ciudad Juárez",
];

export default function EducationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Learning that lasts on the border"
        lede="The El Paso Holocaust Museum and Study Center serves more than 20,000 students and educators across the Paso del Norte region each year. Our programs are bilingual, free of charge, and built for the classrooms of West Texas, southern New Mexico, and northern Chihuahua."
      />

      <Container className="py-16">
        <ul className="grid gap-10 md:grid-cols-2">
          {audiences.map((a) => (
            <li key={a.title} className="border-t border-ink/10 pt-6">
              <h3 className="mb-3">{a.title}</h3>
              <p className="text-ink-soft">{a.body}</p>
            </li>
          ))}
        </ul>
      </Container>

      <section className="border-t border-ink/10 bg-paper-warm py-16">
        <Container className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <img
              src="https://images.unsplash.com/photo-1497486751825-1233686f5d54?auto=format&fit=crop&w=1200&q=70"
              alt="Students seated together in a classroom, listening attentively."
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-3">School district outreach</p>
            <h2 className="mb-4">Partner districts and schools</h2>
            <p className="prose-museum text-ink-soft">
              Our education staff travels each week to campuses across the
              region, and welcomes class field trips to 715 N. Oregon Street
              from districts including:
            </p>
            <ul className="mt-4 space-y-2 text-ink-soft">
              {districts.map((d) => (
                <li key={d} className="border-t border-ink/10 pt-2">
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-muted">
              Field trips are free for Title I schools. Transportation
              subsidies are available through the museum&rsquo;s Henry Kellen
              Education Fund.
            </p>
            <a
              href="mailto:education@elpasoholocaustmuseum.org"
              className="mt-6 inline-block rounded-sm border border-ink px-5 py-3 no-underline hover:bg-ink hover:text-paper"
            >
              Schedule a field trip
            </a>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="eyebrow mb-3">Programación bilingüe</p>
            <h2 className="mb-4">Bilingual tours and curriculum</h2>
            <p className="prose-museum text-ink-soft">
              Every docent-led tour is offered in English or Spanish, and dual
              -language editions of our student workbooks accompany every
              field trip. Roughly three in four students who visit the museum
              come from homes where Spanish is spoken, and our staff designs
              programs that meet them in the language of their family.
            </p>
            <p className="prose-museum text-ink-soft">
              Bilingual resources include the <em>Voces de Sobrevivientes</em>{" "}
              testimony series, a Spanish-language family guide to the
              permanent galleries, and translated primary-source packets for
              middle and high school history teachers.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=70"
              alt="An open book resting on a wooden table in soft natural light."
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </Container>

      <section className="border-t border-ink/10 bg-paper-warm py-16">
        <Container className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="eyebrow mb-3">Professional development</p>
            <h2 className="mb-4">Workshops for Texas and New Mexico teachers</h2>
            <p className="prose-museum text-ink-soft">
              Each summer the museum hosts a five-day Borderland Educators
              Institute for teachers in grades 6–12, with CPE credit
              accepted by Texas and New Mexico districts. The institute is
              co-convened with the Texas Holocaust, Genocide, and
              Antisemitism Advisory Commission and draws on resources from
              the United States Holocaust Memorial Museum, Yad Vashem, USC
              Shoah Foundation&rsquo;s IWitness, and Echoes &amp; Reflections.
            </p>
            <p className="prose-museum text-ink-soft">
              Shorter Saturday workshops are offered through the year, free
              of charge, with stipends for substitute coverage at partner
              campuses.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=70"
              alt="A chalkboard and notebooks arranged on a wooden desk."
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div className="rounded-sm bg-ink p-10 text-paper">
          <p className="eyebrow mb-3 text-paper/70">
            After August 3 &mdash; teaching against hate
          </p>
          <h2 className="mb-4 text-paper">
            What the Holocaust asks of El Paso classrooms today
          </h2>
          <p className="prose-museum max-w-prose text-paper/80">
            On August 3, 2019, a gunman drove to El Paso and opened fire on
            shoppers at a Walmart in our city, targeting Hispanic and
            Mexican families. Twenty-three people were murdered. In the
            years since, our education team has worked alongside teachers,
            counselors, and clergy to help students examine how the
            ideologies that produced the Holocaust echo in the rhetoric of
            our own time &mdash; and what young people can do to refuse them.
          </p>
          <p className="prose-museum max-w-prose text-paper/80">
            The post-2019 curriculum unit <em>From Then to Now</em> is
            available without charge to any educator in the Paso del Norte
            region.
          </p>
        </div>
      </Container>

      <Container className="pb-20">
        <div className="rounded-sm bg-paper-warm p-10">
          <p className="eyebrow mb-3">Teaching guidelines</p>
          <h2 className="mb-4">Approaching the Holocaust in the classroom</h2>
          <p className="prose-museum max-w-prose text-ink-soft">
            Our pedagogical guidelines emphasize historical accuracy,
            age-appropriate framing, and the dignity of victims. We do not
            recommend simulations, role-plays of perpetrators or victims,
            or comparisons that diminish the specific history of the
            Holocaust. Materials may be adapted freely for classroom use
            with attribution to the El Paso Holocaust Museum and Study
            Center.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-block rounded-sm border border-ink px-5 py-3 no-underline hover:bg-ink hover:text-paper"
            >
              Read our guidelines
            </a>
            <Link
              href="/research"
              className="inline-block rounded-sm border border-ink/30 px-5 py-3 no-underline hover:border-ink"
            >
              Library &amp; archives &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
