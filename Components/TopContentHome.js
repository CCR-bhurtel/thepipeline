import React from "react";
import BoldText from "./BoldText";
import SmallText from "./SmallText";
import Form from "./Form";
function TopContentHome() {
  return (
    <div>
      <div className="nav_text_content text-center md:mt-[2rem]">
        <h2 className="font-medium text-[1.2rem] mt-4 usm:text-[1.3rem]">
          ๐จ Shiny object syndrome warning ๐จ
        </h2>
        <div className="toptextsec mt-4 md:mt-[2rem]">
          <BoldText
            text={
              "The next big internet company ideas --> to start before the hype ๐ "
            }
          />
          <div className="mt-4">
            <SmallText
              text={
                "๐งจ Get first dibs on booming startup ideas to build, proven to work"
              }
            />
          </div>
        </div>
        <div className="form md:mt-[4rem]">
          <Form buttontext={"get free sauce"} />
        </div>
      </div>
    </div>
  );
}

export default TopContentHome;
