import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const clients = [
  "Mirvac",
  "Primus",
  "Ferreri",
  "Jill",
  "TeamEvent",
  "kingofclub",
  "mercedes",
  "wilsonparking",
  "bmw",
  "goldmansach",
  "inglish",
  "mgevent",
  "audi",
];
const Client = () => {
  return (
    <div className="py-3 bg-sky">
      <div className="bg-white lg:px-16 px-8 py-12 w-full text-center">
        <strong className="lg:text-[3rem] text-2xl text-sky tracking-widest ">
          OUR CLIENTS
        </strong>
        <div className="my-8">
          <Marquee>
            <div className="flex flex-row gap-4">
              {clients &&
                clients.map((item) => (
                  <div className="aspect-[183/115] border-solid border border-border">
                    <Image
                      src="/images/mirvac.jpg"
                      width={170}
                      height={100}
                      alt=""
                    />
                  </div>
                ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Client;
