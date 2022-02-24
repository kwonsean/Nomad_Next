import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
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
