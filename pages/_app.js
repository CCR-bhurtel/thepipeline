import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="content_outer flex justify-center">
        <div className="content_innner max-w-[300px]">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
export default MyApp;
