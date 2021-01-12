import React from "react";
import SnowParticle from "../../images/snow.png";
import ParticleOne from "../../images/s5-parallax-1.png";
import ParticleTwo from "../../images/s5-parallax-2.png";
import ParticleThree from "../../images/s5-parallax-3.png";
import ParticleFour from "../../images/s5-parallax-4.png";
import ParticleFive from "../../images/s5-parallax-6.png";
import LeafUpOne from "../../images/s3-parallax-1.png";
import LeafUpTwo from "../../images/s3-parallax-2.png";
import LeafDown from "../../images/s3-parallax-3.png";
import LeafBlur from "../../images/s3-parallax-6.png";
import { ParallaxLayer } from "react-spring/renderprops-addons";

const ParallaxEffect = () => {
  return (
    <>
      {/*parallax for dany page */}
      <ParallaxLayer offset={-0.3} speed={0.9}>
        <img
          style={{
            display: "block",
            width: "10%",
            marginLeft: "13%",
            opacity: 0.7,
          }}
          src={LeafUpOne}
          alt=""
        />

        <img
          style={{
            display: "block",
            width: "10%",
            marginLeft: "1%",
            opacity: 0.7,
          }}
          src={LeafBlur}
          alt=""
        />
        <img
          style={{
            display: "block",
            width: "10%",
            marginLeft: "0.4%",
            opacity: 0.7,
          }}
          src={LeafDown}
          alt=""
        />
      </ParallaxLayer>

      <ParallaxLayer offset={-0.3} speed={0.8}>
        <img
          style={{
            display: "block",
            width: "10%",
            marginLeft: "67%",
            opacity: 0.7,
          }}
          src={LeafUpTwo}
          alt=""
        />

        <img
          style={{
            display: "block",
            width: "10%",
            marginLeft: "77%",
            opacity: 0.7,
          }}
          src={LeafBlur}
          alt=""
        />
        <img
          style={{
            display: "block",
            width: "2%",
            marginLeft: "89%",
            opacity: 0.7,
            transform: "skewY(120deg)",
          }}
          src={LeafDown}
          alt=""
        />
        <img
          style={{
            display: "block",
            width: "10%",
            marginLeft: "64%",
            opacity: 0.7,
          }}
          src={LeafDown}
          alt=""
        />
      </ParallaxLayer>

      {/*parallax for jon page */}
      <ParallaxLayer offset={0.1} speed={0.55}>
        <img
          style={{
            display: "block",
            width: "20%",
            marginLeft: "1%",
            opacity: 0.7,
          }}
          src={ParticleTwo}
          alt=""
        />
        <img
          style={{
            display: "block",
            width: "4%",
            marginLeft: "5%",
            opacity: 0.7,
          }}
          src={SnowParticle}
          alt=""
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.1} speed={0.25}>
        <img
          style={{
            display: "block",
            width: "2%",
            marginLeft: "93%",
            opacity: 0.7,
          }}
          src={SnowParticle}
          alt=""
        />
        <img
          style={{
            display: "block",
            width: "2%",
            marginLeft: "90%",
            opacity: 0.7,
          }}
          src={ParticleTwo}
          alt=""
        />{" "}
        <img
          style={{ display: "block", width: "30%", marginLeft: "86%" }}
          src={ParticleThree}
          alt=""
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.2} speed={0.35}>
        <img
          style={{ display: "block", width: "5%", marginLeft: "20%" }}
          src={ParticleOne}
          alt=""
        />{" "}
        <img
          style={{ display: "block", width: "2%", marginLeft: "12%" }}
          src={SnowParticle}
          alt=""
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <img
          style={{ display: "block", width: "10%", marginLeft: "50%" }}
          src={ParticleThree}
          alt=""
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.15} speed={0.25}>
        <img
          style={{ display: "block", width: "2%", marginLeft: "6%" }}
          src={ParticleOne}
          alt=""
        />
        <img
          style={{
            display: "block",
            width: "10%",
            marginLeft: "70%",
            zIndex: 9,
          }}
          src={ParticleFour}
          alt=""
        />{" "}
        <img
          style={{ display: "block", width: "3%", marginLeft: "4%" }}
          src={SnowParticle}
          alt=""
        />{" "}
        <img
          style={{ display: "block", width: "2%", marginLeft: "2%" }}
          src={ParticleFive}
          alt=""
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.1} speed={0.45}>
        <img src={SnowParticle} alt="" />
      </ParallaxLayer>
    </>
  );
};

export default ParallaxEffect;
