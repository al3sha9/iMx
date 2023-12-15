import React from "react";

export const Overview = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10">
      <div>
      <h2 className="font-medium text-4xl ">COMPANY</h2>
          <h2 className="grad2 text-6xl md:text-7xl font-bold">OVERVIEW</h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[40%]">
          
        </div>
        <div className="md:w-[60%] md:px-6">
          <h3 className="py-2 font-light text-base lg:text-lg text-justify">
            IdeoMetriX, founded in 2020, has rapidly evolved into a dynamic
            design and tech firm with a global footprint. In its three-year
            journey, IdeoMetriX has emerged as a leader in providing
            cutting-edge solutions in design, marketing, tech consultancy, and
            software development. Serving a diverse clientele nationally and
            globally, IdeoMetriX stands out for its commitment to innovation,
            inclusivity, and social impact.
          </h3>
          <h3 className="py-2 font-light text-base lg:text-lg text-justify">
            Going beyond services, IdeoMetriX is actively involved in product
            development. Notable among these initiatives are Hotela, a
            comprehensive solution for streamlining hotel management processes,
            and Digihunar, an innovative approach to digital human resources.
            These products exemplify IdeoMetriX's versatility and commitment to
            providing impactful solutions across various industries.
          </h3>
          <h3 className="py-2 font-light text-base lg:text-lg text-justify">
            Moreover, IdeoMetriX is driving positive change through training
            initiatives like STEP UP Ademia, a women-led program addressing the
            digital skill gap. By empowering individuals with the transformative
            power of design and technology, IdeoMetriX is dedicated to shaping a
            brighter and more innovative future.
          </h3>
        </div>
      </div>
    </section>
  );
};
