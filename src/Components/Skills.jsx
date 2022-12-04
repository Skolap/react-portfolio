import React from "react";
import Css from "../Assets/css.png";
import Express from "../Assets/Express.png";
// import Firebase from "../Assets/firebase.png";
import Git from "../Assets/git.png";
import Html from "../Assets/html.png";
import Javascript from "../Assets/javascript.png";
import Jest from "../Assets/jest.png";
// import Jira from "../Assets/jira.png";
import Mongo from "../Assets/mongo.png";
import Node from "../Assets/node.png";
import ReactLogo from "../Assets/react.png";
import Tailwind from "../Assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4">Experience</p>
          <p className="py-4"> These are technologies I've worked with</p>
        </div>

        {/* HTML */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img className="w-20 mx-auto" src={Html} alt="HTML Icon" />
            <p>HTML</p>
          </div>

          {/* CSS */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img className="w-20 mx-auto" src={Css} alt="CSS Icon" />
            <p>CSS</p>
          </div>

          {/* JavaScript */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img
              className="w-20 mx-auto"
              src={Javascript}
              alt="JavaScript Icon"
            />
            <p>JAVASCRIPT</p>
          </div>

          {/* React */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img className="w-20 mx-auto" src={ReactLogo} alt="React Icon" />
            <p>REACT</p>
          </div>

          {/* Express */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img
              className="w-21 h-20 mx-auto"
              src={Express}
              alt="Express Icons2"
            />
            <p>EXPRESS</p>
          </div>

          {/* Git */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img className="w-20 mx-auto" src={Git} alt="Git Icon" />
            <p>GIT</p>
          </div>

          {/* Node js */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img className="w-20 mx-auto" src={Node} alt="Node Icon" />
            <p>NODE</p>
          </div>

          {/* Mongo db */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo Icon" />
            <p>MONGODB</p>
          </div>

          {/* Tailwind CSS */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img
              className="w-20 mx-auto"
              src={Tailwind}
              alt="TailwindCss Icon"
            />
            <p>TAILWIND CSS</p>
          </div>

          {/* Jest */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700">
            <img className="w-20 mx-auto" src={Jest} alt="Jest Icon" />
            <p>JEST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
