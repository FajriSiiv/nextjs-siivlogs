import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import MainPage from "./main";
import SocialGrid from "./socialGrid";
import TextSec from "./textsec";

export default function Home() {
  return (
    <div className={styles.container__index}>
      <MainPage />
      <TextSec />
      <SocialGrid />
    </div>
  );
}
