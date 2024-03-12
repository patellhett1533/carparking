import Image from "next/image";
import Contact from "./_components/Contact";
import Testimonials from "./_components/Testimonials";
import Client from "./_components/Client";
import Gallery from "./_components/Gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - First Class Valet",
  description:
    "First Class Valet is Australia’s premium valet service offering: contracted solutions, events, valet training academy and labourhire.",
};

export default function Home() {
  return (
    <>
      <div className="z-10 relative overflow-hidden">
        <div className="lg:h-[36rem] h-[18rem] w-full px-20 bg-[url(/images/home-banner.jpg)] bg-cover bg-center uppercase lg:text-[5rem] md:text-3xl text-2xl text-sky text-center font-[500] flex items-center justify-center leading-none">
          Parking <br />
          <br /> for everyone
        </div>
      </div>
      <div className="bg-sky py-3">
        <div className="bg-blue text-white text-center flex flex-col items-center justify-center gap-8 py-12">
          <h1 className="text-[2.5rem] font-bold uppercase">Who We Are</h1>
          <p className="text-2xl lg:w-2/3 w-full leading-10">
            WE ARE AUSTRALIA’S PREMIUM VALET SERVICE OFFERING: CONTRACTED
            SOLUTIONS, EVENTS, VALET TRAINING ACADEMY AND LABOURHIRE
          </p>
          <button className="bg-sky px-8 py-2 text-xl font-semibold">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="my-12 lg:px-16 px-8">
        <div className="flex max-lg:flex-col  gap-6">
          <div className="lg:w-1/2 w-full">
            <strong className="lg:text-[3rem] text-2xl text-sky tracking-widest">
              CONTRACTED
            </strong>
            <p className="text-[1.6rem] leading-10 tracking-wide thin mt-3">
              First Class Valet are the experts in valet solutions using the
              latest technology, with service that is seamless and ‘Wows’ your
              guests.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <Image src="/images/home1.jpg" width={1680} height={1156} alt="" />
          </div>
        </div>
        <div className="w-full mt-6">
          <p className="lg:text-[2rem] text-xl text-sky leading-10 tracking-wide thin mb-6">
            SELECT YOUR INDUSTRY :
          </p>
          <div className="flex max-lg:flex-col lg:items-center gap-3">
            <button className="tracking-widest bg-transparent text-sky text-xl border-solid border-2 border-sky px-8 py-3 uppercase hover:bg-sky hover:text-white">
              DEALERSHIPS
            </button>
            <button className="tracking-widest bg-transparent text-sky text-xl border-solid border-2 border-sky px-8 py-3 uppercase hover:bg-sky hover:text-white">
              HOSPITALITY
            </button>
            <button className="tracking-widest bg-transparent text-sky text-xl border-solid border-2 border-sky px-8 py-3 uppercase hover:bg-sky hover:text-white">
              RETAIL
            </button>
            <button className="tracking-widest bg-transparent text-sky text-xl border-solid border-2 border-sky px-8 py-3 uppercase hover:bg-sky hover:text-white">
              GAMING
            </button>
            <button className="tracking-widest bg-transparent text-sky text-xl border-solid border-2 border-sky px-8 py-3 uppercase hover:bg-sky hover:text-white">
              OTHER
            </button>
          </div>
        </div>
      </div>
      <div className="my-12 py-3 bg-sky">
        <div className="bg-blue lg:px-16 px-8 py-12">
          <div className="flex max-lg:flex-col  gap-6">
            <div className="lg:w-1/2 w-full">
              <strong className="lg:text-[3rem] text-2xl text-brown tracking-widest">
                EVENTS
              </strong>
              <p className="text-[1.6rem] leading-10 tracking-wide thin mt-3 text-white">
                First Class Valet’s experience will leave the perfect impression
                with service that will ‘Wow’ your guests.
              </p>
              <button className="tracking-widest bg-brown px-8 py-3 text-xl text-white font-semibold mt-12">
                LEARN MORE
              </button>
            </div>
            <div className="lg:w-1/2 w-full">
              <Image
                src="/images/home2.jpg"
                width={1680}
                height={1156}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:px-16 px-8 ">
        <div className="flex max-lg:flex-col  gap-6">
          <div className="lg:w-1/2 w-full">
            <strong className="lg:text-[3rem] text-2xl text-purple tracking-widest">
              ACADEMY
            </strong>
            <p className="text-[1.6rem] leading-10 tracking-wide thin mt-3 text-black">
              Valet and concierge labourhire specialists with the best trained
              and experienced staff available when you need them.
            </p>
            <button className="tracking-widest bg-purple px-8 py-3 text-xl text-white font-semibold mt-12">
              LEARN MORE
            </button>
          </div>
          <div className="lg:w-1/2 w-full">
            <Image src="/images/home3.jpg" width={1680} height={1156} alt="" />
          </div>
        </div>
      </div>
      <div className="my-12 py-3 bg-sky">
        <div className="bg-blue lg:px-16 px-8 py-12">
          <div className="flex max-lg:flex-col gap-6">
            <div className="lg:w-1/2 w-full">
              <strong className="lg:text-[3rem] text-2xl text-orange tracking-widest">
                LABOURHIRE
              </strong>
              <p className="text-[1.6rem] leading-10 tracking-wide thin mt-3 text-white">
                First Class Valet’s experience will leave the perfect impression
                with service that will ‘Wow’ your guests.
              </p>
              <button className="tracking-widest bg-orange px-8 py-3 text-xl text-white font-semibold mt-12">
                LEARN MORE
              </button>
            </div>
            <div className="lg:w-1/2 w-full">
              <Image
                src="/images/home4.jpg"
                width={1680}
                height={1156}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Gallery />
      <Client />
      <Testimonials />
      <Contact />
    </>
  );
}
