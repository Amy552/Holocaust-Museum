import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { sanityClient } from "@/lib/sanity";
import { upcomingEventsQuery } from "@/lib/queries";

type Event = {
  _id: string;
  title: string;
  slug: string;
  dateTime: string;
  location?: string;
  kind?: string;
  summary?: string;
};

export const metadata = {
  title: "Events",
  description:
    "Survivor talks, bilingual lectures, film screenings, commemorations, and family programs at the El Paso Holocaust Museum and Study Center.",
};
export const revalidate = 60;

const annualPrograms = [
  {
    season: "January",
    title: "International Holocaust Remembrance Day",
    body: "Extended evening hours, free admission, and a public reading drawn from testimonies in the museum's archives.",
  },
  {
    season: "Spring",
    title: "Yom HaShoah community ceremony",
    body: "Co-hosted with Temple Mount Sinai and B'nai Zion Congregation: candle-lighting, reading of names, and Kaddish.",
  },
  {
    season: "Spring",
    title: "Borderland Educators Institute",
    body: "Five-day professional development for grade 6–12 teachers in Texas and New Mexico, with CPE credit.",
  },
  {
    season: "August",
    title: "August 3 community gathering",
    body: "Annual remembrance of the victims of the 2019 attack on our city, with a bilingual reading of names.",
  },
  {
    season: "November",
    title: "Kristallnacht commemoration",
    body: "An interfaith evening of testimony and reflection with El Paso's synagogues, churches, and mosques.",
  },
];

export default async function EventsPage() {
  let events: Event[] = [];
  try {
    events = await sanityClient.fetch<Event[]>(upcomingEventsQuery);
  } catch {
    // empty
  }

  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Programs and events"
        lede="Survivor talks, bilingual lectures, film screenings at the Plaza Theatre, civic commemorations, and family programs &mdash; throughout the year at 715 N. Oregon Street and at venues across El Paso, Las Cruces, and Ciudad Juárez."
      />

      <Container className="py-16">
        <section className="mb-16">
          <p className="eyebrow mb-3">Upcoming</p>
          <h2 className="mb-6">What&rsquo;s on the calendar</h2>
          {events.length === 0 ? (
            <div className="rounded-sm border border-dashed border-ink/20 p-10 text-center text-ink-muted">
              <p>
                Upcoming events will appear here once published in the
                Sanity Studio. In the meantime, our annual programs below
                give a sense of the rhythm of the museum&rsquo;s year.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-ink/10 border-t border-ink/10">
              {events.map((event) => (
                <li key={event._id} className="py-8">
                  <Link
                    href={`/events/${event.slug}`}
                    className="grid gap-4 no-underline md:grid-cols-[180px_1fr]"
                  >
                    <div>
                      <p className="font-serif text-xl">
                        {formatDate(event.dateTime)}
                      </p>
                      <p className="text-xs uppercase tracking-wider text-ink-muted">
                        {formatTime(event.dateTime)}
                      </p>
                    </div>
                    <div>
                      {event.kind && (
                        <p className="eyebrow mb-1">{event.kind}</p>
                      )}
                      <h3 className="mb-2 text-2xl">{event.title}</h3>
                      {event.location && (
                        <p className="text-sm text-ink-muted">
                          {event.location}
                        </p>
                      )}
                      {event.summary && (
                        <p className="mt-2 text-ink-soft">{event.summary}</p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-sm bg-paper-warm p-10">
          <p className="eyebrow mb-3">Throughout the year</p>
          <h2 className="mb-6">Annual programs</h2>
          <ul className="grid gap-8 md:grid-cols-2">
            {annualPrograms.map((p) => (
              <li key={p.title} className="border-t border-ink/10 pt-4">
                <p className="text-xs uppercase tracking-wider text-ink-muted">
                  {p.season}
                </p>
                <p className="mt-1 font-serif text-xl">{p.title}</p>
                <p className="mt-2 text-ink-soft">{p.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <p className="eyebrow mb-3">Subscribe</p>
          <h2 className="mb-4">Stay in touch</h2>
          <p className="prose-museum max-w-prose text-ink-soft">
            Our monthly newsletter shares upcoming programs in El Paso,
            Las Cruces, and Ciudad Juárez, along with news from the
            galleries, classrooms, and reading room. Newsletters are
            available in English and Spanish.
          </p>
          <a
            href="mailto:events@elpasoholocaustmuseum.org"
            className="mt-4 inline-block rounded-sm border border-ink px-5 py-3 no-underline hover:bg-ink hover:text-paper"
          >
            Join the mailing list
          </a>
        </section>
      </Container>
    </>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
}
