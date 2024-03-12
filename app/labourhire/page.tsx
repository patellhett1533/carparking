import Image from "next/image";
import React from "react";
import Client from "../_components/Client";
import Contact from "../_components/Contact";
import Gallery from "../_components/Gallery";
import Testimonials from "../_components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LABOURHIRE - First Class Valet",
  description:
    "Valet and concierge labourhire specialists with the best trained and experienced staff available when you need them.",
};

const page = () => {
  return (
    <div>
      <div className="z-10 relative overflow-hidden">
        <div className="lg:min-h-screen lg:h-auto h-auto w-full lg:px-20 px-8 py-10 bg-[url(/images/labourhire-banner.jpg)] bg-cover bg-center uppercase lg:text-[5rem] text-center font-[500] flex flex-col items-center justify-center">
          <strong className="lg:text-[3.5rem] text-3xl text-orange tracking-widest">
            LABOURHIRE
          </strong>
          <p className="mt-6 thin font-medium lg:text-[2.2rem] text-2xl lg:leading-[3rem] leading-10 lg:w-4/5 w-11/12 capitalize">
            Valet and concierge labourhire specialists with the best trained and
            experienced staff available when you need them.
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 mt-12 w-4/5">
            <div className="flex flex-col h-auto">
              <div className="bg-blue text-xl font-semibold text-orange pt-4 h-32 text-center w-full">
                <span className="w-9/12">
                  THE VALET AND CONCIERGE LABOURHIRE SPECIALISTS
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
              <button className="w-full bg-orange text-center py-4 text-white text-xl">
                LEARN MORE
              </button>
            </div>
            <div className="flex flex-col h-auto">
              <div className="bg-blue text-xl font-semibold text-orange pt-4 h-32 text-center w-full">
                <span className="w-11/12">
                  STAFF AVAILABLE WHEN YOU NEED THEM
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
              <button className="w-full bg-orange text-center py-4 text-white text-xl">
                LEARN MORE
              </button>
            </div>
            <div className="flex flex-col h-auto">
              <div className="bg-blue text-xl font-semibold text-orange pt-4 h-32 text-center w-full">
                <span className="w-11/12">
                  THE BEST TRAINED AND EXPERIENCED STAFF
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
              <button className="w-full bg-orange text-center py-4 text-white text-xl">
                LEARN MORE
              </button>
            </div>
          </div>
          <button className="bg-white border-solid border-2 border-orange lg:text-2xl text-lg max-lg:leading-none text-orange py-3 px-10 mt-12">
            BOOK NOW
          </button>
        </div>
      </div>
      <div className="py-3 bg-orange">
        <div className="bg-[url('/images/labourhire-home.jpg')] bg-center lg:px-16 px-8 py-12">
          <div className="">
            <strong className="lg:w-2/3 flex w-full lg:text-[2.8rem]  max-lg:text-2xl text-orange tracking-wider">
              THE VALET AND CONCIERGE LABOURHIRE SPECIALISTS
            </strong>
            <p className="text-xl text-white thin mt-4">
              Since 2014, First Class Valet have been the recognised leaders in
              providing valet and concierge services across Australia.
            </p>
            <p className="text-xl text-white thin mt-4">
              We specialise in end-to-end valet solutions to some of Australia’s
              largest brands. As valet specialists all we do is provide parking
              and concierge services for clients across several industries
              throughout Australia.
            </p>
            <p className="text-xl text-white thin mt-4">
              If you need replacement or additional staff, whether a single
              valet attendant or more, you can rely on First Class Valet to
              deliver. We can provide staffing to fit within your operations for
              short-or longer-term needs with a pool of qualified specialists.
            </p>
            <p className="text-xl text-white thin mt-4">
              No other labourhire company knows Valet like we do.
            </p>
            <button className="bg-orange lg:text-2xl text-lg max-lg:leading-none text-white py-3 px-10 mt-12">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[url('/images/labourhire-home2.jpg')] bg-center lg:px-16 px-8 py-12">
        <div className="">
          <strong className="flex w-full lg:text-[2.8rem]  max-lg:text-2xl text-blue tracking-wider">
            STAFF AVAILABLE WHEN YOU NEED THEM
          </strong>
          <p className="text-xl thin mt-4">
            Whether you need one person or an Australia-wide team, First Class
            Valet have a ready supply of trained and quality staff to meet your
            needs.
          </p>
          <p className="text-xl thin mt-4">
            As a specialist in the industry we can supply your staffing needs
            when and where you need them.
          </p>
          <p className="text-xl thin mt-4">
            We understand that rostering (sick-leave, maternity, annual leave,
            and no-shows) can be a real issue to your business that takes
            valuable time and resources to manage.
          </p>
          <p className="text-xl thin mt-4">
            With First Class Valet, one call can solve your staffing
            requirements. For those labour shortages that come at the most
            inconvenient of times, First Class Valet are a reliable labour hire
            provider that you can depend on.
          </p>
          <button className="bg-orange lg:text-2xl text-lg max-lg:leading-none text-white py-3 px-10 mt-12">
            CONTACT FIRST CLASS VALET
          </button>
        </div>
      </div>
      <div className="mb-8 py-3 bg-orange">
        <div className="bg-[url('/images/labourhire-home3.jpg')] bg-center lg:px-16 px-8 py-12">
          <div className="">
            <strong className="lg:w-2/3 flex w-full lg:text-[2.8rem]  max-lg:text-2xl text-orange tracking-wider">
              THE VALET AND CONCIERGE LABOURHIRE SPECIALISTS
            </strong>
            <p className="text-xl text-white thin mt-4">
              Since 2014, First Class Valet have been the recognised leaders in
              providing valet and concierge services across Australia.
            </p>
            <p className="text-xl text-white thin mt-4">
              We specialise in end-to-end valet solutions to some of Australia’s
              largest brands. As valet specialists all we do is provide parking
              and concierge services for clients across several industries
              throughout Australia.
            </p>
            <p className="text-xl text-white thin mt-4">
              If you need replacement or additional staff, whether a single
              valet attendant or more, you can rely on First Class Valet to
              deliver. We can provide staffing to fit within your operations for
              short-or longer-term needs with a pool of qualified specialists.
            </p>
            <p className="text-xl text-white thin mt-4">
              No other labourhire company knows Valet like we do.
            </p>
            <button className="bg-orange lg:text-2xl text-lg max-lg:leading-none text-white py-3 px-10 mt-12">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
      <Gallery />
      <Client />
      <Testimonials />
      <br />
      <Contact />
    </div>
  );
};

export default page;
