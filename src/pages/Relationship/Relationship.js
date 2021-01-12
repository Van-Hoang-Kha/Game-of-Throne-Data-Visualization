import React from "react";
import Snowfall from "react-snowfall";
import RelationsDiagram from "./RelationsDiagram";
import "./Relationship.css";

const Relationship = () => {
  return (
    <div className="relations__div">
      <Snowfall color="#ffffff5e" snowflakeCount={200} />
      <div className="relations__title">The Web of Westeros</div>
      <div className="relations__details">
        Let's look at the relationships between the Seven Kingdom's power
        players.
      </div>
      <div className="relations__chart">
        <RelationsDiagram />
      </div>
      <a
        className="relations__chart__source"
        href="https://gameofthrones.fandom.com/wiki/Category:Relationships"
      >
        Data Source{" "}
      </a>
    </div>
  );
};

export default Relationship;
