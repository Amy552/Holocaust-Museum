import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Support",
  description:
    "Membership, gifts, legacy giving, and volunteering at the El Paso Holocaust Museum and Study Center — an independent 501(c)(3) nonprofit serving the Paso del Norte region.",
};

const ways = [
  {
    title: "Become a member",
    body: "Annual membership sustains the museum's daily work and includes invitations to members-only previews, lectures in the Henry Kellen Theater, and family programs. Membership levels begin at $50 individual / $80 household; Borderland educators and students join at $25.",
    cta: "Join",
  },
  {
    title: "Make a gift",
    body: "Donations of any size sustain bilingual exhibitions, free field trips for Title I schools, the oral history program, and the Henry Kellen Reading Room. Gifts are tax-deductible to the fullest extent permitted by law.",
    cta: "Donate",
  },
  {
    title: "Legacy giving",
    body: "Include the museum in your will, IRA, or estate plans to ensure that this history continues to be taught in El Paso for generations to come. The Henry Kellen Legacy Society recognizes those who have notified us of a planned gift.",
    cta: "Plan a legacy",
  },
  {
    title: "Volunteer",
    body: "Volunteers serve as bilingual visitor greeters, gallery docents, archive assistants, education program aides, and special-event support. Training is provided; Spanish-language fluency is especially welcome.",
    cta: "Volunteer",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support &middot; Apoyar"
        title="Your support sustains this work in El Paso"
        lede="The El Paso Holocaust Museum and Study Center is an independent, nonprofit institution. Every membership, gift, and volunteer hour makes our work in the Borderland possible."
      />

      <Container className="py-16">
        <ul className="grid gap-10 md:grid-cols-2">
          {ways.map((w) => (
            <li key={w.title} className="rounded-sm bg-paper-warm p-8">
              <h3 className="mb-3">{w.title}</h3>
              <p className="prose-museum text-ink-soft">{w.body}</p>
              <a
                href="#"
                className="mt-4 inline-block rounded-sm bg-ink px-5 py-3 text-paper no-underline hover:bg-accent"
              >
                {w.cta}
              </a>
            </li>
          ))}
        </ul>

        <section className="mt-16 grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="eyebrow mb-3">Corporate &amp; foundation support</p>
            <h2 className="mb-4">Partner with the museum</h2>
            <p className="prose-museum text-ink-soft">
              Borderland businesses and regional foundations underwrite
              special exhibitions, free school field trips, professional
              development for teachers, and our annual remembrance programs.
              Sponsorship opportunities range from single programs to
              multi-year partnerships and are tailored to each
              partner&rsquo;s mission.
            </p>
            <a
              href="mailto:development@elpasoholocaustmuseum.org"
              className="mt-4 inline-block rounded-sm border border-ink px-5 py-3 no-underline hover:bg-ink hover:text-paper"
            >
              Discuss a partnership
            </a>
          </div>
          <div>
            <p className="eyebrow mb-3">Ways to give</p>
            <h2 className="mb-4">In addition to cash</h2>
            <ul className="space-y-3 text-ink-soft">
              <li className="border-t border-ink/10 pt-3">
                <strong>Stock and securities</strong> &mdash; gifts of
                appreciated assets carry tax advantages for the donor and
                the museum.
              </li>
              <li className="border-t border-ink/10 pt-3">
                <strong>Donor-advised funds</strong> &mdash; recommend a
                grant from your DAF to the El Paso Holocaust Museum and
                Study Center.
              </li>
              <li className="border-t border-ink/10 pt-3">
                <strong>IRA qualified charitable distributions</strong>
                &mdash; donors age 70&frac12; and older may make
                tax-advantaged gifts directly from an IRA.
              </li>
              <li className="border-t border-ink/10 pt-3">
                <strong>Tribute and memorial gifts</strong> &mdash; honor a
                loved one, an educator, or a survivor with a gift in their
                name.
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-16 rounded-sm border border-ink/10 p-6 text-sm text-ink-muted">
          The El Paso Holocaust Museum and Study Center is a 501(c)(3)
          nonprofit organization. Contributions are tax-deductible to the
          fullest extent allowed by law. EIN forthcoming &middot; mailing
          address: 715 N. Oregon Street, El Paso, Texas 79902.
        </div>
      </Container>
    </>
  );
}
