import React from "react";

function BoldText({ text }) {
  return (
    <h3 className="font-medium text-[0.9rem] lsm:text-[1.05rem] tracking-tight text-center leading-5 usm:text-[1.2rem]">
      {text}
    </h3>
  );
}

export default BoldText;
