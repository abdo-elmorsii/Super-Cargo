import Layout from "@/Layout/Layout";
import "@/styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import { ProvideContext } from "@/context/context";
import { ToastContainer } from "react-toastify";
// import Layout from "../layout/Index";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

export default function App({ Component, pageProps }) {
  const Router = useRouter();
  return (
    <ProvideContext>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {Router.pathname === "/login" || Router.pathname === "/admin" ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ProvideContext>
  );
}
