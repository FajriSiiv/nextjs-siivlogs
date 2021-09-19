import styles from "../../styles/scss/footer.module.scss";
import Link from "next/link";
import { FaFacebookF, FaGit } from "react-icons/fa";
import { FaTwitter, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.container__footer}>
      <h1>SiivLogs</h1>
      <div className={styles.link_footer}>
        <Link href="/">Who We Are</Link>
        <Link href="/">News</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className={styles.social_media}>
        <Link href="/">
          <FaFacebookF />
        </Link>
        <Link href="/">
          <FaTwitter />
        </Link>
        <Link href="/">
          <FaGithub />
        </Link>
      </div>
      <div className={styles.button_link}>
        <button className={styles.btn}>Get Involed</button>
        <button className={styles.btn}>Contribute</button>
      </div>
    </div>
  );
};

export default Footer;
