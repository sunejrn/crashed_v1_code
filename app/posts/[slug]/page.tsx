import { getPostBySlug, getPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import MDXContent from '@/components/mdx-content';

// Generate static paths for all posts
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

interface PostProps {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: PostProps) {
  const { slug } = params; // Destructure slug from params
  const post = await getPostBySlug(slug);

  // If the post doesn't exist, return a 404 page
  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, image, author, publishedAt } = metadata;

  return (
    <section className="pb-24 pt-32">
      <div className="container max-w-3xl">
        {/* Back to posts link */}
        <Link
          href="/posts"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-foreground"
        >
          <FaArrowLeft className="h-4 w-5" />
          <span>Back to posts</span>
        </Link>

        {/* Post image */}
        {image && (
          <div className="relative mb-6 h-80 w-full overflow-hidden rounded-lg">
            <Image
              src={image}
              priority
              alt={title || 'Post image'}
              className="rounded-2xl object-cover"
              fill
            />
          </div>
        )}

        {/* Post header */}
        <header>
          <h1 className="title">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            <span className="italic">by</span>{' '}
            <span className="font-semibold">{author} - Kendev</span> /{' '}
            <span className="font-semibold">{formatDate(publishedAt ?? '')}</span>
          </p>
        </header>

        {/* Post content */}
        <main className="prose mt-16 dark:prose-invert">
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
}