import Layout from "@/Layout/Layout";
import "@/styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// import Layout from "../layout/Index";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
