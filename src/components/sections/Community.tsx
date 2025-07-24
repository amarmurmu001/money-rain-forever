"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRef } from "react";

const cards = [
  {
    title: "Wins 🔥",
    desc: "We constantly keep upgrading the knowledge.",
  },
  {
    title: "Anywhere 🔥",
    desc: "Have the freedom to talk, post share anything from anywhere.",
  },
  {
    title: "Motivation 🔥",
    desc: "Our members are taught to be positive and keep posting motivational stuff.",
  },
  {
    title: "Support 🔥",
    desc: "Always someone to guide you, no matter where you're stuck.",
  },
];

export default function Community() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-black text-white px-6 py-16 md:px-20 relative overflow-hidden">
      <div className="max-w-[80vw] h-screen flex flex-col justify-self-start mx-auto relative">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          OUR MEMBERS ARE <br /> WINNING !
        </h2>

        <div className="w-full flex justify-between items-center mb-12 flex-wrap gap-4">
          <p className="text-gray-400 max-w-lg">
            This community is now more than an year old, our students have
            completely changed their lives being a part.
          </p>
          <button className="bg-lime-400 text-black font-semibold rounded-full px-6 py-2">
            Join waiting room
          </button>
        </div>

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 transition-all duration-300  top-[60%] -translate-y-1/2 z-20 p-2 md:p-3 bg-black/70 hover:bg-[var(--green)] text-lime-400 hover:text-black rounded-full"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 transition-all duration-300 ease-in-out top-[60%] -translate-y-1/2 z-20 p-2 md:p-3 bg-black/70 hover:bg-[var(--green)] hover:text-black text-lime-400 rounded-full"
        >
          <ArrowRight size={24} />
        </button>

        <div className="relative" >


        {/* Gradient Overlays */}
        <div className="absolute left-[-5px] top-0 h-full w-16 md:w-50 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-[-5px] top-0 h-full w-16 md:w-50 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 hide-scroll relative z-0"
          >
          {cards.map((card, index) => (
              <div
              key={index}
              className="min-w-[18rem] w-95 h-80 rounded-xl flex flex-col justify-end jus border border-lime-400 bg-black relative overflow-hidden flex-shrink-0"
              >
                
              <div className="relative z-10 h-1/3 p-4 flex bg-lime-400 flex-col justify-center  text-sm text-black rounded-b-xl">
                <span className="font-bold">{card.title}</span>
                <p className="mt-1">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
          </div>
    </section>
  );
}
