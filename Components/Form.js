import React from "react";

function Form({ buttontext }) {
  return (
    <form className="flex items-end justify-center mt-4">
      <input
        type="text"
        className="border-b-2 border-Blue outline-0 border-x-0 borter-t-0 placeholder:text-Blue font-light max-w-[50%] "
        placeholder="email"
      />
      <div className="button group cursor-pointer">
        <div
          type="submit"
          className="border-0 outline-0 text-[0.8rem] font-medium ml-2 group-hover:font-normal"
        >
          {buttontext}
        </div>
        <div className="w-full h-[2px]  bg-Blue ml-2"></div>
      </div>
    </form>
  );
}

export default Form;
