import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="p-2 h-full overflow-auto">
        <div className=" w-full h-full flex flex-col gap-8">
          <h1 className="font-boska text-9xl text-zinc-50">
            madeleydesignstudio
          </h1>
          <div className="flex flex-col gap-4 items-end">
            <p className="font-bricolage text-xl max-w-2xl text-zinc-50 font-extralight">
              We are madeleydesignstudio — We specialise in creative
              engineering, engineering, transforming complex challenges into
              tangible realities swiftly, elegantly, and with technical
              precision.
            </p>
            <p className="font-bricolage text-xl max-w-2xl text-zinc-50 font-extralight">
              Guided by your vision and our engineering ingenuity, we create
              solutions that are one-of-a-kind, impactful, and a testament to
              innovative thinking made real.
            </p>
            <Link
              href="/contact"
              className="text-left text-zinc-500 w-full max-w-2xl"
            >
              Get In Touch
            </Link>
          </div>
          <div className=" flex justify-center items-center">
            <Image
              src="/danielcmadeley-mockup.jpeg"
              alt="Madeley Design Studio"
              width={960}
              height={540}
            />
          </div>
          <div className="w-full flex justify-left items-center">
            <p className="font-bricolage text-xl max-w-2xl text-zinc-50 font-extralight">
              A Design & Development studio that is small by design, but
              monolific by nature. We work with brands and companies to craft a
              digital presence that captivates and resonates with its users.
            </p>
          </div>
          <div className="w-[75%] mx-auto">
            <Separator className="h-[0.5px] bg-zinc-50" />
          </div>

          <div className="w-full py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Left Column */}
              <div className="space-y-12">
                <div>
                  <h2 className="font-boska text-4xl text-zinc-50">
                    Our Studio
                  </h2>
                  <h3 className="font-boska text-3xl text-zinc-400">
                    &amp; Services
                  </h3>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bricolage text-zinc-400">Our promises</h4>
                  <ul className="space-y-2">
                    {[
                      "Transparent Pricing",
                      "Quality Assured",
                      "Fast Delivery",
                      "Unique Designs",
                      "Full Support",
                      "Hands-Off Experience",
                    ].map((promise, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-zinc-400">•</span>
                        <span className="font-bricolage text-zinc-300 font-extralight">
                          {promise}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                <p className="font-bricolage text-xl max-w-2xl text-zinc-50 font-extralight">
                  Passionate about doing good work and challenging the norm, our
                  purposefully small, micro-studio maintains a lean and agile
                  structure that empowers us to adapt and employ specialized
                  knowledge as needed for each project, ensuring that we remain
                  flexible and exploratory.
                </p>

                <p className="font-bricolage text-xl max-w-2xl text-zinc-50 font-extralight">
                  Our inherently agile approach is especially suited for
                  startups and entrepreneurs navigating pivotal stages in their
                  journey. We collaborate closely with them to transform their
                  digital presence into a manifestation of their objectives,
                  principles, and mission.
                </p>

                <div className="space-y-6">
                  <h4 className="font-bricolage text-xl text-zinc-400">
                    Services &amp; Capabilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <p className="font-bricolage text-zinc-50 font-extralight">
                        Website Design
                      </p>
                      <p className="font-bricolage text-zinc-50 font-extralight">
                        Responsive Design
                      </p>
                      <p className="font-bricolage text-zinc-50 font-extralight">
                        Apps &amp; User Interface
                      </p>
                      <p className="font-bricolage text-zinc-50 font-extralight">
                        Interaction Design
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-bricolage text-zinc-50 font-extralight">
                        Art &amp; Creative Direction
                      </p>
                      <p className="font-bricolage text-zinc-50 font-extralight">
                        Product Design
                      </p>
                      <p className="font-bricolage text-zinc-50 font-extralight">
                        Product Strategy
                      </p>
                      <p className="font-bricolage text-zinc-50 font-extralight">
                        Visual Identity
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-bricolage text-zinc-50 font-extralight">
                        Website Development
                      </p>
                      <p className="font-bricolage text-zinc-50 font-extralight">
                        Frontend Development
                      </p>
                      <p className="font-bricolage text-zinc-50 font-extralight">
                        Digital Animation
                      </p>
                    </div>
                  </div>
                </div>

                <p className="font-bricolage text-zinc-50 font-extralight">
                  — Put simply, we work with those wanting and willing to push
                  the boundaries, and challenge the norm. We craft websites and
                  apps that are based within goals and deliverables, but with
                  the creative lid off.
                </p>

                <div>
                  <Link
                    href="/quote"
                    className="inline-flex items-center text-zinc-400 hover:text-zinc-50 transition-colors"
                  >
                    Get a quote
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[75%] mx-auto">
            <Separator className="h-[0.5px] bg-zinc-50" />
          </div>

          <div className="w-full py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Left Column */}
              <div className="space-y-12">
                <div>
                  <h2 className="font-boska text-4xl text-zinc-50">
                    Selected Work
                  </h2>
                  <h3 className="font-boska text-3xl text-zinc-400">
                    &amp; Case Studies
                  </h3>
                </div>

                <p className="font-bricolage text-xl max-w-2xl text-zinc-50 font-extralight">
                  We partner with ambitious clients to craft digital experiences
                  that elevate brands and drive meaningful engagement. Explore a
                  selection of our recent work below.
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <p className="font-bricolage text-xl max-w-2xl text-zinc-50 font-extralight">
                  Each project represents our commitment to merging technical
                  excellence with design innovation. We pride ourselves on
                  understanding our clients&apos; vision and translating it into
                  impactful digital solutions.
                </p>

                <div>
                  <Link
                    href="/work"
                    className="inline-flex items-center text-zinc-400 hover:text-zinc-50 transition-colors"
                  >
                    View all projects
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="group space-y-4">
                <div className="overflow-hidden relative aspect-[4/3]">
                  <Image
                    src="/project1.jpg"
                    alt="Project 1"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h4 className="font-boska text-2xl text-zinc-50">
                    Visionary Startup Platform
                  </h4>
                  <p className="font-bricolage text-zinc-400 font-extralight">
                    Web Application, UX Design
                  </p>
                </div>
                <p className="font-bricolage text-zinc-300 font-extralight">
                  A comprehensive digital platform that transformed user
                  engagement for an emerging tech startup.
                </p>
                <Link
                  href="/case-studies/visionary-startup"
                  className="inline-flex items-center text-zinc-400 hover:text-zinc-50 transition-colors"
                >
                  View case study
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Project 2 */}
              <div className="group space-y-4">
                <div className="overflow-hidden relative aspect-[4/3]">
                  <Image
                    src="/project2.jpg"
                    alt="Project 2"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h4 className="font-boska text-2xl text-zinc-50">
                    Immersive Brand Experience
                  </h4>
                  <p className="font-bricolage text-zinc-400 font-extralight">
                    Interactive Design, Frontend Development
                  </p>
                </div>
                <p className="font-bricolage text-zinc-300 font-extralight">
                  An award-winning interactive website that showcases a luxury
                  brand&apos;s heritage and craftsmanship.
                </p>
                <Link
                  href="/case-studies/immersive-brand"
                  className="inline-flex items-center text-zinc-400 hover:text-zinc-50 transition-colors"
                >
                  View case study
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Project 3 */}
              <div className="group space-y-4">
                <div className="overflow-hidden relative aspect-[4/3]">
                  <Image
                    src="/project3.jpg"
                    alt="Project 3"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h4 className="font-boska text-2xl text-zinc-50">
                    E-Commerce Reimagined
                  </h4>
                  <p className="font-bricolage text-zinc-400 font-extralight">
                    UI/UX Design, Full-Stack Development
                  </p>
                </div>
                <p className="font-bricolage text-zinc-300 font-extralight">
                  A bespoke e-commerce solution that increased conversion rates
                  by 40% through intuitive design.
                </p>
                <Link
                  href="/case-studies/ecommerce-reimagined"
                  className="inline-flex items-center text-zinc-400 hover:text-zinc-50 transition-colors"
                >
                  View case study
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-[75%] mx-auto">
            <Separator className="h-[0.5px] bg-zinc-50" />
          </div>

          {/* Questions and Testimonials Section */}
          <div className="w-full py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Left Column */}
              <div className="space-y-12">
                <div>
                  <h2 className="font-boska text-4xl text-zinc-50">
                    Questions
                  </h2>
                  <h3 className="font-boska text-3xl text-zinc-400">
                    &amp; Testimonials
                  </h3>
                </div>

                <p className="font-bricolage text-xl max-w-2xl text-zinc-50 font-extralight">
                  We believe in transparency and clear communication. Here are
                  answers to some commonly asked questions about our process,
                  approach, and services.
                </p>

                <div className="space-y-6">
                  {/* FAQ Items */}
                  <div className="border-b border-zinc-800 pb-4">
                    <h4 className="font-bricolage text-xl text-zinc-50 mb-2">
                      What is your design process?
                    </h4>
                    <p className="font-bricolage text-zinc-400 font-extralight">
                      Our process begins with in-depth discovery to understand
                      your goals, audience, and challenges. We then move through
                      strategic planning, design concepts, implementation, and
                      thorough testing before launch, with ongoing support
                      afterwards.
                    </p>
                  </div>

                  <div className="border-b border-zinc-800 pb-4">
                    <h4 className="font-bricolage text-xl text-zinc-50 mb-2">
                      How long does a typical project take?
                    </h4>
                    <p className="font-bricolage text-zinc-400 font-extralight">
                      Project timelines vary based on scope and complexity. A
                      streamlined website might take 4-6 weeks, while a complex
                      application could take 3-6 months. We&apos;ll provide a
                      realistic timeline during our initial consultation.
                    </p>
                  </div>

                  <div className="border-b border-zinc-800 pb-4">
                    <h4 className="font-bricolage text-xl text-zinc-50 mb-2">
                      Do you work with startups?
                    </h4>
                    <p className="font-bricolage text-zinc-400 font-extralight">
                      Absolutely. Our agile approach is particularly well-suited
                      for startups. We understand the unique challenges you face
                      and can help establish a compelling digital presence that
                      positions you for growth.
                    </p>
                  </div>
                </div>

                <div>
                  <Link
                    href="/faq"
                    className="inline-flex items-center text-zinc-400 hover:text-zinc-50 transition-colors"
                  >
                    View all FAQs
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column - Testimonials */}
              <div className="space-y-8">
                <p className="font-bricolage text-xl max-w-2xl text-zinc-50 font-extralight">
                  Our clients have experienced the difference our approach
                  makes. Here&apos;s what some of them have to say about working
                  with us.
                </p>

                {/* Testimonial Cards */}
                <div className="space-y-8">
                  <div className="bg-zinc-900/50 p-6 rounded-sm border border-zinc-800">
                    <p className="font-bricolage text-zinc-300 italic mb-4">
                      &quot;The team at madeleydesignstudio transformed our
                      digital presence with their innovative approach. They
                      didn&apos;t just deliver a website—they crafted an
                      experience that perfectly captures our brand.&quot;
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-zinc-700 mr-3"></div>
                      <div>
                        <p className="font-bricolage text-zinc-50">
                          Sarah Johnson
                        </p>
                        <p className="font-bricolage text-zinc-400 text-sm">
                          CEO, Innovative Solutions
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-900/50 p-6 rounded-sm border border-zinc-800">
                    <p className="font-bricolage text-zinc-300 italic mb-4">
                      &quot;Working with madeleydesignstudio was refreshingly
                      different. Their technical expertise combined with their
                      creative vision resulted in a platform that exceeded our
                      expectations and delighted our users.&quot;
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-zinc-700 mr-3"></div>
                      <div>
                        <p className="font-bricolage text-zinc-50">
                          David Chen
                        </p>
                        <p className="font-bricolage text-zinc-400 text-sm">
                          Founder, TechStart
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Link
                    href="/testimonials"
                    className="inline-flex items-center text-zinc-400 hover:text-zinc-50 transition-colors"
                  >
                    Read more testimonials
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[75%] mx-auto">
            <Separator className="h-[0.5px] bg-zinc-50" />
          </div>

          {/* News Updates and Thoughts Section */}
          <div className="w-full py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Left Column */}
              <div className="space-y-12">
                <div>
                  <h2 className="font-boska text-4xl text-zinc-50">
                    News Updates
                  </h2>
                  <h3 className="font-boska text-3xl text-zinc-400">
                    &amp; Thoughts
                  </h3>
                </div>

                <p className="font-bricolage text-xl max-w-2xl text-zinc-50 font-extralight">
                  Insights, reflections, and updates from our studio. We share
                  our perspectives on design, development, and the ever-evolving
                  digital landscape.
                </p>

                <div>
                  <Link
                    href="/blog"
                    className="inline-flex items-center text-zinc-400 hover:text-zinc-50 transition-colors"
                  >
                    View all posts
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <p className="font-bricolage text-xl max-w-2xl text-zinc-50 font-extralight">
                  We regularly share our thoughts on industry trends, technical
                  challenges, and creative approaches. Our writing reflects our
                  commitment to pushing boundaries and exploring new
                  possibilities.
                </p>
              </div>
            </div>

            {/* Blog Post Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Blog Post 1 */}
              <div className="group space-y-4">
                <div className="overflow-hidden relative aspect-[16/9]">
                  <Image
                    src="/blog1.jpg"
                    alt="Blog post 1"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="font-bricolage text-zinc-400 text-sm mb-1">
                    June 15, 2023
                  </p>
                  <h4 className="font-boska text-2xl text-zinc-50">
                    The Future of Web Animation: Beyond the Basics
                  </h4>
                </div>
                <p className="font-bricolage text-zinc-300 font-extralight">
                  Exploring how advanced animation techniques are transforming
                  user experiences and creating more engaging digital
                  environments.
                </p>
                <Link
                  href="/blog/future-web-animation"
                  className="inline-flex items-center text-zinc-400 hover:text-zinc-50 transition-colors"
                >
                  Read article
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Blog Post 2 */}
              <div className="group space-y-4">
                <div className="overflow-hidden relative aspect-[16/9]">
                  <Image
                    src="/blog2.jpg"
                    alt="Blog post 2"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="font-bricolage text-zinc-400 text-sm mb-1">
                    May 22, 2023
                  </p>
                  <h4 className="font-boska text-2xl text-zinc-50">
                    Design Systems in Practice: Building for Scale
                  </h4>
                </div>
                <p className="font-bricolage text-zinc-300 font-extralight">
                  How well-structured design systems can streamline development,
                  ensure consistency, and accommodate growth without sacrificing
                  creativity.
                </p>
                <Link
                  href="/blog/design-systems-practice"
                  className="inline-flex items-center text-zinc-400 hover:text-zinc-50 transition-colors"
                >
                  Read article
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Blog Post 3 */}
              <div className="group space-y-4">
                <div className="overflow-hidden relative aspect-[16/9]">
                  <Image
                    src="/blog3.jpg"
                    alt="Blog post 3"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="font-bricolage text-zinc-400 text-sm mb-1">
                    April 8, 2023
                  </p>
                  <h4 className="font-boska text-2xl text-zinc-50">
                    The Human Side of Technical Engineering
                  </h4>
                </div>
                <p className="font-bricolage text-zinc-300 font-extralight">
                  Reflections on balancing technical excellence with empathy and
                  user-centered thinking in the development process.
                </p>
                <Link
                  href="/blog/human-side-engineering"
                  className="inline-flex items-center text-zinc-400 hover:text-zinc-50 transition-colors"
                >
                  Read article
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
