import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
    content: `
      <p>In the evolving landscape of digital design, engineering excellence has become the cornerstone of creating memorable user experiences. At madeleydesignstudio, we believe that technical precision is not just about functionality—it's about crafting solutions that elegantly solve complex problems.</p>
      
      <p>Creative engineering merges technical expertise with innovative thinking, allowing us to push boundaries while ensuring stability and performance. This approach enables us to deliver digital products that not only work flawlessly but also surprise and delight users.</p>
      
      <h2>The Intersection of Design and Engineering</h2>
      
      <p>The most compelling digital experiences emerge when design and engineering work in harmony. A visually stunning interface loses its impact if the underlying code can't support its ambitions. Similarly, technical brilliance falls short if it isn't channeled into creating intuitive, accessible user journeys.</p>
      
      <p>Our methodology places equal emphasis on creative vision and technical execution. By bringing designers and engineers into dialogue from day one, we ensure that our solutions are both aesthetically sophisticated and technically robust.</p>
      
      <h2>Technical Precision as a Design Principle</h2>
      
      <p>We approach technical precision as a design principle in itself. Clean code, optimized performance, and thoughtful architecture are as important to the success of a digital product as its visual identity. This commitment to excellence at every level allows us to create solutions that stand the test of time.</p>
      
      <p>As we look to the future, the role of engineering in design will only grow more significant. Emerging technologies like AI, WebGL, and advanced animation frameworks are opening new possibilities for creative expression. Mastering these tools requires a deep understanding of their technical underpinnings.</p>
      
      <p>At madeleydesignstudio, we're committed to staying at the forefront of these developments, continuously expanding our capabilities to bring ambitious creative visions to life through engineering excellence.</p>
    `,
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
    content: `
      <p>At the heart of every successful digital product lies a set of core design principles that guide its development and ensure it resonates with users. These principles serve as the foundation upon which we build experiences that are not only visually compelling but also intuitive, accessible, and meaningful.</p>
      
      <p>Drawing from our experience at madeleydesignstudio, we've identified several fundamental principles that consistently lead to exceptional digital products.</p>
      
      <h2>User-Centered Design</h2>
      
      <p>The most effective digital products are those designed with a deep understanding of user needs, behaviors, and motivations. By placing users at the center of the design process, we ensure that every decision serves their goals and enhances their experience.</p>
      
      <p>This approach involves extensive research, testing, and iteration. We engage with users throughout the development process, gathering feedback and refining our solutions to align with their expectations and requirements.</p>
      
      <h2>Purposeful Simplicity</h2>
      
      <p>Simplicity in design is not about minimalism for its own sake but about creating clarity and focus. By eliminating unnecessary complexity, we help users achieve their goals with minimal friction and cognitive load.</p>
      
      <p>This principle extends beyond visual design to encompass information architecture, interaction patterns, and content strategy. Every element should have a clear purpose and contribute to the overall user experience.</p>
      
      <h2>Consistency and Coherence</h2>
      
      <p>Consistency creates familiarity and builds trust. By establishing and adhering to design patterns, we create a sense of coherence that helps users navigate and understand digital products intuitively.</p>
      
      <p>This doesn't mean uniformity—rather, it's about creating a unified experience where variations are intentional and meaningful, serving specific user needs or highlighting important features.</p>
      
      <p>As we continue to explore and refine these principles, we remain committed to creating digital products that not only meet functional requirements but also forge emotional connections with users, delivering experiences that are both useful and delightful.</p>
    `,
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
    content: `
      <p>The web development landscape is constantly evolving, with new technologies, frameworks, and methodologies emerging at a rapid pace. As we look ahead, several key trends are poised to shape the future of how we build and experience the web.</p>
      
      <p>At madeleydesignstudio, we're passionate about staying at the forefront of these developments, exploring how they can be harnessed to create more compelling, performant, and accessible web experiences.</p>
      
      <h2>The Rise of Web Components and Micro-Frontends</h2>
      
      <p>Web components represent a shift toward more modular, reusable interface elements. By encapsulating functionality and styling, they enable more efficient development and greater consistency across platforms and projects.</p>
      
      <p>This modular approach extends to architecture with micro-frontends, allowing teams to develop, test, and deploy portions of an application independently. This increased flexibility and autonomy can lead to faster iteration and more resilient systems.</p>
      
      <h2>Performance as a First-Class Concern</h2>
      
      <p>As user expectations continue to rise, performance optimization has become non-negotiable. Techniques like server components, partial hydration, and streaming SSR are making it possible to deliver increasingly complex applications without sacrificing speed.</p>
      
      <p>Frameworks like Next.js and Remix are leading this charge, providing developers with powerful tools to build high-performance web applications that maintain a focus on user experience.</p>
      
      <h2>AI-Enhanced Development</h2>
      
      <p>Artificial intelligence is transforming how we approach web development, from code completion and bug detection to automated testing and optimization. These tools are not replacing human creativity but amplifying it, allowing developers to focus on higher-level problems and innovative solutions.</p>
      
      <p>As these technologies mature, we anticipate a new era of web development that combines human ingenuity with machine efficiency, resulting in experiences that are more sophisticated, personalized, and delightful than ever before.</p>
    `,
  },
];

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function BlogPost({ params }: Props) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full h-full">
      <div className="p-2 h-full overflow-auto">
        <div className="w-full h-full flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <Link
              href="/blog"
              className="inline-flex items-center text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Journal
            </Link>

            <h1 className="font-boska text-6xl md:text-7xl text-zinc-50">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-zinc-400 font-bricolage text-sm">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="relative w-full aspect-video overflow-hidden bg-zinc-800 mt-4">
            {/* Fallback for missing images */}
            <div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-bricolage">
              madeleydesignstudio
            </div>
          </div>

          <article className="w-full max-w-3xl mx-auto mt-8">
            <div
              className="prose prose-invert prose-zinc font-bricolage font-extralight"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <div className="w-[75%] mx-auto mt-16">
            <Separator className="h-[0.5px] bg-zinc-50" />
          </div>

          <div className="mt-8 space-y-6">
            <h3 className="font-boska text-3xl text-zinc-50">Read more</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    key={relatedPost.id}
                    className="group"
                  >
                    <div className="space-y-4 hover:opacity-90 transition-opacity">
                      <div className="relative w-full aspect-video overflow-hidden bg-zinc-800">
                        {/* Fallback for missing images */}
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-bricolage">
                          madeleydesignstudio
                        </div>
                      </div>

                      <h4 className="font-boska text-2xl text-zinc-50 group-hover:text-zinc-300 transition-colors">
                        {relatedPost.title}
                      </h4>

                      <div className="inline-flex items-center text-zinc-400 group-hover:text-zinc-50 transition-colors">
                        Read article
                        <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
