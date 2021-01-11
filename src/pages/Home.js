import React from "react";
import Intro from "./Intro";
import Cinematography from "./Cinematography";
import Relationship from "./Relationship";

const Home = () => {
  return (
    <div className="home__div">
      <Intro />
      <Cinematography />
      <Relationship />
    </div>
  );
};

export default Home;
