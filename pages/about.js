import React from "react";
import AboutParagraph from "../Components/AboutParagraph";
import Form from "../Components/Form";

function About() {
  return (
    <div className="about-content">
      <div className="about-text font-regular mt-4">
        <p className="usm:text-[1.1rem] lg:text-[1.2rem]">
          👋 What’s up... im Gus
        </p>
        <AboutParagraph text={"I make websites when im bored."} />
        <AboutParagraph
          text={
            "my version of fun is lurking online for the latest internet toys and tools."
          }
        />
        <AboutParagraph text={"why?"} />
        <AboutParagraph
          text={"cuz I like making money online building new things."}
        />
        <AboutParagraph
          text={
            "I like the idea of making something from nothing. 📈 (not literally, but pretty close)"
          }
        />
        <AboutParagraph
          text={
            "I hunt 24/7 for insider signals and trends on booming internet business ideas, then do some digging and build cool stuff that makes money."
          }
        />
        <AboutParagraph
          text={
            "im creating a pipeline for juicy new business ideas everyday for ppl who wanna make sh*t happen. It’s like an easier to follow ikea manual, but for business ideas."
          }
        />
        <AboutParagraph
          text={"its an insider trading plug but for business ideas."}
        />
        <AboutParagraph text={"tap in if you wanna get plugged today. 🔌 "} />
      </div>
      <div className="form mt-12 mb-[7rem]">
        <Form buttontext={"tap in 💰"} />
      </div>
    </div>
  );
}

export default About;
