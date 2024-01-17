"use client";

import React, { useState } from "react";

export default function Home() {
  const title: string = "Hello World";

  const [isLeftChildHovered, setIsLeftChildHovered] = useState(false);
  const [isRightChildHovered, setIsRightChildHovered] = useState(false);

  return (
    <main className="flex min-h-screen p-12 align-center gap-2 justify-center items-center">
      <div
        className={`transition-transform grid border-2 border-slate-800 place-content-between py-6 p-4 rounded-3xl h-fit gap-7 w- max-w-96 bg-slate-900 relative ${
          isLeftChildHovered ? "hover:-skew-y-6 " : ""
        } ${isRightChildHovered ? "hover:skew-y-6 " : ""}`}
      >
        <span className="absolute flex h-4 w-4 -right-2 top-6">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-500"></span>
        </span>

        <div
          className="peer/left w-1/2 h-60 absolute z-10 "
          onMouseEnter={() => setIsLeftChildHovered(true)}
          onMouseLeave={() => setIsLeftChildHovered(false)}
        ></div>
        <div
          className="peer/right w-1/2 h-60 absolute right-0 z-10 "
          onMouseEnter={() => setIsRightChildHovered(true)}
          onMouseLeave={() => setIsRightChildHovered(false)}
        ></div>

        <h4
          className=" text-2xl font-bold p-4 px-12 rounded-full text-center w-fit"
          style={{
            backgroundImage:
              "url(https://sameer-gits.github.io/next-card-parallax-animation/gradient.gif)",
          }}
        >
          {title}
        </h4>

        <h4
          className="transition-all top-6 left-4 peer-hover/right:top-4 peer-hover/right:left-6 absolute text-2xl font-bold p-4 px-12 rounded-full text-center w-fit peer-hover/left:top-4 peer-hover/left:left-3"
          style={{
            backgroundImage:
              "url(https://sameer-gits.github.io/next-card-parallax-animation/gradient.gif)",
          }}
        >
          {title}
        </h4>

        <h4
          className="transition-all top-6 left-4 peer-hover/right:top-3 peer-hover/right:left-7 absolute text-2xl font-bold p-4 px-12 rounded-full text-center w-fit peer-hover/left:top-3 peer-hover/left:left-2"
          style={{
            backgroundImage:
              "url(https://sameer-gits.github.io/next-card-parallax-animation/gradient.gif)",
          }}
        >
          {title}
        </h4>

        <h4
          className="transition-all top-6 left-4 peer-hover/right:top-2 peer-hover/right:left-8 absolute text-2xl font-bold p-4 px-12 rounded-full text-center w-fit peer-hover/left:top-2 peer-hover/left:left-1"
          style={{
            backgroundImage:
              "url(https://sameer-gits.github.io/next-card-parallax-animation/gradient.gif)",
          }}
        >
          {title}
        </h4>

        <div className="pt-6 border-t flex gap-4 items-center">
          <p className="">
            Click or hover on left or right side of the card to see the effect.
          </p>
          <p className="text-4xl">😍</p>
        </div>
      </div>
    </main>
  );
}
