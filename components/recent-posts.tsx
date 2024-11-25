import Link from "next/link"
import { getPosts } from "@/lib/posts"
import Posts from "@/components/posts"

export default async function RecentPosts() {

    // I only need 5(Five) Recent Posts
    const posts = await getPosts(5);

  return (
    <section className="pb-24">
        <div>
            <h2 className="title mb-12">My Recent Posts</h2>
            <Posts posts={posts} />

            <Link
                href={"/posts"}
                className="mt-8 inline-flex items-center gap-2 text-muted-foreground"
            >
                <span className="hover:text-blue-500">View All Posts</span>
            </Link>
        </div>
    </section>
  )
}
