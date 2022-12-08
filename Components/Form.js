import React, { useEffect } from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    state: {
    }
  }
  componentDidMount() {
    const frame = document.getElementById("myiframe");
  }

  render() {
    return (
      <div>
        <form className="flex items-end justify-center mt-4">
          <iframe
            src="https://embeds.beehiiv.com/80bf0c42-dc7f-49cc-a7ae-451c6dc72855?slim=true"
            data-test-id="beehiiv-embed"
            frameBorder="0"
            id="myiframe"
            scrolling="no"
            style={{
              margin: 0,
              borderRadius: "0px !important",
              backgroundColor: "transparent",
            }}
          ></iframe>
          {/* <input
        type="text"
        className="border-b-2 border-Blue outline-0 border-x-0 borter-t-0 placeholder:text-Blue font-light max-w-[50%] "
        placeholder="email"
      />
      <div className="button group cursor-pointer">
        <div
          type="submit"
          className="border-0  shadow-0 outline-0 text-[0.9rem] font-medium ml-2 group-hover:font-normal"
        >
          {buttontext}
        </div>
        <div className="w-full h-[2px]  bg-Blue ml-2"></div>
      </div> */}
        </form>
      </div>
    );
  }
}

export default Form;

// function Form({ buttontext }) {
//   return (
//     <form className="flex items-end justify-center mt-4">
//       <iframe
//         src="https://embeds.beehiiv.com/80bf0c42-dc7f-49cc-a7ae-451c6dc72855?slim=true"
//         data-test-id="beehiiv-embed"
//         frameborder="0"
//         id="myiframe"
//         scrolling="no"
//         style={{
//           margin: 0,
//           borderRadius: "0px !important",
//           backgroundColor: "transparent",
//         }}
//       ></iframe>
//       {/* <input
//         type="text"
//         className="border-b-2 border-Blue outline-0 border-x-0 borter-t-0 placeholder:text-Blue font-light max-w-[50%] "
//         placeholder="email"
//       />
//       <div className="button group cursor-pointer">
//         <div
//           type="submit"
//           className="border-0  shadow-0 outline-0 text-[0.9rem] font-medium ml-2 group-hover:font-normal"
//         >
//           {buttontext}
//         </div>
//         <div className="w-full h-[2px]  bg-Blue ml-2"></div>
//       </div> */}
//     </form>
//   );
// }

// export default Form;
