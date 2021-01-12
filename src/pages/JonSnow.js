import React from "react";
// import HeatMap from "./Heatmap";
import Jon from "../images/Jon.png";
import Three from "./Three/DrogonCanvas";
import ReactTooltip from "react-tooltip";
import JonSnowVideo from "../video/JonSnowTrimmed.mp4";
import JonSnowWebm from "../video/JonSnowTrimmed.webm";
import "./JonSnow.css";

const JonSnow = () => {
  return (
    <div className="jonSnow__div">
      <div className="jonSnow__container">
        <div className="jonSnow__three__container">
          <Three className="jonSnow__three" />
        </div>
        <div className="jonSnow__div__content">
          <div className="jonSnow__title">What happend to Jon Snow?</div>
          <div className="jonSnow__detail">
            Jon ended up as a prisoner, held by the{" "}
            <a
              href="https://gameofthrones.fandom.com/wiki/Unsullied"
              alt=""
              target="_blank"
              data-tip
              data-for="unsullied"
              className="jonSnow__highlight"
            >
              Unsullied
            </a>{" "}
            <ReactTooltip place="bottom" id="unsullied">
              <span>
                <div>
                  The Unsullied (Astapori Valyrian: Dovoghedhi) are elite
                  warrior-eunuchs bred and trained in Astapor.
                </div>
              </span>
            </ReactTooltip>
            , because he killed Daenerys. Even though he seemed to be largely
            forgiven for his actions by the various powers of Westeros, save for{" "}
            <a
              href="https://gameofthrones.fandom.com/wiki/Yara_Greyjoy"
              alt=""
              target="_blank"
              data-tip
              data-for="yara"
              className="jonSnow__highlight"
            >
              Yara Greyjoy
            </a>{" "}
            <ReactTooltip place="bottom" id="yara">
              <span>
                <div>
                  Lady Yara Greyjoy is the Lady of the Iron Islands and Lady
                  Reaper of Pyke.
                </div>
              </span>
            </ReactTooltip>
            and the Unsullied, the Unsullied would not agree to his release.
          </div>
        </div>{" "}
      </div>

      <div className="jonSnow__div__video">
        <video
          className="video"
          width="65%"
          autoPlay
          muted
          loop
          playsInline
          poster="https://giphy.com/gifs/58F2bDDdEce4LCjx8t/html5"
        >
          <source src={JonSnowVideo} type="video/mp4" />
          <source src={JonSnowWebm} type="video/mp4" />
        </video>
      </div>
      <img className="jonSnow__jon" src={Jon} alt="" />
    </div>
  );
};

export default JonSnow;
