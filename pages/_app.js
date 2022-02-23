import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  let title = router.pathname.slice(1).toUpperCase();
  if (!title) title = "HOME";
  return (
    <>
      <Seo title={title} />
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
