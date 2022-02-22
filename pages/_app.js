import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <NavBar2 />
      <Component {...pageProps} />
      <style jsx global>
        {`
          a {
            font-size: 20px;
            text-decoration: none;
          }
          a:first-child {
            margin-right: 10px;
          }
        `}
      </style>
    </>
  );
}
