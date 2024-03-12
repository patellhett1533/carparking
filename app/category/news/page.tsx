import Client from "@/app/_components/Client";
import Contact from "@/app/_components/Contact";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News Archives - First Class Valet",
  description:
    "First Class Valet is Australia’s premium valet service offering: contracted solutions, events, valet training academy and labourhire",
};

const page = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center mt-20">
        <p className="text-xl thin">Category</p>
        <h1 className="text-[3.8rem] font-semibold tracking-widest">News</h1>
      </div>
      <div className="grid grid-flow-row gap-16 lg:px-20 md:px-12 px-6 mt-12">
        <div className="flex flex-col gap-8">
          <div className="grid lg:grid-flow-col grid-flow-row gap-10">
            <div className="group relative aspect-[160/101] w-full lg:col-span-2 overflow-x-hidden">
              <div className="absolute transition-all bg-sky w-full h-full top-0 -left-full group-hover:left-0  flex items-center justify-center flex-col">
                <div className="flex items-center gap-6">
                  <Image
                    src="/images/link.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="cursor-pointer"
                  />
                  <Image
                    src="/images/search.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="cursor-pointer"
                  />
                </div>
                <div className="text-white text-center px-4 mt-6">
                  The top 5 headaches when it comes to running a carpark!
                </div>
              </div>
              <Image
                src="/images/blog1.jpeg"
                width={500}
                height={300}
                alt=""
                className="w-full"
              />
            </div>
            <div className="lg:col-span-4">
              <Link href="/abcd">
                <h1 className="font-bold text-2xl tracking-widest hover:text-sky">
                  The top 5 headaches when it comes to running a carpark!
                </h1>
              </Link>
              <p className="thin text-md mt-6 line-clamp-3">
                Operating a car park might seem like a straightforward business,
                but behind the scenes, there are numerous challenges that
                parking facility managers face daily. From technology glitches
                to customer satisfaction, the complexities of managing a car
                park go beyond simply
              </p>
            </div>
          </div>
          <div className="border-solid border-y border-sky flex lg:items-center max-lg:flex-col justify-between py-2">
            <div>
              <p className="thin">November 14th, 2023 | News, Service</p>
            </div>
            <Link href="/">
              <div className="hover:text-sky thin flex items-center">
                Read More
                <Image
                  src="/images/right.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="cursor-pointer"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid lg:grid-flow-col grid-flow-row gap-10">
            <div className="group relative aspect-[160/101] w-full lg:col-span-2 overflow-x-hidden">
              <div className="absolute transition-all bg-sky w-full h-full top-0 -left-full group-hover:left-0  flex items-center justify-center flex-col">
                <div className="flex items-center gap-6">
                  <Image
                    src="/images/link.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="cursor-pointer"
                  />
                  <Image
                    src="/images/search.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="cursor-pointer"
                  />
                </div>
                <div className="text-white text-center px-4 mt-6">
                  Let’s talk claims
                </div>
              </div>
              <Image
                src="/images/blog2.jpg"
                width={500}
                height={300}
                alt=""
                className="w-full"
              />
            </div>
            <div className="lg:col-span-4">
              <Link href="/abcd">
                <h1 className="font-bold text-2xl tracking-widest hover:text-sky">
                  Let’s talk claims
                </h1>
              </Link>
              <p className="thin text-md mt-6 line-clamp-3">
                Valet parking creates a lot of happiness and convenience for
                customers, but it comes with some pain points for our clients
                who run valet parking services. The biggest challenge we find
                our clients face is when claims are made, it
              </p>
            </div>
          </div>
          <div className="border-solid border-y border-sky flex lg:items-center max-lg:flex-col justify-between py-2">
            <div>
              <p className="thin">November 14th, 2023 | News, Service</p>
            </div>
            <Link href="/">
              <div className="hover:text-sky thin flex items-center">
                Read More
                <Image
                  src="/images/right.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="cursor-pointer"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid lg:grid-flow-col grid-flow-row gap-10">
            <div className="group relative aspect-[160/101] w-full lg:col-span-2 overflow-x-hidden">
              <div className="absolute transition-all bg-sky w-full h-full top-0 -left-full group-hover:left-0  flex items-center justify-center flex-col">
                <div className="flex items-center gap-6">
                  <Image
                    src="/images/link.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="cursor-pointer"
                  />
                  <Image
                    src="/images/search.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="cursor-pointer"
                  />
                </div>
                <div className="text-white text-center px-4 mt-6">
                  The seamless valet experience driven by technology
                </div>
              </div>
              <Image
                src="/images/blog3.jpg"
                width={500}
                height={300}
                alt=""
                className="w-full"
              />
            </div>
            <div className="lg:col-span-4">
              <Link href="/abcd">
                <h1 className="font-bold text-2xl tracking-widest hover:text-sky">
                  The seamless valet experience driven by technology
                </h1>
              </Link>
              <p className="thin text-md mt-6 line-clamp-3">
                Technology has transformed many industries, and the valet
                parking industry is no exception. With new advancements in
                technology, the valet experience has been revolutionised, making
                it more convenient and efficient for both valet attendants and
                customers. In this blog, we
              </p>
            </div>
          </div>
          <div className="border-solid border-y border-sky flex lg:items-center max-lg:flex-col justify-between py-2">
            <div>
              <p className="thin">November 14th, 2023 | News, Service</p>
            </div>
            <Link href="/">
              <div className="hover:text-sky thin flex items-center">
                Read More
                <Image
                  src="/images/right.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="cursor-pointer"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Client />
      <Contact />
    </div>
  );
};

export default page;
