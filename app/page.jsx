
// "use client";
// import React from "react";
// import HeroSection from "@/components/hero";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { features } from "@/data/features";
// import { howItWorks } from "@/data/howItWorks";
// import { testimonial } from "@/data/testimonial";
// import Image from "next/image";
// import { motion } from "framer-motion"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import { faqs } from "@/data/faqs";
// import Link from "next/link";
// import { ArrowRightCircle } from "lucide-react";
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';
// export default function Home() {
//   return (
//     <div>
//       <div className="grid-background"></div>
//       <HeroSection />

//       <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
//             Powerful Features for Your Career Growth
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {features.map((feature, index) => (
//               <Card
//                 key={index}
//                 className="border-2 transition-all duration-300 hover:scale-105 hover:border-primary"
//               >
//                 <CardContent className="pt-6 text-center flex flex-col items-center gap-2">
//                   <div className="text-3xl text-primary">{feature.icon}</div>
//                   <h3 className="text-xl font-bold">{feature.title}</h3>
//                   <p className="text-muted-foreground text-sm">
//                     {feature.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>




//       <section className="w-full py-12 md:py-24 bg-muted/50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">
//                 <CountUp end={50} duration={2} />+
//               </h3>
//               <p className="text-muted-foreground">Industries Covered</p>
//             </div>

//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">
//                 <CountUp end={1000} duration={3} />+
//               </h3>
//               <p className="text-muted-foreground">Interview Questions</p>
//             </div>

//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">
//                 <CountUp end={95} duration={2} />%
//               </h3>
//               <p className="text-muted-foreground">Success Rate</p>
//             </div>

//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">
//                 <CountUp end={24} duration={2} />/
//                 <CountUp end={7} duration={2} />
//               </h3>
//               <p className="text-muted-foreground">AI Support Available</p>
//             </div>
//           </div>
//         </div>
//       </section>





//       <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <h2 className="text-3xl font-bold mb-4">How It Works</h2>
//             <p className="text-muted-foreground">
//               Four Simple Steps to Accelerate Your Career Growth
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {howItWorks.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center text-center space-y-4 transform transition duration-500 hover:-translate-y-2 hover:shadow-xl opacity-0 animate-fade-in"
//                 style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}
//               >
//                 <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
//                   {item.icon}
//                 </div>
//                 <h3 className="font-semibold text-xl">{item.title}</h3>
//                 <p className="text-muted-foreground">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
//             What Our Users Say
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {testimonial.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-background rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-[1.02]"
//               >
//                 <div className="p-6 flex flex-col space-y-4">
//                   {/* Top - Author Info */}
//                   <div className="flex items-center space-x-4">
//                     <div className="relative h-12 w-12 flex-shrink-0">
//                       <Image
//                         width={48}
//                         height={48}
//                         src={testimonial.image}
//                         alt={testimonial.author}
//                         className="rounded-full object-cover border-2 border-primary/20"
//                       />
//                     </div>
//                     <div>
//                       <p className="font-semibold">{testimonial.author}</p>
//                       <p className="text-sm text-muted-foreground">{testimonial.role}</p>
//                       <p className="text-sm text-primary">{testimonial.company}</p>
//                     </div>
//                   </div>

//                   {/* Quote */}
//                   <blockquote className="relative pl-4 text-muted-foreground italic">
//                     <span className="text-2xl text-primary absolute -left-2 top-0">“</span>
//                     <p className="z-10 relative">{testimonial.quote}</p>
//                     <span className="text-2xl text-primary absolute -bottom-2 right-0">”</span>
//                   </blockquote>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="w-full py-12 md:py-24">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <h2 className="text-3xl font-bold mb-4">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-muted-foreground">
//               Find answers to common questions about our platform
//             </p>
//           </div>

//           <div className="max-w-3xl mx-auto">
//             <Accordion type="single" collapsible className="w-full">
//               {faqs.map((faq, index) => (
//                 <AccordionItem
//                   key={index}
//                   value={`item-${index}`}
//                   className="border-b hover:bg-muted/30 transition duration-200"
//                 >
//                   <AccordionTrigger className="text-left font-medium cursor-pointer hover:text-primary transition">
//                     {faq.question}
//                   </AccordionTrigger>
//                   <AccordionContent className="text-muted-foreground">
//                     {faq.answer}
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}

//       <section className="w-full">
//         <div className="mx-auto py-24 gradient rounded-lg px-4">
//           <div className="bg-slate-100 rounded-2xl shadow-lg px-6 sm:px-12 md:px-20 py-16 max-w-5xl mx-auto flex flex-col items-center justify-center space-y-10 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 transform">
//             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
//               Unlock Your Career Breakthrough 🚀
//             </h2>
//             <p className="max-w-xl text-slate-800 text-lg md:text-xl font-medium">
//               Level up your professional journey with smart, AI-powered tools designed to help you land your dream job faster.
//             </p>
//             <p className="max-w-xl text-slate-700 text-base md:text-lg">
//               Thousands are already using it — why not you?
//             </p>

//             {/* 👇 Company Logos */}
//             <div className="flex flex-wrap justify-center items-center gap-8">
//               <Image src="/logos/google.png" alt="Google" width={90} height={40} />
//               <Image src="/logos/meta.png" alt="Meta" width={90} height={40} />
//               <Image src="/logos/microsoft.png" alt="Microsoft" width={90} height={40} />
//               <Image src="/logos/amazon.png" alt="Amazon" width={90} height={40} />
//             </div>

//             {/* 👇 Animated Stats */}
//             <div className="flex flex-col md:flex-row justify-center gap-10 mt-4">
//               <div className="text-center">
//                 <h3 className="text-3xl font-bold text-slate-800">
//                   <CountUp end={5000} duration={2} />+
//                 </h3>
//                 <p className="text-slate-700">Happy Users</p>
//               </div>
//               <div className="text-center">
//                 <h3 className="text-3xl font-bold text-slate-800">
//                   <CountUp end={95} duration={2} />%
//                 </h3>
//                 <p className="text-slate-700">Positive Feedback</p>
//               </div>
//               <div className="text-center">
//                 <h3 className="text-3xl font-bold text-slate-800">
//                   <CountUp end={40} duration={2} />+
//                 </h3>
//                 <p className="text-slate-700">Top Mentors</p>
//               </div>
//             </div>

//             {/* 👇 CTA Button */}
//             <Link href="/dashboard" passHref>
//               <Button
//                 size="lg"
//                 variant="secondary"
//                 className="h-11 mt-6 animate-bounce cursor-pointer hover:scale-105 transition-transform"
//               >
//                 Start Now <ArrowRightCircle className="ml-2 h-4 w-4" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>


//     </div>
//   );
// }


"use client";
import React from "react";
import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import Image from "next/image";
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Define the AnimatedCounter component
const AnimatedCounter = ({ end, duration, suffix = "", prefix = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp end={end} duration={duration} suffix={suffix} prefix={prefix} />
      ) : (
        <span>{prefix}0{suffix}</span>
      )}
    </span>
  );
};

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection/> 

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Powerful Features for Your Career Growth
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 transition-all duration-300 hover:scale-105 hover:border-primary"
              >
                <CardContent className="pt-6 text-center flex flex-col items-center gap-2">
                  <div className="text-3xl text-primary">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">
                <AnimatedCounter end={50} duration={2} suffix="+" />
              </h3>
              <p className="text-muted-foreground">Industries Covered</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">
                <AnimatedCounter end={1000} duration={3} suffix="+" />
              </h3>
              <p className="text-muted-foreground">Interview Questions</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">
                <AnimatedCounter end={95} duration={2} suffix="%" />
              </h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">
                <AnimatedCounter end={24} duration={2} suffix="/" />
                <AnimatedCounter end={7} duration={2} />
              </h3>
              <p className="text-muted-foreground">AI Support Available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Four Simple Steps to Accelerate Your Career Growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 transform transition duration-500 hover:-translate-y-2 hover:shadow-xl opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            What Our Users Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-[1.02]"
              >
                <div className="p-6 flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative h-12 w-12 flex-shrink-0">
                      <Image
                        width={48}
                        height={48}
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="rounded-full object-cover border-2 border-primary/20"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-primary">{testimonial.company}</p>
                    </div>
                  </div>

                  <blockquote className="relative pl-4 text-muted-foreground italic">
                    <span className="text-2xl text-primary absolute -left-2 top-0">"</span>
                    <p className="z-10 relative">{testimonial.quote}</p>
                    <span className="text-2xl text-primary absolute -bottom-2 right-0">"</span>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b hover:bg-muted/30 transition duration-200"
                >
                  <AccordionTrigger className="text-left font-medium cursor-pointer hover:text-primary transition">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg px-4">
          <div className="bg-slate-100 rounded-2xl shadow-lg px-6 sm:px-12 md:px-20 py-16 max-w-5xl mx-auto flex flex-col items-center justify-center space-y-10 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 transform">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Unlock Your Career Breakthrough 🚀
            </h2>
            <p className="max-w-xl text-slate-800 text-lg md:text-xl font-medium">
              Level up your professional journey with smart, AI-powered tools designed to help you land your dream job faster.
            </p>
            <p className="max-w-xl text-slate-700 text-base md:text-lg">
              Thousands are already using it — why not you?
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 py-6">
              {[
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
                  alt: "Google",
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/2504/2504903.png",
                  alt: "Meta",
                },
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
                  alt: "Microsoft",
                },
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
                  alt: "Amazon",
                },
              ].map((logo, index) => (
                <div
                  key={index}
                  className="w-[65px] h-[60px] flex items-center justify-center p-2 rounded-sm  shadow-md hover:shadow-lg transition hover:scale-110 "
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={90}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>


            <div className="flex flex-col md:flex-row justify-center gap-10 mt-4">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-slate-800">
                  <AnimatedCounter end={5000} duration={2} suffix="+" />
                </h3>
                <p className="text-slate-700">Happy Users</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-slate-800">
                  <AnimatedCounter end={95} duration={2} suffix="%" />
                </h3>
                <p className="text-slate-700">Positive Feedback</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-slate-800">
                  <AnimatedCounter end={40} duration={2} suffix="+" />
                </h3>
                <p className="text-slate-700">Top Mentors</p>
              </div>
            </div>

            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-6 animate-bounce cursor-pointer hover:scale-105 transition-transform"
              >
                Start Now <ArrowRightCircle className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  );
}
