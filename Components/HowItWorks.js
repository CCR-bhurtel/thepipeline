import React from "react";
import mariofirst from "../Assets/mario_first.png";
import mariosecond from "../Assets/mario_second.png";
import mariothird from "../Assets/mario_third.png";
import BoldText from "./BoldText";

function HowItWorks() {
  return (
    <div className="mt-12 md:mt-[10rem]">
      <BoldText text="How it works- #theplug 🔌" />
      <div className="w-full flex items-center justify-center">
        <div className="flex mario-items justify-center flex-col mt-4">
          <div className="mario_item flex  justify-center flex-col ">
            <div className="title flex flex-row text-[13px]  ">
              {" "}
              <span className="font-medium  text-[15px]">1-</span>
              <p className="ml-2 font-regular text-start md:text-[0.9rem]">
                Find the next big internet startup ideas before the hype 💰{" "}
              </p>
            </div>

            <img className="mt-2" src={mariofirst.src} alt="" />
          </div>
          <div className="mario_item flex  justify-center flex-col ">
            <div className="title flex flex-row text-[13px] self-start ">
              {" "}
              <span className="font-medium  text-[15px]">2-</span>
              <p className="ml-2 font-regular md:text-[0.9rem]">
                Being fast = <br className="md:hidden" />
                grow fast + high profit 🚀
              </p>
            </div>

            <img className="mt-2" src={mariosecond.src} alt="" />
          </div>
          <div className="mario_item flex  justify-center flex-col ">
            <div className="title flex flex-row text-[13px]  ">
              {" "}
              <span className="font-medium  text-[15px]">3-</span>
              <p className="ml-2 font-regular md:text-[0.9rem]">
                Become a badass internet boss 😎
              </p>
            </div>

            <img className="mt-[-10px]" src={mariothird.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
