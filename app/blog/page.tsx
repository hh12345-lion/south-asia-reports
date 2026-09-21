import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Blog | South Asia Reports",
  description:
    "Articles for UK immigration solicitors on South Asia country expert evidence, Upper Tribunal guidance, and instructing country experts.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Blog" }];

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "South Asia Reports Blog",
    url: `${SITE_URL}/blog`,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      image: post.image ? `${SITE_URL}${post.image}` : undefined,
    })),
  };

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} extra={blogLd} />
      <PageShell
        title="South Asia Reports Blog"
        subtitle="Practitioner articles on country expert evidence, Upper Tribunal guidance, and instructing South Asia country experts."
        breadcrumbs={crumbs}
      >
        {posts.length === 0 ? (
          <p className="text-body">Articles will appear here shortly.</p>
        ) : (
          <ul className="grid gap-8 sm:grid-cols-1">
            {posts.map((post) => (
              <li key={post.slug} className="overflow-hidden border border-rule bg-surface">
                {post.image ? (
                  <Link href={`/blog/${post.slug}`} className="relative block h-56 w-full">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 52rem"
                      className="object-cover"
                    />
                  </Link>
                ) : null}
                <div className="p-6">
                  <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-indigo">
                    <time dateTime={post.updated || post.date}>
                      {new Date(post.updated || post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="mx-2 text-ink-soft">·</span>
                    <span className="normal-case tracking-normal text-ink-soft">
                      {post.readingTime}
                    </span>
                  </p>
                  <h2 className="mt-3 font-display text-2xl text-ink">
                    <Link href={`/blog/${post.slug}`} className="hover:text-indigo">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-body leading-relaxed">{post.description}</p>
                  <p className="mt-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[15px] font-medium text-ochre hover:underline"
                    >
                      Read article
                    </Link>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </PageShell>
    </>
  );
}
