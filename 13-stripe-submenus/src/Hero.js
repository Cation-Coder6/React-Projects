import React from "react";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  const data = useGlobalContext();
  console.log(data);
  return <h2>Hero Component</h2>;
};

export default Hero;
