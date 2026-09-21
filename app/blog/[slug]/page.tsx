import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { getBlogBySlug, getBlogSlugs } from "@/lib/blog";
import { markdownToHtml } from "@/lib/markdown";
import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  const meta = createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
  if (post.image) {
    const images = [
      {
        url: `${SITE_URL}${post.image}`,
        width: 1200,
        height: 630,
        alt: post.imageAlt || post.title,
      },
    ];
    return {
      ...meta,
      openGraph: {
        ...(typeof meta.openGraph === "object" ? meta.openGraph : {}),
        type: "article",
        images,
      },
      twitter: {
        ...(typeof meta.twitter === "object" ? meta.twitter : {}),
        images: [`${SITE_URL}${post.image}`],
      },
    };
  }
  return meta;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);
  const url = `${SITE_URL}/blog/${post.slug}`;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    image: post.image ? `${SITE_URL}${post.image}` : undefined,
    author: { "@type": "Organization", name: "South Asia Reports" },
    publisher: {
      "@type": "Organization",
      name: "South Asia Reports",
      url: SITE_URL,
    },
    mainEntityOfPage: url,
    url,
  };

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} extra={articleLd} />
      {post.image ? (
        <div className="relative mx-auto h-[min(26rem,50vw)] w-full max-w-5xl border-b border-rule">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <article className="mx-auto max-w-[52rem] px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-indigo">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <span className="mx-2 text-ink-soft">/</span>
          <time dateTime={post.updated || post.date}>
            {new Date(post.updated || post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span className="mx-2 text-ink-soft">·</span>
          <span className="normal-case tracking-normal text-ink-soft">{post.readingTime}</span>
        </p>
        <h1 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-lg text-body">{post.description}</p>

        <div className="blog-prose mt-10" dangerouslySetInnerHTML={{ __html: html }} />

        <p className="mt-12 border-t border-rule pt-8 text-[15px]">
          <Link href="/blog" className="font-medium text-ochre hover:underline">
            ← Back to the blog
          </Link>
          <span className="mx-3 text-ink-soft">·</span>
          <Link href="/contact" className="font-medium text-ochre hover:underline">
            Lodge a case
          </Link>
        </p>
      </article>
    </>
  );
}
