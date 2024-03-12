"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";

const Header = (): ReactNode => {
  const [width, setWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(true);
  const [about, setAbout] = useState(true);
  const [contract, setContract] = useState(false);

  const handleWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);

    if (window.innerWidth <= 767) {
      setMenu(false);
      setAbout(false);
    }
  }, []);

  return (
    <div className="z-20 w-full lg:px-20 px-8 py-3 flex lg:items-center justify-between max-lg:flex-col relative bg-white">
      <div>
        <Image
          src="/images/logo.png"
          width={width <= 767 ? 150 : 230}
          height={width <= 767 ? 30 : 50}
          className=""
          alt=""
        />
      </div>
      <div>
        <ul
          className={`flex max-lg:flex-col items-center lg:gap-6 gap-3 max-lg:mt-8 ${
            !menu && "hidden"
          }`}
        >
          <li className="group relative dropdown cursor-pointer text-base uppercase tracking-wide max-lg:w-screen">
            <p className="flex items-center max-lg:justify-between max-lg:px-6 gap-1 group-hover:lg:text-sky">
              <a href="/who-we-are">ABOUT</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                onClick={() => setAbout(!about)}
              >
                <path
                  d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z"
                  fill="currentColor"
                />
              </svg>
            </p>
            <div
              className={`group-hover:lg:block dropdown-menu lg:absolute lg:hidden h-auto ${
                !about ? "hidden" : ""
              }`}
            >
              <ul className="top-0 lg:w-48 w-screen bg-white lg:shadow max-lg:mx-4 lg:my-8">
                <li className="py-3 px-6 hover:bg-[#f9f9fb]">
                  <a
                    href="/category/news"
                    className="block text-base uppercase  cursor-pointer"
                  >
                    NEWS
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="group  relative dropdown cursor-pointer text-base uppercase tracking-wide max-lg:w-screen">
            <p className="flex items-center max-lg:justify-between max-lg:px-6 gap-1 group-hover:lg:text-sky">
              <a href="/contracted-valet"> CONTRACTED</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                onClick={() => setContract(!contract)}
              >
                <path
                  d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z"
                  fill="currentColor"
                />
              </svg>
            </p>
            <div
              className={`group-hover:lg:block dropdown-menu lg:absolute lg:hidden h-auto ${
                !contract ? "hidden" : ""
              }`}
            >
              <ul className="top-0 lg:w-52 w-screen bg-white lg:shadow max-lg:mx-4  lg:my-8">
                <li className="lg:py-3 py-2 px-6 hover:bg-[#f9f9fb]">
                  <a
                    href="/dealerships"
                    className="block text-base uppercase  cursor-pointer"
                  >
                    Dealership
                  </a>
                </li>
                <li className="lg:py-3 py-2 px-6 hover:bg-[#f9f9fb]">
                  <a
                    href="/retail"
                    className="block text-base uppercase  cursor-pointer"
                  >
                    Retail
                  </a>
                </li>
                <li className="lg:py-3 py-2 px-6 hover:bg-[#f9f9fb]">
                  <a
                    href="/hospitality"
                    className="block text-base uppercase  cursor-pointer"
                  >
                    Hospitality
                  </a>
                </li>
                <li className="lg:py-3 py-2 px-6 hover:bg-[#f9f9fb]">
                  <a
                    href="clubs-gaming"
                    className="block text-base uppercase  cursor-pointer"
                  >
                    Clubs & Gaming
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <a href="/labourhire" className="flex max-lg:w-screen max-lg:px-6">
            LABOURHIRE
          </a>
          <a href="/academy" className="max-lg:w-screen max-lg:px-6">
            ACADAMY
          </a>
          <a href="/technology" className="max-lg:w-screen max-lg:px-6">
            TECHNOLOGY
          </a>
          <a href="/events" className="max-lg:w-screen max-lg:px-6">
            EVENT
          </a>
          <a href="/contact" className="max-lg:w-screen max-lg:px-6">
            CONTACT
          </a>
        </ul>
        <div
          className="lg:hidden absolute right-0 top-0 -translate-x-[160%] translate-y-[150%]"
          onClick={() => setMenu(!menu)}
        >
          <Image src="/images/menu.svg" width={20} height={20} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
