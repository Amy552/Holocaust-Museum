import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { sanityClient } from "@/lib/sanity";
import { newsQuery } from "@/lib/queries";

type NewsPost = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
  coverImage?: string;
};

export const metadata = {
  title: "News",
  description:
    "Announcements, recent acquisitions, research notes, and reflections from the El Paso Holocaust Museum and Study Center.",
};
export const revalidate = 60;

export default async function NewsPage() {
  let posts: NewsPost[] = [];
  try {
    posts = await sanityClient.fetch<NewsPost[]>(newsQuery);
  } catch {
    // empty
  }

  return (
    <>
      <PageHeader
        eyebrow="News &middot; Noticias"
        title="News from the museum"
        lede="Announcements, recent acquisitions, notes from our archivists and educators, and reflections from El Paso&mdash;in English and Spanish."
      />

      <Container className="py-16">
        {posts.length === 0 ? (
          <div className="rounded-sm border border-dashed border-ink/20 p-10 text-center text-ink-muted">
            <p>
              News posts will appear here once published in the Sanity
              Studio. For press inquiries, please contact{" "}
              <a
                href="mailto:press@elpasoholocaustmuseum.org"
                className="underline"
              >
                press@elpasoholocaustmuseum.org
              </a>
              .
            </p>
          </div>
        ) : (
          <ul className="grid gap-10 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post._id} className="border-t border-ink/10 pt-6">
                <Link
                  href={`/news/${post.slug}`}
                  className="block no-underline"
                >
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt=""
                      className="mb-4 aspect-[3/2] w-full object-cover"
                    />
                  )}
                  <p className="text-xs uppercase tracking-wider text-ink-muted">
                    {new Date(post.publishedAt).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="mt-1 mb-3">{post.title}</h3>
                  {post.excerpt && (
                    <p className="text-ink-soft">{post.excerpt}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <section className="mt-16 rounded-sm bg-paper-warm p-10">
          <p className="eyebrow mb-3">For journalists</p>
          <h2 className="mb-4">Press resources</h2>
          <p className="prose-museum max-w-prose text-ink-soft">
            We are glad to assist reporters covering El Paso, the
            Borderland, antisemitism and hate crimes, Holocaust education
            in Texas, and the ongoing work of the museum. Our
            communications office can arrange interviews with staff,
            educators, and (when families consent) survivors and
            second-generation speakers, and can supply images and
            background information.
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
