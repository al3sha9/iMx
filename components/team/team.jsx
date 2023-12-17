"use client";
import React from "react";
import TitleSection from "../heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaBehance, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import TeamSlider from "./allteam/core";

const teamMembers = [
  {
    name: "Moshin Amir",
    role: "CEO and CO-Founder",
    experience: "10 Years of Designing Experience.",
    training: "Trained more than 1000 Students.",
    founderOf: "Founder of IdeoMetriX, Step-Up Ademia, Hotela and Digi-Hunar.",
    projects:
      "Lead projects for many national and international organizations.",
    linkedin: "https://www.linkedin.com/company/ideometrix/",
    behance: "https://www.behance.net/ideometrixteam",
    upwork: "https://www.upwork.com/agencies/ideometrix/",
    image: "/mohsin.png",
  },
  {
    name: "Muhammad Iqbal",
    role: "CEO and CO-Founder",
    experience: "10 Years of Designing Experience.",
    training: "Trained more than 1000 Students.",
    founderOf: "Founder of IdeoMetriX, Step-Up Ademia, Hotela and Digi-Hunar.",
    projects:
      "Lead projects for many national and international organizations.",
    linkedin: "https://www.linkedin.com/company/ideometrix/",
    behance: "https://www.behance.net/ideometrixteam",
    upwork: "https://www.upwork.com/agencies/ideometrix/",
    image: "/iqbal.png",
  },
];

export const Team = () => {
  return (
    <div className="px-4 space-y-2 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10">
      <div>
        <TitleSection firstTitle="OUR" secondTitle="CORE TEAM" />
      </div>
      <div className="w-full flex md:space-x-2 md:flex-row flex-col">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#e6e6e6] p-4 space-x-2 w-full md:w-1/2 rounded-md flex flex-col md:flex-row"
          >
            <div className="md:w-1/2 flex items-center w-full">
              <img
                className="w-full rounded-lg"
                src={member.image}
                alt={member.name}
              />
            </div>
            <div className="space-y-2 md:px-8">
              <h3 className="text-4xl font-semibold md:pt-6 pt-4">
                {member.name}
              </h3>
              <h4 className="bg-[#132849] text-white px-2 text-2xl font-extralight">
                {member.role}
              </h4>
              <div className="pt-3">
                <p className="font-light">{member.experience}</p>
                <p className="font-light">{member.training}</p>
                <p className="font-light">{member.founderOf}</p>
                <p className="font-light">{member.projects}</p>
              </div>
              <div className="flex flex-row">
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin className="text-white p-[6px] rounded-md mx-1 bg-[#2763af] text-3xl" />
                </a>
                <a href={member.behance} target="_blank" rel="noreferrer">
                  <FaBehance className="text-white p-[6px] rounded-md mx-1 bg-[#1d70f6] text-3xl" />
                </a>
                <a href={member.upwork} target="_blank" rel="noreferrer">
                  <SiUpwork className="text-white p-[6px] rounded-md mx-1 bg-[#14a400] text-3xl" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <TeamSlider />
    </div>
  );
};
