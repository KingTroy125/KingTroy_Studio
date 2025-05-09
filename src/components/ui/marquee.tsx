import * as React from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  direction?: "left" | "up";
  pauseOnHover?: boolean;
  reverse?: boolean;
  fade?: boolean;
  className?: string;
  vertical?: boolean;
};

export const Marquee = ({
  children,
  direction = "left",
  pauseOnHover = false,
  reverse = false,
  fade = false,
  vertical = false,
  className,
}: MarqueeProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = React.useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      setTimeout(() => {
        setStart(true);
      }, 100);
    }
  }

  const transformProperty = vertical ? "Y" : "X";

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex w-full overflow-hidden [--duration:40s] [--gap:1rem]",
        vertical ? "flex-col h-full" : "flex-row",
        pauseOnHover && "hover:[animation-play-state:paused]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex min-w-full flex-shrink-0 items-center justify-around gap-[--gap] [animation:scroll_var(--duration)_linear_infinite]",
          vertical ? "flex-col" : "flex-row",
          reverse && "[animation-direction:reverse]",
          start && "animate-scroll"
        )}
      >
        {children}
      </div>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translate${transformProperty}(0);
            }
            100% {
              transform: translate${transformProperty}(-50%);
            }
          }
          .animate-scroll {
            animation: scroll var(--duration) linear infinite;
          }
        `}
      </style>
    </div>
  );
}; 