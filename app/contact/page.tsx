import React from "react";
import Client from "../_components/Client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquiry Form - First Class Valet",
  description:
    "First Class Valet is Australia’s premium valet service offering: contracted solutions, events, valet training academy and labourhire.",
};

const page = () => {
  return (
    <div>
      <div className='h-[60vh] w-full bg-[url("/images/home-banner.jpg")] bg-center flex items-center justify-center'>
        <strong className="lg:text-[3.5rem] text-3xl text-sky tracking-widest">
          Enquiry Form
        </strong>
      </div>
      <div className="pt-3 bg-sky">
        <div className="bg-blue lg:px-16 px-8 py-12 text-center">
          <div>
            <form action="#">
              <div>
                <div className="flex items-center max-md:flex-col gap-6 mt-10">
                  <input
                    type="text"
                    name="fname"
                    className="border-solid border-b border-white px-3 py-3 w-full bg-transparent outline-none text-white"
                    placeholder="Your Name (required)"
                  />
                  <input
                    type="text"
                    name="lname"
                    className="border-solid border-b border-white px-3 py-3 w-full bg-transparent outline-none text-white"
                    placeholder="Phone number (required)"
                  />
                </div>
                <div className="flex items-center max-md:flex-col gap-6 md:mt-10 mt-6">
                  <input
                    type="text"
                    name="phone"
                    className="border-solid border-b border-white px-3 py-3 w-full bg-transparent outline-none text-white"
                    placeholder="Company"
                  />
                  <input
                    type="text"
                    name="email"
                    className="border-solid border-b border-white px-3 py-3 w-full bg-transparent outline-none text-white"
                    placeholder="Mobile number"
                  />
                </div>
                <div className="flex items-center max-md:flex-col gap-6 md:mt-10 mt-6">
                  <input
                    type="text"
                    name="phone"
                    className="border-solid border-b border-white px-3 py-3 w-full bg-transparent outline-none text-white"
                    placeholder="Position"
                  />
                  <input
                    type="text"
                    name="email"
                    className="border-solid border-b border-white px-3 py-3 w-full bg-transparent outline-none text-white"
                    placeholder="Address"
                  />
                </div>
                <div className="flex items-center max-md:flex-col gap-6 md:mt-10 mt-6">
                  <input
                    type="text"
                    name="phone"
                    className="border-solid border-b border-white px-3 py-3 w-full bg-transparent outline-none text-white"
                    placeholder="Email (required)"
                  />
                  <input
                    type="text"
                    name="email"
                    className="border-solid border-b border-white px-3 py-3 w-full bg-transparent outline-none text-white"
                    placeholder="Best time to contact you"
                  />
                </div>
                <div className="flex items-center max-md:flex-col gap-6 md:mt-10 mt-6">
                  <input
                    type="text"
                    name="phone"
                    className="border-solid border-b border-white px-3 py-3 lg:w-1/2 w-full bg-transparent outline-none text-white"
                    placeholder="Type of Enquiry"
                  />
                </div>
              </div>
              <div className="mt-10">
                <button className="bg-sky px-12 py-3 text-xl font-semibold text-white">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Client />
    </div>
  );
};

export default page;
