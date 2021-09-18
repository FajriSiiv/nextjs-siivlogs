import styles from "../../styles/scss/main.module.scss";
const MainPage = () => {
  return (
    <div className={styles.container__main}>
      <div className={styles.container__grid}>
        <section className={styles.text_main}>
          <h1>
            bantu <span>mencegah</span>
            <br />
            dan <span>sehatkan</span> <br />
            indonesia.
          </h1>
          <h1>
            <span>indonesia</span> pasti bisa
          </h1>
          <div className={styles.edit_button}>
            <button className={styles.btn}>Contribute</button>
            <button className={styles.btn}>Donate</button>
          </div>
        </section>
        <section className={styles.main__2}></section>
        <section className={styles.main__3}>
          <h2>
            Dapatkan Update <br />
            di Email
          </h2>
          <div className={styles.container_input}>
            <div className={styles.dua_input}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="text" placeholder="email@address.com" />
            <input type="text" placeholder="ZIP Code" />

            <button className={styles.btn}>Dapatkan Update</button>
          </div>
        </section>
        <section className={styles.main__4}>
          <h1>
            Pendaftar adalah <br />
            kekuatan kita semua.
          </h1>
          <p>
            Ayo jangan sampai ketinggalan
            <br />
            update dan daftar untuk <br />
            untuk Indonesia melawan Covid-19
          </p>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
