import React from "react";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { formatDate } from "@/utils/formatDate";
import { notFound } from "next/navigation";
import Link from "next/link";

// Define TypeScript interface for the page propss
interface PageProps {
  params: {
    id: string;
  };
}

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

const BlogPost = async ({ params }: PageProps) => {
  const payload = await getPayload({ config: configPromise });

  // Fetch the specific blog post
  const blog = await payload.findByID({
    collection: "blog",
    id: params.id,
  });

  // If blog post not found or not published, return 404
  if (!blog) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="text-gray-600">
            Published:{" "}
            {blog.publishedDate
              ? formatDate(blog.publishedDate)
              : "Not published"}
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
