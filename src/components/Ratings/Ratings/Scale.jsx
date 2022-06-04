import React from "react";
import { OuterScale, InnerScale } from "./CharacteristicsScale.jsx";

const Scale = ({ total, amount }) => {

  let percentage = Math.round((amount / total) * 100);

  return (
    <OuterScale>
      <InnerScale percent={percentage} />
    </OuterScale>
  );
};

export default Scale;
