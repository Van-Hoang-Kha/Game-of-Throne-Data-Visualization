import React from "react";
import GOTVideo from "../video/GOT.mp4";
import GOTWebM from "../video/GOT.webm";
import DrogonCanvas from "./Three/DrogonCanvas";

const Personality = () => {
  return (
    <div>
      hello
      <DrogonCanvas />
      {/* <div className="home__div__video">
        <video
          className="video"
          width="65%"
          autoPlay
          muted
          loop
          playsInline
          poster="https://giphy.com/gifs/58F2bDDdEce4LCjx8t/html5"
        >
          <source src={GOTVideo} type="video/mp4" />
          <source src={GOTWebM} type="video/mp4" />
        </video>
      </div> */}
    </div>
  );
};

export default Personality;
