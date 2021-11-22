import { BadgeCheckIcon, ChipIcon, LightningBoltIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Portfolio() {

  return (
    <section id="skills">
      <div className="container bg-gray-900 px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-gray-200 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          <p className="font-bold leading-relaxed underline">
            Languges: 
            </p> JavaScript, CSS, HTML
          <p className="font-bold leading-relaxed underline">Skills and Tools: 
            </p>React.js, Redux, Node.js, jQuery, EJS, AJAX, JSON, Sass, Git, GitHub, VS Code, SQL, MongoDB, Heroku, Netlify, PostgreSQL, Jest, Material UI, BEM, Bootstrap, REST API's, Auth0, AWS (SQS, Elastic Beanstalk, Lamba, DynamoDB, S3, API Gateway), Postman, Figma, Square, Lightroom, Illustrator, Trailhead by Salesforce.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                {/* <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" /> */}
                <LightningBoltIcon className="text-red-300 w-4 h-4 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}