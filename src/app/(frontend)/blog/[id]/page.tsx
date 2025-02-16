import React from "react";
import { getPayload } from "payload";
import { notFound } from "next/navigation";
import { formatDate } from "@/utils/formatDate";
import configPromise from "@payload-config";

const BlogPost = async ({ params }: { params: { id: string } }) => {
  const payload = await getPayload({ config: configPromise });

  // Fetch the specific blog post
  const blog = await payload.findByID({
    collection: "blog",
    id: params.id,
  });

  if (!blog) {
    return notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        <div className="text-gray-500 mb-8">
          <span>
            Published:{" "}
            {blog.publishedDate
              ? formatDate(blog.publishedDate)
              : "Not published"}
          </span>
        </div>

        {/* Content section */}
        <div className="prose max-w-none">
          {blog.content && (
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          )}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
