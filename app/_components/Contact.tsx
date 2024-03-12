import React from "react";

const Contact = () => {
  return (
    <div className="mb-12 py-3 bg-sky">
      <div className="bg-[url('/images/logo-background.jpg')] bg-center lg:px-16 px-8 py-12 text-center">
        <strong className="lg:text-[2.8rem] text-xl text-white tracking-widest">
          CONTACT US
        </strong>
        <div>
          <form action="#">
            <div>
              <div className="flex items-center max-md:flex-col gap-6 mt-10">
                <input
                  type="text"
                  name="fname"
                  className="border-solid border-b border-white px-3 py-3 w-full bg-transparent outline-none text-white"
                  placeholder="FIRST NAME"
                />
                <input
                  type="text"
                  name="lname"
                  className="border-solid border-b border-white px-3 py-3 w-full bg-transparent outline-none text-white"
                  placeholder="LAST NAME"
                />
              </div>
              <div className="flex items-center max-md:flex-col gap-6 md:mt-10 mt-6">
                <input
                  type="text"
                  name="phone"
                  className="border-solid border-b border-white px-3 py-3 w-full bg-transparent outline-none text-white"
                  placeholder="PHONE"
                />
                <input
                  type="text"
                  name="email"
                  className="border-solid border-b border-white px-3 py-3 w-full bg-transparent outline-none text-white"
                  placeholder="EMAIL"
                />
              </div>
              <div className="flex items-center gap-6 md:mt-10 mt-6">
                <input
                  type="text"
                  name="message"
                  className="border-solid border-b border-white px-3 py-3 w-full bg-transparent outline-none text-white"
                  placeholder="MESSAGE"
                />
              </div>
            </div>
            <div className="mt-10">
              <button className="bg-sky px-12 py-3 text-xl font-semibold text-white">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
