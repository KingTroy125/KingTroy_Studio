
"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words = ["better", "cute", "beautiful", "modern"],
  className,
  duration = 2000,
}: {
  words?: string[];
  className?: string;
  duration?: number;
}) => {
  const [index, setIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("animate-fade-in");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationClass("animate-fade-out");
      
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimationClass("animate-fade-in");
      }, 500); // Half a second for fade out before changing word
    }, duration);

    return () => clearInterval(intervalId);
  }, [words.length, duration]);

  return (
    <span
      className={cn(
        "inline-block mx-2 text-studio-purple font-bold",
        className,
        animationClass
      )}
    >
      {words[index]}
    </span>
  );
};
