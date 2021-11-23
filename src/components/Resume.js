import { DesktopComputerIcon } from "@heroicons/react/outline";
import React from "react";
// import { skills } from "../data";

export default function Resume() {

  return (
    <section id="resume" className="text-gray-400 bg-gray-200 body-font">
      <div className="container px-5 py-10  mx-auto text-center lg:px-40">
        <div className="text-center mb-20">
          <DesktopComputerIcon className="w-10 inline-block mb-4 text-gray-400"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
            Previous Experience
          </h1>
          <p className="text-gray-800 leading-relaxed xl:w-full lg:w-full">
          <div className="font-medium text-gray-800 leading-relaxed text-left">
            Designer at <a href="https://fringeseattle.com/" className="text-gray-900 underline">Fringe</a>
            <li className="text-gray-800 font-light leading-relaxed xl:w-3/4 lg:w-3/4">
              Designed and maintained industry portfolio for driving business including branding, photo editing, and logo design (personal, not for the company).
            </li>
            <li className="text-gray-800 font-light leading-relaxed xl:w-auto lg:w-3/4">
              Through verbal and visual communication, implemented the clients desired outcome. Thus, resluting in a 65% first-time retention rate, which is beyond the industry standard.
            </li>
            <li className="text-gray-800 font-light leading-relaxed xl:auto lg:w-3/4">
              Created a new marketing system to balance out the loss of clients due to Covid relocations. Resulting in a 10% increase YTD.
            </li>
            </div> 
          </p>
        </div>
      </div>
    </section>
  );
}