import Image from "next/image";
import React from "react";
import Client from "../_components/Client";
import Contact from "../_components/Contact";
import Gallery from "../_components/Gallery";
import Testimonials from "../_components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CONTRACTED VALET - First Class Valet",
  description:
    "First Class Valet are the experts in Driveway Management & Concierge Solutions, who drive your customers experience.",
};

const page = () => {
  return (
    <div>
      <div className="z-10 relative overflow-hidden">
        <div className="lg:min-h-screen lg:h-auto h-auto w-full lg:px-20 px-8 py-10 bg-[url(/images/dealership-banner.jpg)] bg-cover bg-center uppercase lg:text-[5rem] text-center font-[500] flex flex-col items-center justify-center">
          <strong className="lg:text-[3.5rem] text-3xl text-sky tracking-widest">
            CONTRACTED VALET
          </strong>
          <p className="mt-6 thin font-medium lg:text-[2.2rem] text-2xl lg:leading-[3rem] leading-10 lg:w-4/5 w-11/12 capitalize">
            First Class Valet are the experts in Driveway Management & Concierge
            Solutions, who drive your customers experience.
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 mt-12 w-4/5">
            <div className="flex flex-col h-auto">
              <div className="bg-blue text-xl font-semibold text-white pt-4 h-32 text-center w-full">
                <span className="w-9/12">
                  THE EXPERTS IN VALET SOLUTIONS AND SERVICE
                </span>
              </div>
              <div className="aspect-[5/3]">
                <Image
                  src="/images/dealer1.jpg"
                  width={500}
                  height={300}
                  alt=""
                  className="w-full"
                />
              </div>
              <button className="w-full bg-sky text-center py-4 text-white text-xl">
                LEARN MORE
              </button>
            </div>
            <div className="flex flex-col h-auto">
              <div className="bg-blue text-xl font-semibold text-white pt-4 h-32 text-center w-full">
                <span className="w-11/12">
                  SET AND FORGET SEAMLESS OPERATIONS
                </span>
              </div>
              <div className="aspect-[5/3]">
                <Image
                  src="/images/dealer2.jpg"
                  width={500}
                  height={300}
                  alt=""
                  className="w-full"
                />
              </div>
              <button className="w-full bg-sky text-center py-4 text-white text-xl">
                LEARN MORE
              </button>
            </div>
            <div className="flex flex-col h-auto">
              <div className="bg-blue text-xl font-semibold text-white pt-4 h-32 text-center w-full">
                <span className="w-11/12">‘WOW’ YOUR CUSTOMERS</span>
              </div>
              <div className="aspect-[5/3]">
                <Image
                  src="/images/dealer3.jpg"
                  width={500}
                  height={300}
                  alt=""
                  className="w-full"
                />
              </div>
              <button className="w-full bg-sky text-center py-4 text-white text-xl">
                LEARN MORE
              </button>
            </div>
          </div>
          <button className="bg-white border-solid border-2 border-sky lg:text-2xl text-lg max-lg:leading-none text-sky py-3 px-10 mt-12">
            DOWNLOAD OUR DEALERSHIP BROCHURE
          </button>
        </div>
      </div>
      <div className="my-8 py-3 bg-sky">
        <div className="bg-blue lg:px-16 px-10 py-12">
          <div className="">
            <div className=" flex justify-center text-center mb-20">
              <strong className="lg:w-3/5 w-11/12 lg:text-[2.5rem] text-3xl text-sky tracking-widest">
                THE EXPERTS IN VALET SOLUTIONS AND SERVICE
              </strong>
            </div>
            <div>
              <p className="lg:text-[2rem] text-2xl text-white ">
                TAILORED PARKING MANAGEMENT SOLUTIONS.
              </p>
              <p className="text-xl text-white thin mt-6">
                At First Class Valet we work with you to develop a driveway
                program tailored for sales (new and used) and services in order
                to achieve an outstanding experience for your customers, one
                that truly values their time.
              </p>
              <div className="mt-16 grid lg:grid-cols-2 grid-cols-1 lg:gap-24 gap-16">
                <div>
                  <div className="h-28 bg-sky w-full text-center flex items-center justify-center text-white text-3xl leading-10">
                    <p className="lg:w-3/4 w-11/12">
                      MORE EFFICIENT ENTRY AND EXIT
                    </p>
                  </div>
                  <div className="aspect-square w-full">
                    <Image
                      src="/images/parking1.jpg"
                      width={1000}
                      height={1000}
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="h-28 bg-sky w-full text-center flex items-center justify-center text-white text-3xl leading-10">
                  <p className="lg:w-3/4 w-11/12">
                      MORE EFFICIENT ENTRY AND EXIT
                    </p>
                  </div>
                  <div className="aspect-square w-full">
                    <Image
                      src="/images/parking2.jpg"
                      width={1000}
                      height={1000}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <p className="lg:text-[2rem] text-2xl text-white ">
                STATE-OF-THE-ART EQUIPMENT & TECHNOLOGY PLATFORM
              </p>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-8">
                <div>
                  <div className="h-16 bg-sky w-full text-center flex items-center justify-center text-white text-md">
                    <p className="w-4/5 max-md:text-base max-md:leading-none">
                      OUR LICENCED VALET TECHNOLOGY
                    </p>
                  </div>
                  <div className="aspect-[275/186] w-full">
                    <Image
                      src="/images/e&t.jpg"
                      width={500}
                      height={300}
                      alt=""
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="h-16 bg-sky w-full text-center flex items-center justify-center text-white text-md">
                    <p className="w-4/5">KEY CONTROL & DRIVEWAY OPERATIONS</p>
                  </div>
                  <div className="aspect-[275/186] w-full">
                    <Image
                      src="/images/e&t2.jpg"
                      width={500}
                      height={300}
                      alt=""
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="h-16 bg-sky w-full text-center flex items-center justify-center text-white text-md">
                    <p className="w-4/5">DAMAGE REPORTING</p>
                  </div>
                  <div className="aspect-[275/186] w-full">
                    <Image
                      src="/images/e&t3.jpg"
                      width={500}
                      height={300}
                      alt=""
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="h-16 bg-sky w-full text-center flex items-center justify-center text-white text-md">
                    <p className="w-4/5">CUSTOMER REPORTING</p>
                  </div>
                  <div className="aspect-[275/186] w-full">
                    <Image
                      src="/images/e&t4.jpg"
                      width={500}
                      height={300}
                      alt=""
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center mt-16">
                <button className="bg-sky text-2xl text-white py-3 px-10 ">
                  CONTACT FIRST CLASS VALET
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-full aspect-[192/163] bg-[url('/images/step.jpg')] bg-center px-10 py-6 flex flex-col items-center">
        <strong className="lg:w-2/3 w-full text-center lg:text-[2.8rem] max-lg:text-2xl text-sky tracking-wider">
          SET AND FORGET SEAMLESS SERVICE OPERATION
        </strong>
      </div>
      <div className="my-12 py-3 bg-sky">
        <div className="bg-blue lg:px-16 px-8 py-12">
          <div>
            <div className=" flex justify-center text-center mb-20">
              <strong className="lg:w-3/5 w-full lg:text-[2.5rem] text-[1.6rem] text-sky tracking-widest">
                ‘WOW’ YOUR CUSTOMERS
              </strong>
            </div>
            <div className="grid lg:grid-flow-col grid-flow-row gap-10">
              <div>
                <p className="lg:text-[2.2rem] text-3xl text-white ">
                  FIRST IMPRESSIONS COUNT
                </p>
                <p className="text-xl text-white thin mt-4">
                  From their first impression of our valets, to using our
                  interactive SMS service that tracks their car and alerts them
                  when it is ready and waiting, our goal is to provide an
                  exceptional customer experience from the moment customers
                  arrive, and every step of the way through to their final
                  farewell wishes from First Class Valet.
                </p>
                <p className="text-xl text-white thin mt-4">
                  The First Class Valet Guarantee: to provide a welcoming
                  arrival and parking experience that will continuallysurprise
                  and delight customers and is of a global standard, unmatched
                  anywhere else in Australia.
                </p>
                <p className="lg:text-[2.2rem] text-3xl text-white mt-6">
                  CUSTOMER SERVICE THAT WILL BUILD AND DIFFERENTIATE YOUR BRAND
                </p>
                <p className="lg:text-[1.6rem] text-2xl text-white mt-6">
                  White label offerings
                  <p className="text-xl text-white thin mt-4">
                    TWe can operate under our name of First Class Valet or
                    provide a white label service.
                  </p>
                  <p className="text-xl text-white thin mt-4">
                    Either way we provide the same service, either through our
                    brand or through yours.
                  </p>
                </p>
                <p className="lg:text-[1.6rem] text-2xl text-white mt-6">
                  Marketing campaigns
                  <p className="text-xl text-white thin mt-4">
                    The First Class Valet technology system allows you to
                    undertake targeted marketing to your customers. Send
                    messages to advertise upcoming events, special offers and to
                    retain customer loyalty.
                  </p>
                </p>
                <p className="lg:text-[1.6rem] text-2xl text-white mt-6">
                  Customised Premium SMS marketing
                  <li className="text-xl text-white thin mt-2">
                    Entry & Exit Text Message
                  </li>
                  <li className="text-xl text-white thin mt-2">
                    Immediate Promotional Text Messaging
                  </li>
                  <li className="text-xl text-white thin mt-2">
                    Banner advertising
                  </li>
                </p>
                <p className="lg:text-[1.6rem] text-2xl text-white mt-6">
                  Customer surveys
                  <p className="text-xl text-white thin mt-4">
                    Find out what your customers really think. Response rates
                    are normally between 25 – 40%.
                  </p>
                </p>
              </div>
              <div className="">
                <div className="flex flex-col gap-10">
                  <div className="w-full aspect-[3/4]">
                    <Image
                      src="/images/wow1.jpg"
                      width={600}
                      height={800}
                      alt=""
                    />
                  </div>
                  <div className="w-full aspect-[3/4]">
                    <Image
                      src="/images/wow2.jpg"
                      width={600}
                      height={800}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gallery />
      <Client />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default page;
