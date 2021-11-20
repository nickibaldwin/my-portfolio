import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-normal font-serif:ui-serif text-gray-700">
            Hi, I'm Nicki Baldwin.
            {/* <br className="hidden lg:inline-block" /> */}
          </h1>
          <p className="mb-8 font-light leading-relaxed text-left">
          Software engineer with a passion for using design as a means to improve the lives of others. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 hover:opacity-50 rounded-full text-lg">
              Contact
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded-full text-lg">
              **GH-LOGO**
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center opacity-85"
            alt="hero"
            src="./assets/nicki-transparent.png"
          />
        </div>
      </div>
    </section>
  );
}
