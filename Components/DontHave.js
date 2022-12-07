import React from "react";
import BoldText from "./BoldText";
import SmallText from "./SmallText";

function DontHave() {
  const items = [
    "time to plan + research",
    "the right idea on what,how,and where to start ",
  ];
  return (
    <div className="mt-8 md:flex md:flex-col md:items-center md:mt-[4rem]">
      <BoldText text={"most of you don't have..."} />
      <ul className="listitems ml-6" style={{ listStyleType: "disc" }}>
        {items.map((item, i) => (
          <li key={i}>
            <SmallText text={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DontHave;
