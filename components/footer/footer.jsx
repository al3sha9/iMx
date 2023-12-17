import Image from "next/image";
import React from "react";
import SEC from '../../public/secp-logo.png'
import LogoImx from '../svgs/logo.svg'
import {
  FaLocationArrow,
  FaMousePointer,
  FaPhone,
  FaSearchLocation,
} from "react-icons/fa";
import { Si1Password, SiGmail } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="bg-[#132849]">
      <div className="px-4 space-y-2 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10">
        <div className="w-full justify-center space-y-4 md:space-y-0 flex flex-col md:flex-row">
          <div className="md:w-1/3 w-full items-center flex">
            <Image src={LogoImx} alt="IMX logo" className="h-100 w-100 md:w-[400px]"/>
          </div>
          <div className="w-full md:w-1/3 text-center items-center  flex flex-col">
            <h4 className="text-lg text-white font-light hover:underline">REGISTERED WITH</h4>
            <div className="py-2">
                <Image width={100} height={100} src={SEC} alt="sec" />
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="w-full flex flex-row">
              <div className="w-1/12  flex justify-end py-2 mx-2 items-center ">
                <FaPhone className="bg-white text-2xl text-[#132849] p-1 rounded-full" />
              </div>
              <div className="w-11/12">
                <a
                  href="tel:+923445448152"
                  className="text-lg text-white font-light hover:underline"
                  target="_blank"
                  rel="norefferer"
                >
                  +923445448152
                </a>
              </div>
            </div>

            <div className="w-full flex flex-row">
              <div className="w-1/12  flex justify-end py-2 mx-2 items-center ">
                <SiGmail className="bg-white text-2xl text-[#132849] p-1 rounded-full" />
              </div>
              <div className="w-11/12">
                <a
                  href="mailto:info@ideomatrix.com"
                  className="text-lg text-white font-light hover:underline"
                  target="_blank"
                  rel="norefferer"
                >
                  info@ideomatrix.com
                </a>
              </div>
            </div>
            <div className="w-full flex flex-row">
              <div className="w-1/12  flex justify-end py-2 mx-2 items-center ">
                <FaMousePointer className="bg-white text-2xl text-[#132849] p-1 rounded-full" />
              </div>
              <div className="w-11/12">
                <a
                  href="http://www.ideometrix.com/"
                  className="text-lg text-white font-light hover:underline"
                  target="_blank"
                  rel="norefferer"
                >
                  http://www.ideometrix.com/
                </a>
              </div>
            </div>

            <div className="w-full flex flex-row">
              <div className="w-1/12  flex justify-end py-2 mx-2 items-start ">
                <FaLocationArrow className="bg-white text-2xl text-[#132849] p-1 rounded-full" />
              </div>
              <div className="w-11/12">
                <a
                  href="goo.gl"
                  className="text-lg text-white font-light hover:underline"
                  target="_blank"
                  rel="norefferer"
                >
                  Ideometrix Office, Naveed Shaheed Road, Sonikote, Gilgit,
                  Gilgit Baltistan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
