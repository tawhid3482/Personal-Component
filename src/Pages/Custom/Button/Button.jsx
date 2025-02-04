import React from "react";
import AnimationButton from "./AnimationButton";
import NormalButton from "./NormalButton";
import GradientBtn from "./GradientBtn";
import OutlineBtn from "./OutlineBtn";

const Button = () => {
  return (
    <div>
      <NormalButton></NormalButton>
      <GradientBtn></GradientBtn>
      <AnimationButton></AnimationButton>
      <OutlineBtn></OutlineBtn>
    </div>
  );
};

export default Button;
