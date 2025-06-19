'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/404-robot.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      {/* Lottie animation */}
      {animationData && (
        <div className="w-40 sm:w-56 md:w-64 h-auto mb-6">
          <Lottie animationData={animationData} loop />
        </div>
      )}

      {/* Message text */}
      <p className="text-gray-600 mb-6 text-base sm:text-lg max-w-xs sm:max-w-md md:max-w-lg">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Return Home Button */}
      <Link href="/">
        <Button className="px-6 py-2 text-sm sm:text-base">Return Home</Button>
      </Link>
    </div>
  );
}
