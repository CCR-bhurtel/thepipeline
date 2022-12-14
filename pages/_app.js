import Navbar from "../Components/Navbar";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />

      <div className="content_outer flex justify-center">
        <div className="content_innner max-w-[290px] lsm:max-w-[350px] usm:max-w-[390px] md:max-w-[660px]">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
export default MyApp;
