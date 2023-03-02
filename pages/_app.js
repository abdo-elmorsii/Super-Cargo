import Layout from "@/Layout/Layout";
import "@/styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import { ProvideContext } from "@/context/context";
// import Layout from "../layout/Index";

export default function App({ Component, pageProps }) {
  const Router = useRouter();
  return (
    <ProvideContext>
      {Router.pathname === "/login"||Router.pathname === "/admin" ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ProvideContext>
  );
}
