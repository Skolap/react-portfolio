import React from "react";
// import WorkImg from "../Assets/projects/workImg.jpeg";
import Generic from "../Assets/projects/generic.jpg";
import ExpenseTracker from "../Assets/projects/ExpenseTracker.png";
import Foodie from "../Assets/projects/Foodie.png";
import Careall from "../Assets/projects/CareAll.png";
import Keeper from "../Assets/projects/Keeper2.png";
import Todo from "../Assets/projects/Todo.png";
import LandingPage from "../Assets/projects/LandingPage.png";

// import Realestate from "../Assets/projects/realestate.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full text-gray-300 p-4 bg-[#0a192f]">
      {/* Container Below */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Top Section */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300  border-[#FF7452]">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Grid Container Below */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item Below*/}
          <div
            style={{ backgroundImage: `url(${ExpenseTracker})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect Below */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Expense Tracker
              </span>

              {/* Hover Button Below */}
              <div className="pt-8 text-center">
                <a
                  href="https://skolap-react-expensetracker.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Skolap/expense-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              {/* Hover Button Above */}
            </div>
            {/* Hover Effect Above */}
          </div>
          {/* Grid Item above*/}

          {/* Grid Item Below*/}
          <div
            style={{ backgroundImage: `url(${Foodie})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect Below */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                E-Commerce App
              </span>

              {/* Hover Button Below */}
              <div className="pt-8 text-center">
                <a
                  href="https://foodie-cart-skolap.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Skolap/e-commerse-app-with-redux"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              {/* Hover Button Above */}
            </div>
            {/* Hover Effect Above */}
          </div>
          {/* Grid Item above*/}

          {/* Grid Item Below*/}
          <div
            style={{ backgroundImage: `url(${Careall})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect Below */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Care All
              </span>

              {/* Hover Button Below */}
              <div className="pt-8 text-center">
                <a
                  href="https://care-all.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Skolap/capstone-care_all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              {/* Hover Button Above */}
            </div>
            {/* Hover Effect Above */}
          </div>
          {/* Grid Item above*/}

          {/* Grid Item Below*/}
          <div
            style={{ backgroundImage: `url(${Keeper})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect Below */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Note Taking App
              </span>

              {/* Hover Button Below */}
              <div className="pt-8 text-center">
                <a
                  href="https://keeper-skolap.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/SHAILESH-KOLAP/keeper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              {/* Hover Button Above */}
            </div>
            {/* Hover Effect Above */}
          </div>
          {/* Grid Item above*/}

          {/* Grid Item Below*/}
          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect Below */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Todo Application
              </span>

              {/* Hover Button Below */}
              <div className="pt-8 text-center">
                <a
                  href="https://todo-skolap.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Skolap/todo-with-react-redux"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              {/* Hover Button Above */}
            </div>
            {/* Hover Effect Above */}
          </div>
          {/* Grid Item above*/}

          {/* Grid Item Below*/}
          <div
            style={{ backgroundImage: `url(${LandingPage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect Below */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Landing Page
              </span>

              {/* Hover Button Below */}
              <div className="pt-8 text-center">
                <a
                  href="https://shailesh-kolap.github.io/Landing-Page/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/SHAILESH-KOLAP/Landing-Page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-centre rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              {/* Hover Button Above */}
            </div>
            {/* Hover Effect Above */}
          </div>
          {/* Grid Item above*/}
        </div>
        {/* Grid Container Above */}
      </div>
      {/* container Above */}
    </div>
  );
};

export default Work;
