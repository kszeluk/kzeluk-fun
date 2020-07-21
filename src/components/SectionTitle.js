import React from "react";
import styled from "styled-components";

import { GradientLine } from "./gradientLine";

const Title = styled.h2`
  text-transform: uppercase;
  color: #115379;
  text-align: center;
`;


export const SectionTitle = (props) => {
  return (
    <>
      <Title>{props.title}</Title>
      <GradientLine />
    </>
  );
}