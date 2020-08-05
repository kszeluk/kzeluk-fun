import React from "react";

import { GradientLine } from "./gradientLine";

export const SectionTitle = (props) => {
  return (
    <>
      <h2 className="text-primary text-center uppercase">{props.title}</h2>
      <GradientLine />
    </>
  );
}