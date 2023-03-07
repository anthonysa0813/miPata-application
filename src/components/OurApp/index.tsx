import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative, Autoplay } from "swiper";
import "swiper/css";
import styles from "../../styles/OurApp/OurApp.module.scss";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import Image from "next/image";

const OurAppComponent = () => {
  return (
    <div className={styles.OurAppContainer}>
      <div className={styles.textInfo}>
        <h2>Nuestra Aplicación </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          consequuntur? Facilis velit recusandae illo explicabo ut, ratione a
          ipsam unde labore error vitae nobis eaque quos iure quam magni
          veritatis.
        </p>
      </div>
      <div className={styles.gridItem}>
        <Swiper
          effect={"creative"}
          grabCursor={true}
          style={{ width: 250 }}
          slidePrevClass={"2"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[Autoplay, EffectCreative, Pagination]}
          // autoplay={{ disableOnInteraction: true }}
          pagination={true}
          // modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.imageContainer}>
              <Image
                src="/images/app1.png"
                alt="Logo de Mi pata"
                width={250}
                height={500}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imageContainer}>
              <Image
                src="/images/app2.png"
                alt="Logo de Mi pata"
                width={250}
                height={500}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imageContainer}>
              <Image
                src="/images/app3.png"
                alt="Logo de Mi pata"
                width={250}
                height={500}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imageContainer}>
              <Image
                src="/images/app4.png"
                alt="Logo de Mi pata"
                width={250}
                height={500}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurAppComponent;
