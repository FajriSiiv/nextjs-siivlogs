import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/scss/Theme.module.scss";
import Facebook from "../images/Facebook.svg";
import Twitter from "../images/Twitter.svg";
import Github from "../images/Github.svg";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
const Header = () => {
  const [state, setState] = useState("klik");

  function handleClick(e) {
    e.preventDefault();
    if (state == "klik") {
      setState("noKlik");
    } else {
      setState("klik");
    }
  }
  return (
    <div className={styles.container__header}>
      <h1 className={styles.judul}>
        <Link href="/">Siivlogs</Link>
      </h1>
      <section
        className={
          state == "noKlik"
            ? `${styles.container__all} + ${styles.slide_menubar}`
            : `${styles.container__all}`
        }
      >
        <ul className={styles.link__to}>
          <li>
            <Link href="/">Who We Are</Link>
          </li>
          <li>
            <Link href="/">News</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <ul className={styles.social_icon}>
          <Image src={Facebook} />
          <Image src={Twitter} />
          <Image src={Github} />
        </ul>
        <div className={styles.button_link}>
          <button className={styles.btn}>Get Involed</button>
          <button className={styles.btn}>Contribute</button>
        </div>
        <div className={styles.closeMenu}>
          <MdClose onClick={handleClick} />
        </div>
      </section>
      <div className={styles.icon__menu}>
        <MdMenu className={styles.menubar} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Header;
