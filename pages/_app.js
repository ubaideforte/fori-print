import "../styles/globals.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../src/components/layout/layout";

// Importing MIE.CSS - Set font size globally ¯\_(ツ)_/¯
import "../styles/mie.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
