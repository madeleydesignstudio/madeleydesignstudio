import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    slug: "engineering-excellence",
    title: "Engineering Excellence in Modern Design",
    excerpt:
      "How technical precision shapes the future of creative engineering.",
    date: "June 12, 2023",
    readTime: "5 min read",
    coverImage: "/blog-1.jpg",
  },
  {
    id: 2,
    slug: "design-principles",
    title: "Core Design Principles for Digital Products",
    excerpt:
      "Exploring the foundational elements that make digital products resonate with users.",
    date: "July 8, 2023",
    readTime: "7 min read",
    coverImage: "/blog-2.jpg",
  },
  {
    id: 3,
    slug: "future-of-web",
    title: "The Future of Web Development",
    excerpt:
      "Emerging technologies and methodologies shaping the next generation of web experiences.",
    date: "August 15, 2023",
    readTime: "6 min read",
    coverImage: "/blog-3.jpg",
  },
];

const Blog = () => {
  return (
    <div className="w-full h-full">
      <div className="p-2 h-full overflow-auto">
        <div className="w-full h-full flex flex-col gap-8">
          <h1 className="font-boska text-9xl text-zinc-50">Journal</h1>

          <div className="flex flex-col gap-4 items-end">
            <p className="font-bricolage text-xl max-w-2xl text-zinc-50 font-extralight">
              Thoughts, insights, and perspectives on design, development, and
              the intersection of creativity and technology.
            </p>
            <p className="font-bricolage text-xl max-w-2xl text-zinc-50 font-extralight">
              We share our process, learnings, and expertise to contribute to
              the broader conversation about the evolution of digital
              experiences.
            </p>
          </div>

          <div className="w-[75%] mx-auto mt-8">
            <Separator className="h-[0.5px] bg-zinc-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                <div className="space-y-6 hover:opacity-90 transition-opacity">
                  <div className="relative w-full aspect-video overflow-hidden bg-zinc-800">
                    {/* Fallback for missing images */}
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-bricolage">
                      madeleydesignstudio
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-zinc-400 font-bricolage text-sm">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="font-boska text-3xl text-zinc-50 group-hover:text-zinc-300 transition-colors">
                      {post.title}
                    </h2>

                    <p className="font-bricolage text-zinc-300 font-extralight">
                      {post.excerpt}
                    </p>

                    <div className="inline-flex items-center text-zinc-400 group-hover:text-zinc-50 transition-colors pt-2">
                      Read article
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
