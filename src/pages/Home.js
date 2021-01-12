import React from "react";
import Intro from "./Intro";
import SeasonRecap from "./SeasonRecap";
import JonSnow from "./JonSnow";
import { Parallax } from "react-spring/renderprops-addons";
import ParallaxEffect from "../components/Parallax/Parallax";

const Home = () => {
  return (
    <div>
      <Parallax pages={3}>
        <div className="home__div">
          <div id="intro">
            <Intro />
          </div>
          <div id="seasonrecap">
            <SeasonRecap />
          </div>
          <div id="jonsnow">
            <JonSnow />
          </div>
          <ParallaxEffect />
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
