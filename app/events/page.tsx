import React from "react";
import Image from "next/image";
import Gallery from "../_components/Gallery";
import Client from "../_components/Client";
import Contact from "../_components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EVENTS - First Class Valet",
  description:
    "First Class Valet’s experience will leave the perfect impression with service that will ‘Wow’ your guests.",
};

const page = () => {
  return (
    <div>
      <div className="z-10 relative overflow-hidden">
        <div className="lg:min-h-screen lg:h-auto h-auto w-full lg:px-20 px-8 py-10 bg-[url(/images/event-banner.jpg)] bg-cover bg-center uppercase lg:text-[5rem] text-center font-[500] flex flex-col items-center justify-center">
          <strong className="lg:text-[3.5rem] text-3xl text-brown tracking-widest">
            EVENTS
          </strong>
          <p className="mt-6 thin font-medium lg:text-[2.2rem] text-2xl lg:leading-[3rem] leading-10 lg:w-4/5 w-11/12 capitalize">
            First Class Valet’s experience will leave the perfect impression
            with service that will ‘Wow’ your guests.
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 mt-12 w-4/5">
            <div className="flex flex-col h-auto">
              <div className="bg-blue text-xl font-semibold text-white pt-4 h-32 text-center w-full">
                <span className="w-9/12">THE PERFECT IMPRESSION</span>
              </div>
              <div className="aspect-[5/3]">
                <Image
                  src="/images/event1.jpg"
                  width={500}
                  height={300}
                  alt=""
                  className="w-full"
                />
              </div>
              <button className="w-full bg-brown text-center py-4 text-white text-xl">
                LEARN MORE
              </button>
            </div>
            <div className="flex flex-col h-auto">
              <div className="bg-blue text-xl font-semibold text-white pt-4 h-32 text-center w-full">
                <span className="w-11/12">
                  SERVICE THAT WILL ‘WOW’ YOUR GUESTS
                </span>
              </div>
              <div className="aspect-[5/3]">
                <Image
                  src="/images/event2.jpg"
                  width={500}
                  height={300}
                  alt=""
                  className="w-full"
                />
              </div>
              <button className="w-full bg-brown text-center py-4 text-white text-xl">
                LEARN MORE
              </button>
            </div>
            <div className="flex flex-col h-auto">
              <div className="bg-blue text-xl font-semibold text-white pt-4 h-32 text-center w-full">
                <span className="w-11/12">OUR VALET EXPERIENCE</span>
              </div>
              <div className="aspect-[5/3]">
                <Image
                  src="/images/event3.jpg"
                  width={500}
                  height={300}
                  alt=""
                  className="w-full"
                />
              </div>
              <button className="w-full bg-brown text-center py-4 text-white text-xl">
                LEARN MORE
              </button>
            </div>
          </div>
          <button className="bg-white border-solid border-2 border-brown lg:text-2xl text-lg max-lg:leading-none text-brown py-3 px-10 mt-12">
            BOOK A COURSE NOW
          </button>
        </div>
      </div>
      <div className="my-12 py-3 bg-brown">
        <div className="bg-blue lg:px-16 px-8 py-12">
          <div>
            <div className="grid lg:grid-flow-col grid-flow-row gap-10 my-8 place-items-center">
              <div className="lg:col-span-4">
                <p className="lg:text-[3rem] lg:leading-tight max-lg:text-3xl text-white ">
                  THE PERFECT IMPRESSION
                </p>
                <p className="text-xl text-white thin mt-4">
                  Your event is special to you and you want to make sure it is
                  just as special for your guests.
                </p>
                <p className="text-xl text-white thin mt-4">
                  You really only have one chance to create lasting memories for
                  your special event and nothing can be left to chance – so it
                  is important to make your guests first and last impressions
                  count!
                </p>
                <p className="text-xl text-white thin mt-4">
                  First Class Valet understand this and are driven by the desire
                  to heighten the experience of your event to one that guests
                  would not expect, but will remember forever.
                </p>
                <p className="text-xl text-white thin mt-4">
                  Having a valet partner who can tailor premium experiences
                  gives you peace-of-mind that your guests will be surprised and
                  impressed with lasting memories of your event.
                </p>
                <p className="text-xl text-white thin mt-4">
                  From the moment of arrival to the very last minute, First
                  Class Valet will deliver and provide the ultimate in five star
                  service and valet parking.
                </p>
              </div>
              <div className="lg:col-span-3">
                <div className="flex flex-col gap-10 w-full">
                  <div className="lg:w-11/12 w-full aspect-[3/4]">
                    <Image
                      src="/images/event-home1.jpg"
                      width={600}
                      height={800}
                      alt=""
                    />
                  </div>
                  <div className="lg:w-11/12 w-full">
                    <button className="w-full bg-brown lg:text-2xl text-lg max-lg:leading-none text-white py-3 px-4 mt-12">
                      CONTACT FIRST CLASS VALET
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
              <div className="lg:col-span-3">
                <p className="lg:text-[3rem] lg:leading-tight max-lg:text-3xl text-brown ">
                  SERVICE THAT WILL ‘WOW’ YOUR GUESTS
                </p>
                <p className="text-xl thin mt-4">
                  First Class Valet can provide every service required to ensure
                  that special memories of your event stay with your guests long
                  after the lights have dimmed or the curtain is drawn.
                </p>
                <p className="text-xl thin mt-4">
                  Our service starts with planning well before the event to
                  ensure that all your needs and requirements are considered
                  including: arrival and departure times, parking locations,
                  number of staff required, parting gifts, car staging and
                  preferential parking for VIP guests or family members. This
                  ensures that our sole focus is on your guests and the parking
                  of their precious cars.
                </p>
                <p className="text-xl thin mt-4">
                  On arrival guests will be welcomed by professional and well
                  groomed valets who provide red carpet experiences and are
                  empowered to take the initiative to resolve any unexpected
                  issues that may arise.
                </p>
                <p className="text-xl thin mt-4">
                  On such special occasions the real test of quality service and
                  delivery is measured by the experience and diplomacy of our
                  valets. Lastly our cloud-based technology captures valuable
                  information that can be used for reporting after an event such
                  as when guests arrived and departed.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col gap-10">
                  <div className="lg:w-11/12 w-full aspect-[3/4]">
                    <Image
                      src="/images/event-home2.jpg"
                      width={600}
                      height={800}
                      alt=""
                    />
                  </div>
                  <div className="lg:w-11/12 w-full">
                    <button className="w-full bg-brown lg:text-2xl text-lg max-lg:leading-none text-white py-3 px-4 mt-12 ">
                      CONTACT FIRST CLASS VALET
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-12 py-3 bg-brown">
        <div className="bg-blue lg:px-16 px-8 py-12">
          <div>
            <div className="grid lg:grid-flow-col grid-flow-row gap-10 my-8 place-items-center">
              <div className="lg:col-span-3">
                <p className="lg:text-[3rem] lg:leading-tight max-lg:text-3xl text-white ">
                  OUR VALET EXPERIENCE
                </p>
                <p className="text-xl text-white thin mt-4">
                  Since 2014, First Class Valet have been the recognised leaders
                  in providing valet parking services for events and special
                  occasions.
                </p>
                <p className="text-xl text-white thin mt-4">
                  First Class Valet has provided valet services throughout
                  Sydney to some of the city’s most prestigious events and
                  brands including:
                </p>
                <p className="text-xl text-white thin mt-4">
                  weddings, VIP events, product launches, corporate events and
                  much more.
                </p>
                <p className="text-xl text-white thin mt-4">
                  First Class Valet can provide all necessary requirements to
                  make the first impression when arriving at your event. This
                  includes outdoor lighting, shuttle & buggy services,
                  directional signage, red carpet welcoming.
                </p>
                <p className="text-xl text-white thin mt-4">
                  You can rest assured that every last detail will be carefully
                  considered and managed by your First Class Valet executive
                  planners.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col gap-10">
                  <div className="lg:w-11/12 w-full aspect-[3/4]">
                    <Image
                      src="/images/event-home3.jpg"
                      width={600}
                      height={800}
                      alt=""
                    />
                  </div>
                  <div className="lg:w-11/12 w-full">
                    <button className="w-full bg-brown lg:text-2xl text-lg max-lg:leading-none text-white py-3 px-4 mt-12 ">
                      CONTACT FIRST CLASS VALET
                    </button>
                  </div>
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
