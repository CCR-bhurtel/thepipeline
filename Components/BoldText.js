import React from "react";

function BoldText({ text }) {
  return (
    <h3 className="font-medium text-[0.9rem] tracking-tight text-center leading-5 usm:text-[1.05rem]">
      {text}
    </h3>
  );
}

export default BoldText;
