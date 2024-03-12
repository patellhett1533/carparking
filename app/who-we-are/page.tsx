import React from "react";
import Images from "next/image";
import Gallery from "../_components/Gallery";
import Client from "../_components/Client";
import Testimonials from "../_components/Testimonials";
import Contact from "../_components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WHO WE ARE - First Class Valet",
  description: "Delivering First Class Valet service to the Australian market",
};

const page = () => {
  return (
    <div>
      <div className='h-[60vh] w-full bg-[url("/images/home-banner.jpg")] bg-center flex items-center justify-center'>
        <strong className="lg:text-[3.5rem] text-3xl text-sky tracking-widest">
          WHO WE ARE
        </strong>
      </div>
      <div className="py-3 bg-sky">
        <div className="bg-[url('/images/logo-background.jpg')] bg-center lg:px-16 px-8 py-12">
          <strong className="lg:text-[3rem] text-3xl text-white tracking-widest">
            Delivering First Class Valet service to the Australian market
          </strong>
          <p className="text-[1.6rem] leading-10 tracking-wide thin mt-3 text-white">
            “From a ‘crazy dream’ to a market reality.” That’s how Managing
            Director, Robert (Rob) Horton describes the arrival of First Class
            Valet onto the Australian market.
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-1 my-8">
            <div className="group relative cursor-pointer aspect-square">
              <div className="transition-all scale-0 group-hover:scale-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 aspect-square bg-black/70 flex flex-col items-center justify-center text-white text-center">
                <p className="thin uppercase text-md">
                  Founder and Managing Directore
                </p>
                <p className="uppercase text-2xl">Robert Horton</p>
              </div>
              <Images
                src="/images/who1.jpg"
                width={500}
                height={500}
                alt=""
                className="h-full"
              />
            </div>
            <div className="group relative cursor-pointer aspect-square">
              <div className="transition-all scale-0 group-hover:scale-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 aspect-square bg-black/70 flex flex-col items-center justify-center text-white text-center">
                <p className="thin uppercase text-md">
                  National Director of Marketing & Commercialisation
                </p>
                <p className="uppercase text-2xl">LESLEY-ANN</p>
              </div>
              <Images
                src="/images/who2.jpg"
                width={500}
                height={500}
                alt=""
                className="h-full"
              />
            </div>
            <div className="group relative cursor-pointer aspect-square">
              <div className="transition-all scale-0 group-hover:scale-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 aspect-square bg-black/70 flex flex-col items-center justify-center text-white text-center">
                <p className="uppercase text-2xl">TEAM</p>
              </div>
              <Images
                src="/images/who3.jpg"
                width={500}
                height={500}
                alt=""
                className="h-full"
              />
            </div>
          </div>
          <div>
            <p className="text-xl thin mt-4 text-white">
              Rob and business partner Lesley-Ann, have both forged successful
              commercial careers.
            </p>
            <p className="text-xl thin mt-4 text-white">
              Rob, as a graduate from the famed West Point US Military Academy,
              followed this with his service in the US Army. Then again,
              graduating with his MBA tucked firmly under his arm forged a
              career in investment banking creating an opportunity for him to
              transfer from USA to his wife’s home country of Australia.
            </p>
            <p className="text-xl thin mt-4 text-white">
              Lesley-Ann who grew up in Sydney, also a career executive in major
              corporates, joined a large retail development company specialising
              in commercialisation.
            </p>
            <p className="text-xl thin mt-4 text-white">
              After living in the USA for several years, not long after settling
              back in Australia, they were presented with a realisation that
              there was a significant ‘gap’ in the Australian market for a
              service they each ‘took for granted’ when living overseas, ie;
              first class valet parking. Sure, there was a small number of
              venues and shopping centres claiming to provide valet parking, but
              nothing of the quality or calibre that Rob and Lesley-Ann thought
              worthy of the venue, brands or the clientele frequenting these
              venues.
            </p>
            <p className="text-xl thin mt-4 text-white">
              Together, they left their corporate lives behind in an audacious
              and brave pursuit of their dream, to create a business that would
              provide Australian businesses and their guests with a quality
              valet experience that delivers ‘above and beyond’ for all
              concerned; a value-adding service to venues and a ‘wow’ experience
              that would have their guests advocating their experience to others
              and returning again, and again. Today First Class Valet parks on
              average over 6,000 cars per month.
            </p>
            <p className="text-xl thin mt-4 text-white">
              Like many success stories, the rest as they say; ‘is history’.
            </p>
            <p className="text-xl thin mt-4 text-white">
              First Class Valet was established in Sydney since 2014, and has
              grown nationally to other states and cities.
            </p>
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
