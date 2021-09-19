import styles from "../../styles/scss/textsec.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);
const TextSec = () => {
  return (
    <div className={styles.text_sec}>
      <Swiper pagination={true} className={styles.swiper}>
        <SwiperSlide className={styles.swiperSlide}>
          <blockquote>
            <cite>
              <q>
                Di keadaan sekarang ini kita harus bekerja sama. <br /> Karena kita tidak bisa hidup
                sendirian.
              </q>
            </cite>
          </blockquote>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <blockquote>
            <cite>
              <q>
                Lorem ipsum dolor sit amet consectetur dignissimos. <br /> Lorem, ipsum dolor.
              </q>
            </cite>
          </blockquote>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <blockquote>
            <cite>
              <q>
                Lorem ipsum dolor sit amet consectetur dignissimos. <br /> Lorem, ipsum dolor.
              </q>
            </cite>
          </blockquote>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <blockquote>
            <cite>
              <q>
                Lorem ipsum dolor sit amet consectetur dignissimos. <br /> Lorem, ipsum dolor.
              </q>
            </cite>
          </blockquote>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <blockquote>
            <cite>
              <q>
                Lorem ipsum dolor sit amet consectetur dignissimos. <br /> Lorem, ipsum dolor.
              </q>
            </cite>
          </blockquote>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TextSec;
{
  /* ; */
}
