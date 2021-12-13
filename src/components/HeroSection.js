import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import vimeo from "../videos/video-2.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video loop muted autoPlay playsInline src={vimeo} />
      <h1>ADVENTURE AWAITS</h1>
      <p>What Are You Waiting For?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
