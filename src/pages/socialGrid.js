import styles from "../../styles/scss/socialgrid.module.scss";
import { SiTwitter } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import DataFrom from "../../src/pages/api/hello";

const SocialGrid = ({ text }) => {
  return (
    <div className={styles.container__socialGrid}>
      <section className={styles.itemGrid}>
        <div className={styles.iconUp}>
          <SiTwitter />
          <h5 className={styles.name}>@anyname</h5>
        </div>
        <h3 className={styles.text}>
          Hari ini,Tepat 2 tahun sudah kita lewati pandemi ini,banyak keringat dan tenaga yang telah
          kita kerahkan.
          <br />
          Jangan menyerah Indonesia-ku.
        </h3>
        <p className={styles.waktu}>3 Jam yang lalu</p>
      </section>
      <section className={styles.itemGrid}>
        <div className={styles.iconUp}>
          <FaFacebookF />
          <h5 className={styles.name}>@anyname</h5>
        </div>
        <h3 className={styles.text}>Jangan lupa vaksinasi diri</h3>
        <p className={styles.waktu}>3 Hari yang lalu</p>
      </section>
      <section className={styles.itemGrid}>
        <div className={styles.iconUp}>
          <AiFillInstagram />
          <h5 className={styles.name}>@anyname</h5>
        </div>
        <h3 className={styles.text}>Jangan menyerah dan tetap semangat</h3>
        <p className={styles.waktu}>5 Jam yang lalu</p>
      </section>
      <section className={styles.itemGrid}>
        <div className={styles.iconUp}>
          <SiTwitter />
          <h5 className={styles.name}>@anyname</h5>
        </div>
        <h3 className={styles.text}>
          Hari ini,Tepat 2 tahun sudah kita lewati pandemi ini,banyak keringat dan tenaga yang telah
          kita kerahkan.
          <br />
          Jangan menyerah Indonesia-ku.
        </h3>
        <p className={styles.waktu}>3 Jam yang lalu</p>
      </section>
    </div>
  );
};

export default SocialGrid;
