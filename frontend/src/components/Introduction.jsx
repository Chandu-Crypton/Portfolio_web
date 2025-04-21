import React, { useState, useEffect, useRef } from "react";

export default function Introduction({ text, delay }) {
  const [displayText, setDisplayText] = useState(text);
  const velocityRef = useRef({ speed: 1, endIndex: 0 });
  useEffect(() => {
    const interval = setInterval(() => {
      if (velocityRef.current.endIndex === text.length) {
        velocityRef.current.speed = -1;
      } else if (velocityRef.current.endIndex === 0) {
        velocityRef.current.speed = 1;
      }
      velocityRef.current.endIndex += velocityRef.current.speed;
      setDisplayText(text.slice(0, velocityRef.current.endIndex));
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay, text]);
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/518/208/original/man-working-with-computer-bright-colorful-vector-illustration.jpg"
        alt="Profile"
        className="w-28 h-28 rounded-full mb-6 shadow-md"
      />
      <h1 className="text-[30px] md:text-5xl font-bold text-gray-900 mb-4">
        {displayText}
        <span>.|</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-6">
        Aspiring Full Stack Developer adept in ExpressJs, NodeJs, and ReactJs.
        Eager to collaborate with a dynamic team, bringing enthusiasm to craft
        intuitive web applications. Excited about the opportunity to contribute
        my skills and collectively innovate.
        <br />
        If you’re working on something real, let’s talk.
      </p>
      <div className="flex gap-4">
        <a
          href="#contact"
          className="bg-black text-white px-6 py-2 rounded-full shadow-lg hover:bg-gray-800 transition"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
