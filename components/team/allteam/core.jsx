"use client";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaBehance } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TeamSlider = () => {
    const [slidesPerView, setSlidesPerView] = useState(5);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 768) {
          setSlidesPerView(1);
        } else {
          setSlidesPerView(5);
        }
      };
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
  const teamMembers = [
    {
      name: "Aadil Asad",
      role: "Sr. Graphic Designer",
      experience: "3+ Years Experience.",
      upworkRating: "Top Rated on Upwork.",
      fiverrRating: "Level 2 on Fiverr.",
      organizations:
        "Experience of working with National and International organizations",
      linkedin: "#",
      behance: "#",
      upwork: "#",
      imageSrc: "/team/aadil.png",
    },
    {
      name: "Meassum Abbas",
      role: "Full Stack Developer",
      experience: "2+ Years Experience.",
      upworkRating: "Top Rated on Upwork.",
      //   fiverrRating: 'Level 2 on Fiverr.',
      //   organizations: 'Experience of working with National and International organizations',
      linkedin: "#",
      behance: "#",
      upwork: "#",
      imageSrc: "/mohsin.png",
    },
    {
      name: "Umer Farooq",
      role: "Digital Marketing Lead",
      experience: "5+ Years Experience.",
      // upworkRating: 'Top Rated on Upwork.',
      fiverrRating: "Level one seller on Fiverr with over 300+ Projects Done.",
      organizations: "2+ Years of Training Experience.",
      linkedin: "#",
      // behance: '#',
      upwork: "#",
      imageSrc: "/iqbal.png",
    },
    {
      name: "Umer Farooq",
      role: "Digital Marketing Lead",
      experience: "5+ Years Experience.",
      // upworkRating: 'Top Rated on Upwork.',
      fiverrRating: "Level one seller on Fiverr with over 300+ Projects Done.",
      organizations: "2+ Years of Training Experience.",
      linkedin: "#",
      // behance: '#',
      upwork: "#",
      imageSrc: "/team/aadil.png",
    },
    {
      name: "Umer Farooq",
      role: "Digital Marketing Lead",
      experience: "5+ Years Experience.",
      // upworkRating: 'Top Rated on Upwork.',
      fiverrRating: "Level one seller on Fiverr with over 300+ Projects Done.",
      organizations: "2+ Years of Training Experience.",
      linkedin: "#",
      // behance: '#',
      upwork: "#",
      imageSrc: "/mohsin.png",
    },
    {
      name: "Umer Farooq",
      role: "Digital Marketing Lead",
      experience: "5+ Years Experience.",
      // upworkRating: 'Top Rated on Upwork.',
      fiverrRating: "Level one seller on Fiverr with over 300+ Projects Done.",
      organizations: "2+ Years of Training Experience.",
      linkedin: "#",
      // behance: '#',
      upwork: "#",
      imageSrc: "/iqbal.png",
    },
  ];

  return (
    <div className="w-full">
       <Swiper
        spaceBetween={5}
        loop={true}
        modules={[Autoplay]}
        autoplay={true}
        slidesPerView={slidesPerView}
        navigation={true}
        pagination={{
          clickable: true,
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 md:h-[600px] rounded bg-[#e6e6e6]">
              <div className="w-full flex justify-center items-center">
                <img
                  className="w-full rounded-lg"
                  src={member.imageSrc}
                  alt={member.name}
                />
              </div>
              <div>
                <h3 className="text-2xl text-[#132849] font-semibold md:pt-6 pt-4">
                  {member.name}
                </h3>
                <h4 className="py-2 text-xl">{member.role}</h4>
                <div>
                  <p className="font-light text-base">{member.experience}</p>
                  <p className="font-light text-base">{member.upworkRating}</p>
                  <p className="font-light text-base">{member.fiverrRating}</p>
                  <p className="font-light text-base">{member.organizations}</p>
                </div>
                <div className="flex flex-row h-full items-end">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
