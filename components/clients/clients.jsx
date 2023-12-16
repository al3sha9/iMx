import React from "react";
import TitleSection from "../heading";

export const Clients = () => {
  return (
    <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10">
      <div>
        <TitleSection firstTitle="OUR" secondTitle="CLIENTS" />
        <p className="text-xl font-extralight">
          With over 500+ satisfied clients, both locally and globally, our
          portfolio is diverse and showcases our expertise. From major
          stakeholders in Gilgit Baltistan to renowned international products
          and organizations, we are proud to have served and exceeded
          expectations
        </p>
      </div>
      <div className="text-center py-10">
        <h1 className="text-6xl font-bold">CLIENT PICS HERE</h1>
      </div>
    </div>
  );
};
