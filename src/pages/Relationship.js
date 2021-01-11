import React from "react";
// import HeatMap from "./Heatmap";
import "./Relationship.css";
import Jon from "../images/Jon.png";
import Three from "./Three/DrogonCanvas";
import "./Relationship.css";

const Relationship = () => {
  return (
    <div className="relationship__div">
      <div>What did they do?</div>
      <img className="relationship__jon" src={Jon} alt="" />
      <Three />
    </div>
  );
};

export default Relationship;
