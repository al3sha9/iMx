import React from "react";
import TitleSection from "../heading";
import {
  SiAdobe,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiMeta,
  SiNodedotjs,
  SiPremierleague,
  SiReact,
} from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

export const Expertise = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10">
        <div className="w-full flex flex-col md:flex-row space-x-2">
          <div className="w-full md:w-1/2">
            <TitleSection firstTitle="OUR" secondTitle="EXPERTISE" />
            <p className="py-2 font-light text-base lg:text-lg md:pe-16 text-justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te
            </p>
          </div>
          <div className="w-full  md:justify-center flex  flex-wrap md:w-1/2">
            <div className=" m-2 md:m-0 md:w-1/5 md:flex md:justify-center">
              <SiAdobephotoshop className="text-8xl hover:scale-105 hover:cursor-pointer" />
            </div>
            <div className=" m-2 md:m-0 md:w-1/5 md:flex md:justify-center">
              <SiJavascript className="text-8xl hover:scale-105 hover:cursor-pointer" />
            </div>
            <div className=" m-2 md:m-0 md:w-1/5 md:flex md:justify-center">
              <SiReact className="text-8xl hover:scale-105 hover:cursor-pointer" />
            </div>
            <div className=" m-2 md:m-0 md:w-1/5 md:flex md:justify-center">
              <SiAdobepremierepro className="text-8xl hover:scale-105 hover:cursor-pointer" />
            </div>
            <div className=" m-2 md:m-0 md:w-1/5 md:flex md:justify-center">
              <SiHtml5 className="text-8xl hover:scale-105 hover:cursor-pointer" />
            </div>
            <div className=" m-2 md:m-0 md:w-1/5 md:flex md:justify-center">
              <SiAdobeindesign className="text-8xl hover:scale-105 hover:cursor-pointer" />
            </div>
            <div className=" m-2 md:m-0 md:w-1/5 md:flex md:justify-center">
              <SiAdobexd className="text-8xl hover:scale-105 hover:cursor-pointer" />
            </div>
            <div className=" m-2 md:m-0 md:w-1/5 md:flex md:justify-center">
              <SiMeta className="text-8xl hover:scale-105 hover:cursor-pointer" />
            </div>
            <div className=" m-2 md:m-0 md:w-1/5 md:flex md:justify-center">
              <SiFigma className="text-8xl hover:scale-105 hover:cursor-pointer" />
            </div>
            <div className=" m-2 md:m-0 md:w-1/5 md:flex md:justify-center">
              <SiNodedotjs className="text-8xl hover:scale-105 hover:cursor-pointer" />
            </div>
            <div className=" m-2 md:m-0 md:w-1/5 md:flex md:justify-center">
              <SiAdobeillustrator className="text-8xl hover:scale-105 hover:cursor-pointer" />
            </div>
            <div className=" m-2 md:m-0 md:w-1/5 md:flex md:justify-center">
              <SiCss3 className="text-8xl hover:scale-105 hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
