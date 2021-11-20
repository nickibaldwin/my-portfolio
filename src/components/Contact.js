import React from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

export default function Contact() {

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* <div className="lg:w-2/3 md:w-1/2 bg-gray-600 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"> */}
          {/* <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          /> */}
          <div className="relative flex flex-wrap py-6 rounded shadow-md">
            {/* <div className="lg:w-1/2 px-6"> */}
              {/* <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2> */}
              {/* <p className="mt-1">
                97 Warren St. <br />
                New York, NY 10007
              </p> */}
            {/* </div> */}
        <form
          netlify
          name="contact"
          className="lg:w-1/2 md:w-1/2 flex flex-wrap md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          {/* <style="background-image:url()"> */}
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Let's Connect!
          </h2>
          <p className="leading-relaxed mb-5">
            **TODO PLACEHOLDER**
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-gray-500 h-10 py-2 px-6  focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Send Message
            {/* Contact  */}
          </button>
        </form>
            <div className="lg:w-auto px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              <MailIcon className="text-white w-8 h-8 flex-shrink-0 mr-4" />
              </h2>
              <a className="text-gray-800 leading-relaxed" href="mailto:nickibaldwin@gmail.com">
                nickibaldwin@gmail.com
              </a>
              {/* <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              <PhoneIcon className="text-white w-8 h-8 flex-shrink-0 mr-4" />
              </h2>
              <p className="leading-relaxed">503-545-7222</p> */}
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              <a href="https://github.com/nickibaldwin">
                <img 
                className="title-font w-8 h-8"
                alt="GH"
                src="./assets/ghicon.png"/>
                </a>

              </h2>
            </div>
          {/* </div> */}
        </div>
      </div>
    {/* <footer>
    <div id="cactus">
          <img
            className="object-cover object-center opacity-60"
            alt="hero"
            src="./assets/cactusTransparent.png"
          />
        </div>
    </footer> */}
    </section>
  );
}