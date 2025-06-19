// //"use client"` directive
// "use client"

// import Link from 'next/link'
// import React, { useEffect } from 'react'
// import { Button } from './ui/button'
// import Image from 'next/image'
// import { useRef } from 'react'
// const HeroSection = () => {
// const imageRef = useRef(null);
// useEffect(()=>{
//     const imageElement = imageRef.current;
//     const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     const scrollThreshold = 100;
//     if(scrollPosition > scrollThreshold) {
//         imageElement.classList.add('scrolled');
//     } else {
//         imageElement.classList.remove("scrolled");
//       }
    
//     };
//     window.addEventListener('scroll', handleScroll);
//       // Cleanup on unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);



//     return (
//         <section className="w-full pt-36 md:pt-48 pb-10">
//             <div className="space-y-10 text-center px-4">
//                 {/* Heading and Subtext */}
//                 <div className="space-y-6 max-w-4xl mx-auto">
//                     <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl gradient-title text-center">
//                         AI Career Coach for
//                         <br />
//                         Professional Success
//                     </h1>
//                     <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
//                         Advance your career with personalized guidance, interview prep, and AI-powered tools for job success.
//                     </p>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                     <Link href="/dashboard">
//                         <Button size="lg" className="px-8 cursor-pointer">
//                             Get Started
//                         </Button>
//                     </Link>
//                     <Link href="/demo"> {/* You can change /demo to any video or feature page */}
//                         <Button size="lg" className="px-8 cursor-pointer" variant="outline">
//                             Watch Demo
//                         </Button>
//                     </Link>
//                 </div>

//                 {/* Banner Image */}


//                 <div className="hero-image-wrapper mt-5 md:mt-0">
//                     <div ref={imageRef} className='hero-image'>
//                         <Image
//                             src="/banner.jpg"
//                             alt="Banner AI Career Coach"
//                             className="rounded-lg shadow-2xl border mx-auto"
//                             width={1280}
//                             height={720}
//                             priority
//                         />
//                     </div>

//                 </div>

//             </div>
        
//         </section >
//     )
// }

// export default HeroSection

"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const scrollThreshold = 50; // Lowered for mobile view

    const handleScroll = () => {
      if (!imageElement) return;
      const scrollPosition = window.scrollY;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    handleScroll(); // Check on initial load
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-10 text-center px-4">
        {/* Heading and Subtext */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl gradient-title text-center">
            AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with personalized guidance, interview prep, and AI-powered tools for job success.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 cursor-pointer">
              Get Started
            </Button>
          </Link>
          <Link href="/https://www.youtube.com/clip/UgkxMKZ7D2QMpxmLkt3XJv54ucsEVSOy_ZT7">
            <Button size="lg" className="px-8 cursor-pointer" variant="outline">
              Watch Demo
            </Button>
          </Link>
        </div>

        {/* Banner Image */}
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpg"
              alt="Banner AI Career Coach"
              className="rounded-lg shadow-2xl border mx-auto"
              width={1280}
              height={720}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
