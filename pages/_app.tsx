import "antd/dist/antd.css";
import "../styles/global.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";
import Layout from "../layouts/default";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
