import Image from "next/image";
import React from "react";
import styles from "../../styles/Hero/Hero3.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import ButtonLinkDownload from "../Button/ButtonLinkDownload";

const Hero3 = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.hero}>
          <div className={`${styles.imageContent} animate__animated `}>
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
                    src="/images/pets/recoc_facial.png"
                    alt="Logo de Mi pata"
                    width={250}
                    height={500}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/pets/adopcion.png"
                    alt="Logo de Mi pata"
                    width={250}
                    height={500}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/pets/ciudad.png"
                    alt="Logo de Mi pata"
                    width={250}
                    height={500}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/pets/home.png"
                    alt="Logo de Mi pata"
                    width={250}
                    height={500}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div
            className={`${styles.infoHero} animate__animated  animate__bounceInRight`}
          >
            <div className={styles.wrapper}>
              <AnimationOnScroll
                initiallyVisible
                animateIn="animate__fadeInRightBig"
              >
                <h1>
                  La comunidad más grande de mascotas y quienes las amamos.
                </h1>

                <div className={styles.buttonSocials}>
                  <ul>
                    <li>
                      <ButtonLinkDownload platform={"android"} />
                    </li>
                    <li>
                      <ButtonLinkDownload platform={"ios"} />
                    </li>
                  </ul>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero3;
