import React from "react";
import Image from "next/image";
import Gallery from "../_components/Gallery";
import Client from "../_components/Client";
import Contact from "../_components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TECHNOLOGY - First Class Valet",
  description:
    "Specialised valet technology systems with a state-of-the-art, cloud based, SMS, valet platform, which produces insights and data into your valet & concierge operation.",
};

const page = () => {
  return (
    <div>
      <div className="z-10 relative overflow-hidden">
        <div className="lg:min-h-screen lg:h-auto h-auto w-full lg:px-20 px-8 py-10 bg-[url(/images/technology-banner.jpg)] bg-cover bg-center uppercase lg:text-[5rem] text-center font-[500] flex flex-col items-center justify-center">
          <strong className="lg:text-[3.5rem] text-3xl text-green tracking-widest">
            TECHNOLOGY
          </strong>
          <p className="mt-6 thin font-medium lg:text-[2.2rem] text-2xl lg:leading-[3rem] leading-10 lg:w-4/5 w-11/12 capitalize">
            Specialised valet technology systems with a state-of-the-art, cloud
            based, SMS, valet platform, which produces insights and data into
            your valet & concierge operation.
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 mt-12 w-4/5">
            <div className="flex flex-col h-auto">
              <div className="bg-blue text-xl font-semibold text-white pt-4 h-32 text-center w-full">
                <span className="w-9/12">STREAMLINING OPERATIONS</span>
              </div>
              <div className="aspect-[5/3]">
                <Image
                  src="/images/tech1.png"
                  width={500}
                  height={300}
                  alt=""
                  className="w-full"
                />
              </div>
              <button className="w-full bg-green text-center py-4 text-white text-xl">
                LEARN MORE
              </button>
            </div>
            <div className="flex flex-col h-auto">
              <div className="bg-blue text-xl font-semibold text-white pt-4 h-32 text-center w-full">
                <span className="w-11/12">SEAMLESS CAR & BAG CHECK-IN’S</span>
              </div>
              <div className="aspect-[5/3]">
                <Image
                  src="/images/tech2.png"
                  width={500}
                  height={300}
                  alt=""
                  className="w-full"
                />
              </div>
              <button className="w-full bg-green text-center py-4 text-white text-xl">
                LEARN MORE
              </button>
            </div>
            <div className="flex flex-col h-auto">
              <div className="bg-blue text-xl font-semibold text-white pt-4 h-32 text-center w-full">
                <span className="w-11/12">RICH DATA & INSIGHTS PROVIDED</span>
              </div>
              <div className="aspect-[5/3]">
                <Image
                  src="/images/tech3.png"
                  width={500}
                  height={300}
                  alt=""
                  className="w-full"
                />
              </div>
              <button className="w-full bg-green text-center py-4 text-white text-xl">
                LEARN MORE
              </button>
            </div>
          </div>
          <button className="bg-white border-solid border-2 border-green lg:text-2xl text-lg max-lg:leading-none text-green py-3 px-10 mt-12">
            BOOK A COURSE NOW
          </button>
        </div>
      </div>
      <div className="my-12 py-3 bg-green">
        <div className="bg-blue lg:px-16 px-8 py-12">
          <div>
            <div className="grid lg:grid-flow-col grid-flow-row gap-10 my-8 place-items-center">
              <div className="lg:col-span-4">
                <p className="lg:text-[3rem] lg:leading-tight max-lg:text-3xl text-white ">
                  STREAMLINING OPERATIONS
                </p>
                <p className="text-xl text-white thin mt-4">
                  Save your customers time and the frustration of parking.
                </p>
                <p className="text-xl text-white thin mt-4">
                  With state-of-the-art cloud based technology, your concierge
                  and valet operation is streamlined creating efficiencies for
                  more volume. The result of this is higher quality and
                  efficient experience for your customer.
                </p>
                <p className="text-xl text-white thin mt-4">
                  With our cloud based technology, not knowing the location of a
                  vehicle should be a thing of the past. You are able to easily
                  monitor your driveway operation from the palm of your hand,
                  whilst still gaining insights on efficiencies and movements on
                  your driveway.
                </p>
                <p className="text-xl text-white thin mt-4">
                  Clients in several industries such as hotels & accommodation,
                  retail, dealerships, clubs & gaming, can take advantage of
                  customised settings specific for their industry, and tailored
                  for their site.
                </p>
              </div>
              <div className="lg:col-span-3">
                <div className="flex flex-col gap-10">
                  <div className="lg:w-10/12 w-full aspect-[3/4]">
                    <Image
                      src="/images/technology1.png"
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
      <div className="my-12 py-3 bg-white">
        <div className="bg-white lg:px-16 px-8 py-12">
          <div>
            <div className="grid lg:grid-flow-col grid-flow-row gap-10 my-8 place-items-center">
              <div className="lg:col-span-3">
                <p className="lg:text-[3rem] lg:leading-tight max-lg:text-3xl text-green ">
                  SEAMLESS CAR & BAG CHECK-IN’S
                </p>
                <p className="text-xl thin mt-4">
                  In the age of technology, customer experiences still matters
                  with an integrated approach.
                </p>
                <p className="text-xl thin mt-4">
                  Your customers are able to simply provide their phone number
                  which allows the valet to generate an SMS ticket sent directly
                  to their phone immediately. Any pre-existing damage on the car
                  is then captured photographically, and is time and date
                  stamped.
                </p>
                <p className="text-xl thin mt-4">
                  With an integrated system, reception staff are notified of the
                  customers arrival before they even reach the reception desk,
                  providing a seamless experience. A customers first impression
                  has been set high, and they’re happy with their experience.
                </p>
                <p className="text-xl thin mt-4">
                  When it is time to leave, customers simply click on the
                  customised SMS link sent to them, alerting the valet 10-15
                  minutes before leaving, avoiding waiting time in the car park.
                  Customers can actually track their cars movements in the
                  queue.
                </p>
                <p className="text-xl thin mt-4">
                  The car should be ready and waiting for your customers at the
                  valet stand by the time they arrive. Safety precautions are
                  taken by verifying their SMS ticket, and checking the car for
                  any damage. Customers depart promptly, and with a lasting
                  positive experience.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col gap-10">
                  <div className="lg:w-10/12 w-full aspect-[3/4]">
                    <Image
                      src="/images/technology2.png"
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
      <div className="my-12 py-3 bg-green">
        <div className="bg-blue lg:px-16 px-8 py-12">
          <div>
            <div className="grid lg:grid-flow-col grid-flow-row gap-10 my-8 place-items-center">
              <div className="lg:col-span-3">
                <p className="lg:text-[3rem] lg:leading-tight max-lg:text-3xl text-white ">
                  RICH DATA & INSIGHTS PROVIDED
                </p>
                <p className="text-xl text-white thin mt-4">
                  Unique to this technology, clients are able to gain access to
                  real time insights on a valet driveway that they never had
                  before.
                </p>
                <p className="text-xl text-white thin mt-4">
                  Clients can simply see driveway activity in real time in the
                  palm of their hands. No app necessary – just simply save the
                  browser to your phone and watch your driveway operation in
                  real time.
                </p>
                <p className="text-xl text-white thin mt-4">
                  Valet data regarding guests can be linked to your database to
                  facilitate or support a loyalty, or rewards program. Reports
                  provided can offer date on customer parking habits, frequency
                  of visits, time spent in the property and much more.
                </p>
                <p className="text-xl text-white thin mt-4">
                  Clients are able to print shift, weekly, and monthly
                  customised shift reports. Not only that but revenue, employee,
                  vehicle & damage reports are also available at any time.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col gap-10">
                  <div className="lg:w-10/12 w-full aspect-[3/4]">
                    <Image
                      src="/images/technology3.jpeg"
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
      <Contact />
    </div>
  );
};

export default page;
