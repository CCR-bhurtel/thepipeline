import React from "react";

function SmallText({ text }) {
  return (
    <p className="font-regular text-[0.78rem] tracking-tighter  lsm:text-[0.95rem]">
      {text}
    </p>
  );
}

export default SmallText;
