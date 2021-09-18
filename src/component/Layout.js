import Footer from "./Footer";
import Header from "./Header";
import styles from "../../styles/scss/Theme.module.scss";
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
