import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import MainPage from "./main";

export default function Home() {
  return (
    <div className={styles.container__index}>
      <MainPage />
    </div>
  );
}
