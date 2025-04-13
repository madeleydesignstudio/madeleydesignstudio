import React from "react";
import { getPayload } from "payload";
// import { formatDate } from "@/utils/formatDate"; // You'll
import configPromise from "@payload-config";
import { formatDate } from "@/utils/formatDate";
// need to create this utility

const Blog = async () => {
  // Fetch blog posts with pagination and sorting
  const payload = await getPayload({ config: configPromise });

  const blogs = await payload.find({
    collection: "blog",
    limit: 10,
    sort: "-createdAt", // Sort by newest first
    where: {
      status: {
        equals: "published",
      },
    },
  });

  return (
    <div className="container mx-auto py-8">
      {/* Search and Filter Section */}
      <div className="mb-8">
        <form className="flex gap-4">
          <input
            type="text"
            name="search"
            placeholder="Search posts..."
            className="px-4 py-2 border rounded"
          />
          <input type="date" name="date" className="px-4 py-2 border rounded" />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Filter
          </button>
        </form>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.docs.map((blog) => (
          <article
            key={blog.id}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <div className="text-sm text-gray-500 mb-4">
                <span>
                  Published:{" "}
                  {blog.publishedDate
                    ? formatDate(blog.publishedDate)
                    : "Not published"}
                </span>
              </div>
              <div className="prose line-clamp-3">
                {/* Add a content preview here */}
                <div
                  key={blog.id}
                  className="line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html:
                      typeof blog.content === "string"
                        ? (blog.content as string).slice(0, 150) + "..."
                        : "",
                  }}
                />
              </div>
              <a
                href={`/blog/${blog.id}`}
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                Read more →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
