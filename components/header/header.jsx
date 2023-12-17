import React from 'react'
import { FaBehance, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import Image from "next/image";
import Logoimx from '../svgs/logo.svg';

export const Header = () => {
  return (
    <main className=" bg-[url(../public/bg.jpg)] bg-cover bg-right md:bg-center">
        <header className='px-4 pt-10 pb-5 h-[100vh] md:h-[70vh] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl  lg:px-8 '>
          <div className='logo h-[20%]'>
            <Image src={Logoimx} className="h-100 w-100 md:w-[400px]" alt="LOGO" />
          </div>
          <section className='h-[60%] flex justify-start items-center'>
            <div className="flex flex-col">
              <div className="flex flex-wrap flex-row">
                <div>
                  <h1 className="font-bold  text-7xl text-white leading-[1.3]">Bridging</h1>
                </div>
                <div className="m-3 px-4 md:-rotate-6 bg-[#cc8627]">
                  <span className="font-bold text-7xl text-white leading-[1.3] ">Ideas</span>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-7xl text-white leading-[1.3]">With Design</h1>
              </div>
            </div>
          </section>
          <section className='socials flex justify-end items-end h-[20%]'>
            <a href="https://www.ideometrix.com/" target="_blank" rel="norefferer"><FaGlobe className="text-white p-[6px] rounded-md mx-1 bg-[#cc8627] text-4xl" /></a>
            <a href="https://www.linkedin.com/company/ideometrix/" target="_blank" rel="norefferer"><FaLinkedin className="text-white p-[6px] rounded-md mx-1 bg-[#2763af] text-4xl" /></a>
            <a href="https://www.behance.net/ideometrixteam" target="_blank" rel="norefferer"><FaBehance className="text-white p-[6px] rounded-md mx-1 bg-[#1d70f6] text-4xl" /></a>
            <a href="https://www.upwork.com/agencies/ideometrix/" target="_blank" rel="norefferer"><SiUpwork className="text-white p-[6px] rounded-md mx-1 bg-[#14a400] text-4xl" /></a>
            <a href="https://www.facebook.com/IdeoMetriX" target="_blank" rel="norefferer"><FaFacebook className="text-white p-[6px] rounded-md mx-1 bg-[#507dce] text-4xl" /></a>
            <a href="https://www.instagram.com/IdeoMetriX/" target="_blank" rel="norefferer"><FaInstagram className="text-white p-[6px] rounded-md mx-1 bg-[#ff796c] text-4xl" /></a>
          </section>
        </header>
      </main>
  )
}
