import React from "react";
import Image from "next/image";
import Gallery from "../_components/Gallery";
import Client from "../_components/Client";
import Contact from "../_components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACADEMY - First Class Valet",
  description:
    "You can join a growing industry by qualifying as a valet through the First Class Valet Academy.",
};

const page = () => {
  return (
    <div>
      <div className="z-10 relative overflow-hidden">
        <div className="lg:min-h-screen lg:h-auto h-auto w-full lg:px-20 px-8 py-10 bg-[url(/images/dealership-banner.jpg)] bg-cover bg-center uppercase lg:text-[5rem] text-center font-[500] flex flex-col items-center justify-center">
          <strong className="lg:text-[3.5rem] text-3xl text-purple tracking-widest">
            ACADEMY
          </strong>
          <p className="mt-6 thin font-medium lg:text-[2.2rem] text-2xl lg:leading-[3rem] leading-10 lg:w-4/5 w-11/12 capitalize">
            You can join a growing industry by qualifying as a valet through the
            First Class Valet Academy.
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 mt-12 w-4/5">
            <div className="flex flex-col h-auto">
              <div className="bg-blue text-xl font-semibold text-white pt-4 h-32 text-center w-full">
                <span className="w-9/12">
                  VALET. A GROWING INDUSTRY NEEDING QUALIFIED PEOPLE
                </span>
              </div>
              <div className="aspect-[5/3]">
                <Image
                  src="/images/labourhire1.jpg"
                  width={500}
                  height={300}
                  alt=""
                  className="w-full"
                />
              </div>
              <button className="w-full bg-purple text-center py-4 text-white text-xl">
                LEARN MORE
              </button>
            </div>
            <div className="flex flex-col h-auto">
              <div className="bg-blue text-xl font-semibold text-white pt-4 h-32 text-center w-full">
                <span className="w-11/12">
                  QUALIFICATION IS EASY FOR THE RIGHT PEOPLE
                </span>
              </div>
              <div className="aspect-[5/3]">
                <Image
                  src="/images/labourhire2.jpg"
                  width={500}
                  height={300}
                  alt=""
                  className="w-full"
                />
              </div>
              <button className="w-full bg-purple text-center py-4 text-white text-xl">
                LEARN MORE
              </button>
            </div>
            <div className="flex flex-col h-auto">
              <div className="bg-blue text-xl font-semibold text-white pt-4 h-32 text-center w-full">
                <span className="w-11/12">
                  QUALIFY AS A VALET IN JUST A FEW DAYS
                </span>
              </div>
              <div className="aspect-[5/3]">
                <Image
                  src="/images/labourhire3.jpg"
                  width={500}
                  height={300}
                  alt=""
                  className="w-full"
                />
              </div>
              <button className="w-full bg-purple text-center py-4 text-white text-xl">
                LEARN MORE
              </button>
            </div>
          </div>
          <button className="bg-white border-solid border-2 border-purple lg:text-2xl text-lg max-lg:leading-none text-purple py-3 px-10 mt-12">
            BOOK A COURSE NOW
          </button>
        </div>
      </div>
      <div className="my-12 py-3 bg-purple">
        <div className="bg-blue lg:px-16 px-8 py-12">
          <div>
            <div className="grid lg:grid-flow-col grid-flow-row gap-10 my-8 place-items-center">
              <div className="lg:col-span-3">
                <p className="lg:text-[3rem] lg:leading-tight max-lg:text-3xl text-white ">
                  VALET. A GROWING INDUSTRY NEEDING QUALIFIED PEOPLE
                </p>
                <p className="text-xl text-white thin mt-4">
                  Valet is a fast growing and dynamic customer service industry.
                </p>
                <p className="text-xl text-white thin mt-4">
                  From managed car parking, to social occasions, and red carpet
                  celebrity events, so much relies on the support, care, and
                  professionalism of a first class valet experience.
                </p>
                <p className="text-xl text-white thin mt-4">
                  With people becoming more time poor, coupled with the parking
                  congestion and pricing in Sydney, there’s never been a better
                  time to become a qualified valet.
                </p>
                <p className="text-xl text-white thin mt-4">
                  Valet is an ideal career choice for people who enjoy meeting
                  other people, who have an affinity for cars and perhaps, most
                  important of all, have an appreciation for good manners and
                  first class customer service.
                </p>
                <p className="text-xl text-white thin mt-4">
                  As an employed valet, no single day is likely to be the same.
                  You need to know your way around almost all makes and models
                  of cars, as well as enjoy the flexibility of working hours,
                  giving you more time for a balanced lifestyle.
                </p>
                <p className="text-xl text-white thin mt-4">
                  Your career as a valet attendant has the potential to grow as
                  you gain further accreditations through the academy, in an
                  innovative industry that demands skilled resources.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col gap-10">
                  <div className="lg:w-10/12 w-full aspect-[3/4]">
                    <Image
                      src="/images/academy-home.jpg"
                      width={600}
                      height={800}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <button className="bg-purple lg:text-2xl text-lg max-lg:leading-none text-white py-3 px-10 mt-12 lg:w-10/12 w-full">
                      BOOK A COURSE NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-12 py-3 bg-white">
        <div className="bg-white lg:px-16 px-8 py-12">
          <div>
            <div className="grid lg:grid-flow-col grid-flow-row gap-10 my-8 place-items-center">
              <div className="lg:col-span-7">
                <p className="lg:text-[3rem] lg:leading-tight max-lg:text-3xl text-purple ">
                  QUALIFICATION IS EASY FOR THE RIGHT PEOPLE
                </p>
                <p className="text-xl thin mt-4">
                  The First Class Valet Academy qualification program is easily
                  attainable for people with the right customer service mindset
                  and attitude.
                </p>
                <p className="text-xl thin mt-4">
                  An attitude that is based on laser-like attention to customer
                  needs, their property and their well-being and safety.
                </p>
                <p className="text-xl thin mt-4">
                  Having the right frame of mind will position you to succeed
                  through levels of accreditation in our valet courses.
                </p>
                <p className="text-xl thin mt-4">
                  Demonstrating an ability to take the initiative in any
                  situation and to act quickly on your feet with a sense of
                  control, will place you in an ideal position to succeed
                  completing your valet courses.
                </p>
                <p className="text-xl thin mt-4">
                  An appreciation for cars and road safety will also help you to
                  qualify, while providing the opportunity to drive all kinds of
                  cars including some phenomenal makes and models!
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="flex flex-col gap-10">
                  <div className="lg:w-10/12 w-full aspect-[3/4]">
                    <Image
                      src="/images/academy-home2.jpg"
                      width={600}
                      height={800}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <button className="bg-purple lg:text-2xl text-lg max-lg:leading-none text-white py-3 px-10 mt-12 lg:w-10/12 w-full">
                      BOOK A COURSE NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 py-3 bg-purple">
        <div className="bg-blue lg:px-16 px-8 py-12">
          <div>
            <div className="grid lg:grid-flow-col grid-flow-row gap-10 my-8 place-items-center">
              <div className="lg:col-span-3">
                <p className="lg:text-[3rem] lg:leading-tight max-lg:text-3xl text-white ">
                  QUALIFY AS A VALET IN JUST A FEW DAYS
                </p>
                <p className="text-xl text-white thin mt-4">
                  Valet qualifications begin with an introductory Valet course
                  from the First Class Valet Academy. After a short period of
                  time, you can be reasonably confident to begin working in the
                  valet industry.
                </p>
                <p className="text-xl text-white thin mt-4">
                  First Class Valet Academy provides Valet courses of various
                  accreditations. Once you graduate, you can confidently begin
                  working in the valet industry while undertaking further, more
                  advanced course.
                </p>
                <p className="text-xl text-white thin mt-4">
                  Each Course will advance you to higher levels of
                  responsibility and customer service within the valet industry.
                </p>
                <p className="text-xl text-white thin mt-4">
                  You can then play your part in this growing customer-service
                  industry and become a highly appreciated deliverer of valet
                  experiences.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col gap-10">
                  <div className="lg:w-10/12 w-full aspect-[3/4]">
                    <Image
                      src="/images/academy-home3.jpg"
                      width={600}
                      height={800}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <button className="bg-purple lg:text-2xl text-lg max-lg:leading-none text-white py-3 px-10 mt-12 lg:w-10/12 w-full">
                      BOOK A COURSE NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12 pb-3 bg-purple">
        <div className="bg-[url('/images/logo-background.jpg')] bg-center bg-no-repeat bg-cover lg:px-16 px-8 py-12">
          <div>
            <div>
              <p className="lg:text-[3rem] lg:leading-tight max-lg:text-3xl text-white ">
                BOOK NOW
              </p>
              <p className="text-xl text-white thin mt-4">
                Please select the class you’d like to take and you will be able
                to select a date that suits you. We will send you and email to
                confirm your registration.
              </p>
              <div className="grid lg:grid-cols-7 gap-8">
                <div className="lg:col-span-5">
                  <h1 className="text-xl font-bold text-white mt-4 tracking-wider">
                    1-DAY INTRODUCTORY VALET ATTENDANT COURSE
                  </h1>
                  <p className="text-lg text-white thin mt-4">
                    In this theory-based course you will learn the fundamental
                    qualities and customer skills required for being a Valet
                    Attendant.
                  </p>
                  <p className="text-lg text-white thin mt-4">
                    Completing this one-day course will allow you to step onto
                    any driveway confidently and with the right mindset to
                    showcase the benefits to your customers of choosing to use a
                    valet.
                  </p>
                  <p className="text-lg text-white thin mt-4">
                    This course is ideal for those who either want to commence
                    or broaden their career opportunities in the growing valet
                    industry with a suitable qualification for employment.
                  </p>
                  <ul className="text-white text-lg thin list-disc ps-8 mt-4">
                    <li>Theory behind Valet Parking</li>
                    <li>Best Practices in receiving & parking cars</li>
                    <li>Safety & hazards</li>
                    <li>Hygiene practices</li>
                    <li>Customer Service</li>
                    <li>Claims</li>
                  </ul>
                </div>
                <div className="lg:col-span-2">
                  <button className="bg-purple lg:text-2xl text-lg max-lg:leading-none text-white py-3 px-10 mt-12 lg:w-10/12 w-full">
                    BOOK NOW
                  </button>
                </div>
              </div>
              <div className="grid lg:grid-cols-7 gap-8">
                <div className="lg:col-span-5">
                  <h1 className="text-xl font-bold text-white mt-4 tracking-wider">
                    VALET MASTERCLASS
                  </h1>
                  <p className="text-lg text-white thin mt-4">
                    Our Valet Masterclass course takes the student through a
                    comprehensive approach to enter a career as a qualified
                    Valet Attendant.
                  </p>
                  <p className="text-lg text-white thin mt-4">
                    The Masterclass course covers all theory-based fundamentals
                    of qualifying as a Valet Attendant and includes a deep
                    understanding of the practical and safety elements required
                    to become a Valet Attendant.
                  </p>
                  <p className="text-lg text-white thin mt-4">
                    This Masterclass course also provides practical scenarios
                    where you will be actively parking and retrieving cars in a
                    safe and controlled environment, giving you the skills and
                    knowledge to deepen your understanding of the pace expected
                    and the customer experience expectations that should be
                    provided.
                  </p>
                  <p className="text-lg text-white thin mt-4">
                    The Masterclass course is ideal for experienced valets who
                    want enhance their career opportunities through upskilling
                    or sharpening their skill levels, reducing the chance of
                    claims, and broaden their employment opportunities in the
                    valet industry
                  </p>
                  <ul className="text-white text-lg thin list-disc ps-8 mt-4">
                    <li>Includes all content from day one theory</li>
                    <li>Practical driveway setting</li>
                    <li>Setting up your site</li>
                    <li>Safety & hazards</li>
                    <li>Customer experiences</li>
                    <li>Receiving & parking vehicles</li>
                  </ul>
                </div>
                <div className="lg:col-span-2">
                  <button className="bg-purple lg:text-2xl text-lg max-lg:leading-none text-white py-3 px-10 mt-12 lg:w-10/12 w-full">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gallery />
      <Client />
      <Contact />
    </div>
  );
};

export default page;
