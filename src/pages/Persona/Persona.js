import React from "react";
import Snowfall from "react-snowfall";
import PersonalityChart from "./PersonalityDiagram";
import "./Persona.css";

const Persona = () => {
  return (
    <div className="persona__div">
      <Snowfall color="#ffffff14" snowflakeCount={200} />
      <div className="persona__title">
        Based on their personalities, who would be
        <br />{" "}
        <span className="personal__emphasis__leader">
          the most effective leader?
        </span>
      </div>

      <div className="persona__chart">
        <PersonalityChart />
      </div>
      <a
        className="persona__chart__source"
        href="https://visme.co/blog/game-of-thrones-characters/"
      >
        Data Source{" "}
      </a>
    </div>
  );
};

export default Persona;
