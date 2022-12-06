import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#FF7452]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Shailesh Kolap, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I am Skilled and motivated person in
              Computer Science. I have 2 years of System Admin experience and
              have strong knowledge in HTML, CSS and javascript. In addition to
              that I know javascript library and frame works like Express and
              React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
