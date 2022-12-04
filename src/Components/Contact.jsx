import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="post"
        action="https://getform.io/f/ad977f84-08f3-4c56-b7e3-1aee6c1e8be3"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or mail me at skolap22@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Eame"
          name="eame"
        />
        <textarea
          className="p-2 bg-[#ccd6f6]"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-3 py-4 my-8 mx-auto flex item-center">
          Lets Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
