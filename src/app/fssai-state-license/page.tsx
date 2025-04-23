import React from "react";
import TalkToExpert from "../../components/Page2/TalkToExpert";
import LogoSlider from "@/components/Page2/LogoSlider";
import Overview from "@/components/Page2/Overview";
import Hero from "@/components/Page2/hero";

const FssaiStateLicense: React.FC = () => {
  return (
    <div>
      <Hero/>
      <LogoSlider/>
      <TalkToExpert />
      <Overview/>
    </div>
  );
};

export default FssaiStateLicense;
