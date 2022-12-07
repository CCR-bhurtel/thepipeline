import Navbar from "../Components/Navbar";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />

      <div className="content_outer flex justify-center">
        <div className="content_innner max-w-[290px] usm:max-w-[350px] md:max-w-[660px]">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
export default MyApp;
