import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = (): ReactNode => {
  return (
    <>
      <div className="lg:px-20 lg:pt-24 lg:pb-16 pt-12 pb-8">
        <div className="w-full grid grid-cols-3 max-lg:grid-cols-1 max-lg:gap-12">
          <div className="text-center">
            <p className="uppercase text-sky lg:text-lg text-md">ADDRESS</p>
            <p className="text-lg">5 George Street, North Strathfield, 2137</p>
          </div>
          <div className="text-center">
            <p className="uppercase text-sky lg:text-lg text-md">PHONE</p>
            <p className="text-lg">1300 1VALET (1300 182 538)</p>
          </div>
          <div className="text-center">
            <p className="uppercase text-sky lg:text-lg text-md">EMAIL</p>
            <p className="text-lg">info@firstclassvalet.com.au</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-8 mt-20">
          <Link href="/">
            <Image src="/images/facebook.svg" alt="" width={35} height={35} />
          </Link>
          <Link href="/">
            <Image src="/images/instagram.svg" alt="" width={35} height={35} />
          </Link>
          <Link href="/">
            <Image src="/images/linkedin.svg" alt="" width={35} height={35} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
