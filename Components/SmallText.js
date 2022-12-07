import React from "react";

function SmallText({ text }) {
  return (
    <p className="font-regular text-[0.78rem] tracking-tight usm:text-[0.9rem]">
      {text}
    </p>
  );
}

export default SmallText;
