import { getPayload } from "payload";
import configPromise from "@payload-config";
import { formatDate } from "@/utils/formatDate";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Blog } from "@/payload-types";

// Generate static params for all published blog posts
export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });

  const blogs = await payload.find({
    collection: "blog",
    where: {
      status: {
        equals: "published",
      },
    },
  });

  return blogs.docs.map((blog) => ({
    id: blog.id,
  }));
}

interface BlogPostProps {
  params: { id: string };
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const payload = await getPayload({ config: configPromise });

  // Fetch the specific blog post with type assertion
  const blog = (await payload.findByID({
    collection: "blog",
    id: params.id,
  })) as Blog;

  // If blog post not found or not published, return 404
  if (!blog || blog.status !== "published") {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="text-gray-600">
            <div>ID: {blog.id}</div>
            <div>
              Published:{" "}
              {blog.publishedDate
                ? formatDate(blog.publishedDate)
                : "Not published"}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose max-w-none">
          {blog.content && (
            <div
              dangerouslySetInnerHTML={{
                __html: typeof blog.content === "string" ? blog.content : "",
              }}
            />
          )}
        </div>

        {/* Navigation */}
        <div className="mt-8 pt-8 border-t">
          <Link href="/blog" className="text-blue-500 hover:underline">
            ← Back to all posts
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
