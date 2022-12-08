import React from "react";
import BoldText from "./BoldText";
import SmallText from "./SmallText";

function FinalHomeText() {
  return (
    <div className="mt-4 lsm:mt-[2rem] md:mt-[4rem]">
      <div className="leading-relaxed">
        <BoldText
          text={"Wanna see ideas that you can start to make sh*t happen today?"}
        />
      </div>
      <div className="mt-2 text-center leading-relaxed">
        <SmallText
          text={
            "Tap in to my free newsletter and get them handed on a silver platter 🍽️"
          }
        />
      </div>
    </div>
  );
}

export default FinalHomeText;
