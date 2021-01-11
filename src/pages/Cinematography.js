import React from "react";
import GOTVideo from "../video/GOT.mp4";
import GOTWebM from "../video/GOT.webm";
import Smoke1 from "../images/smoke1.png";
import Smoke2 from "../images/smoke4.png";
import Dany from "../images/Dany.png";
import ReactTooltip from "react-tooltip";
import "./Cinematography.css";

const Cinematography = () => {
  return (
    <div className="cinema__div" id="personality">
      <div className="cinema__contents">
        <div className="cinema__summary__title">What happened to season 8?</div>
        <div className="cinema__summary__detail">
          The final season shows the two major conflicts: the{" "}
          <a
            data-tip
            data-for="greatWar"
            className="cinema__a"
            href="https://gameofthrones.fandom.com/wiki/Great_War"
          >
            Great War
          </a>{" "}
          <ReactTooltip place="bottom" id="greatWar">
            <span>
              <div>
                The war between the living and the dead. It was the second war
                waged by the White Walkers against humanity.
              </div>
            </span>
          </ReactTooltip>
          against the Army of the Dead, and the Last War for control of the Iron
          Throne. In the first half of the season, Jon, Dany, and many of the
          main characters converge at Winterfell to face the Dead. The second
          half of the season resumes the war for the throne as Daenerys suffers
          losses until she finally assaults King's Landing upon Drogon, her last
          dragon.{" "}
          <a
            data-tip
            data-for="sourceLink"
            className="cinema__a"
            href="https://en.wikipedia.org/wiki/Game_of_Thrones_(season_8)"
            target="_blank"
          >
            [Source]
          </a>
          <ReactTooltip place="bottom" id="sourceLink" type="info">
            <span>Wikipedia Game of Throne Season 8</span>
          </ReactTooltip>
        </div>
        <div className="cinema__div__video">
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
        </div>
      </div>
      <img className="cinema__dany" src={Dany} alt="" />
      <div className="cinema__smokes">
        <div className="cinema__smoke__one">
          <img className="smoke__img" src={Smoke1} alt="" />
        </div>

        <div className="cinema__smoke__two">
          <img className="smoke__img2" src={Smoke2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cinematography;
