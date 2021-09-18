import Layout from "../component/Layout";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // <div className={styles.}>
    <Layout>
      <Component {...pageProps} />
    </Layout>

    // </div>
  );
}

export default MyApp;
