import React from "react";

const Pricing = () => {
  return (
    <div className="w-full h-[100vh] mt-24 max-w-[1280px] mx-auto">
      <section
        id="pricing"
        className="flex flex-col justify-center items-center gap-8 text-center">
        <h1 className="text-5xl">Pricing Plans</h1>
        <p className="text-neutral-500 text-base w-[450px]">
          Choose one of three available ticket tiers, all of which are available
          for purchase when you reach out.
        </p>
      </section>
      <div>
        <div className="pricing-card"></div>
      </div>
    </div>
  );
};

export default Pricing;
