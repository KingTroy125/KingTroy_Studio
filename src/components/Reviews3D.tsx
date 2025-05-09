/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. The website KingTroy built for us increased our conversion rate by 40%.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Working with KingTroy.Studio was the best decision we made. Their team delivered beyond our expectations.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "The design process was smooth, and the final product is stunning. Highly recommend their services.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Sarah",
    username: "@sarah",
    body: "Our new website has received countless compliments. KingTroy understood exactly what we needed.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Michael",
    username: "@michael",
    body: "The attention to detail and custom features make our site stand out from competitors. Worth every penny.",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Emma",
    username: "@emma",
    body: "From concept to launch, the team was professional, responsive, and incredibly talented.",
    img: "https://avatar.vercel.sh/emma",
  },
];

const firstRow = reviews.slice(0, 2);
const secondRow = reviews.slice(2, 4);
const thirdRow = reviews.slice(4, 6);
const fourthRow = reviews.slice(0, 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-60 cursor-pointer overflow-hidden rounded-xl border p-4 mb-4",
        "border-[#333] bg-[#0A0A0A] hover:bg-[#111]",
      )}
    >
      <div className="flex flex-row items-center gap-2 mb-2">
        <img className="rounded-full border border-[#333]" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-400">{body}</blockquote>
    </figure>
  );
};

const Reviews3D: React.FC = () => {
  return (
    <div className="bg-black py-16 md:py-24 px-4">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Real testimonials from businesses we've helped transform their online presence</p>
      </div>
      
      <div className="relative flex h-[500px] w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
        <div
          className="flex flex-row items-center gap-4"
          style={{
            transform:
              "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
          }}
        >
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:25s]" vertical>
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s]" vertical>
            {thirdRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:22s]" vertical>
            {fourthRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>

        {/* Gradient fading edges */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
      </div>
    </div>
  );
};

export default Reviews3D; 