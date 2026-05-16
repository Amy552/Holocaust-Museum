import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "About",
  description:
    "The El Paso Holocaust Museum and Study Center — mission, founding history, and the survivors who built a place of memory in West Texas.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Our mission"
        lede="The El Paso Holocaust Museum and Study Center teaches the history of the Holocaust, honors the memory of its victims, and challenges visitors to confront hatred, prevent genocide, and promote human dignity &mdash; in English, in Spanish, and on the U.S.&ndash;Mexico border."
      />

      <Container className="py-16">
        <section id="mission" className="mb-16 max-w-prose">
          <h2 className="mb-4">What we do</h2>
          <p className="prose-museum text-ink-soft">
            Through exhibitions, education, archives, and remembrance, we
            invite visitors of every background to reflect on the history
            of the Holocaust and on the responsibilities of citizenship in
            the Paso del Norte region. Our work is grounded in primary
            sources and in the testimonies of survivors who made their
            homes in El Paso after 1945.
          </p>
        </section>

        <section id="history" className="mb-16 max-w-prose">
          <h2 className="mb-4">Our history</h2>
          <p className="prose-museum text-ink-soft">
            The museum was founded in 1984 by Henry Kellen &mdash; a native
            of Vilna (Vilnius), a survivor of the Vilna Ghetto and forced
            labor camps, and a longtime El Pasoan &mdash; together with a
            small group of fellow survivors, descendants, and members of
            the El Paso Jewish community who believed that the memory of
            the Holocaust must be preserved and that its lessons must
            shape the future of West Texas.
          </p>
          <p className="prose-museum text-ink-soft">
            The museum&rsquo;s first home was in the basement of B&rsquo;nai
            Zion Congregation. In 2008, after more than two decades of
            growth, the museum moved into its present home at 715 N. Oregon
            Street &mdash; a purpose-built downtown facility containing
            permanent and special exhibition galleries, the Henry Kellen
            Theater, classrooms for school groups, and a research reading
            room.
          </p>
          <p className="prose-museum text-ink-soft">
            Today, the El Paso Holocaust Museum and Study Center is the
            only Holocaust museum in Texas and one of a small number of
            Holocaust museums anywhere along the U.S.&ndash;Mexico border.
          </p>
        </section>

        <section id="post-2019" className="mb-16 max-w-prose">
          <h2 className="mb-4">After August 3, 2019</h2>
          <p className="prose-museum text-ink-soft">
            On August 3, 2019, a gunman drove to El Paso and opened fire
            on shoppers at a Walmart in our city, targeting Hispanic and
            Mexican families. Twenty-three people were murdered. In the
            years since, the museum has expanded its anti-hate and
            community-engagement work, deepened partnerships with local
            schools, congregations, and civic institutions, and committed
            itself to making the lessons of the Holocaust resonant for the
            specific communities who call the Borderland home.
          </p>
        </section>

        <section id="staff" className="mb-16 max-w-prose">
          <h2 className="mb-4">Staff &amp; board</h2>
          <p className="prose-museum text-ink-soft">
            The museum is led by an executive director and a professional
            staff working in curatorial, education, archives, development,
            and visitor services. A volunteer board of trustees &mdash;
            drawn from the El Paso Jewish community, area universities,
            local business, and civic life &mdash; governs the institution
            and guides its strategic direction. A full directory is
            available on request.
          </p>
        </section>

        <section id="press" className="max-w-prose">
          <h2 className="mb-4">Press</h2>
          <p className="prose-museum text-ink-soft">
            Journalists seeking interviews, images, or background
            information may contact our communications office. We are glad
            to assist reporters covering El Paso, the Borderland, and the
            ongoing work of Holocaust memory and education in our region.
          </p>
          <a
            href="mailto:press@elpasoholocaustmuseum.org"
            className="mt-4 inline-block rounded-sm border border-ink px-5 py-3 no-underline hover:bg-ink hover:text-paper"
          >
            Contact press
          </a>
        </section>
      </Container>
    </>
  );
}
