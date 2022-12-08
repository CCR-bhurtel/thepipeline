import React from "react";
import BoldText from "./BoldText";
import SmallText from "./SmallText";

function ListItems({ title, items }) {
  return (
    <div className="mt-8 md:mt-[5rem] flex  md:justify-center flex-col md:items-center">
      <BoldText text={title} />
      <div className="listitems mt-4">
        {items.map((item, index) => {
          return (
            <div key={index} className="mt-2">
              <SmallText text={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListItems;
