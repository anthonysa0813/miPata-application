import React from "react";
import styles from "../../styles/Testimonials/Testimonials.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative, Autoplay } from "swiper";
import "swiper/css";
import Image from "next/image";
import { Navigation } from "swiper";

const Testimonials = () => {
  return (
    <div className={`${styles.testimonialsSection} bg-fixed  hover:bg-fixed`}>
      <div className="wrapper">
        <div className={`${styles.testimonialsGrid} bg-fixed`}>
          <h2>Testimonios</h2>
          <div className={`${styles.imageContent} animate__animated `}>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className={styles.cardTestimonials}>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/images/testimonials/persona1.png"
                      alt="Imagen de la persona 2"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className={styles.text}>
                    <p className="text-red-600">
                      &quot;Mi perro se escapó de la casa y pensé que lo había
                      perdido para siempre. Gracias a miPata, pude publicar su
                      foto y ubicación en tiempo real, y alguien lo encontró y
                      lo devolvió a casa sano y salvo.&quot;
                    </p>
                    <p>Gabriel</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cardTestimonials}>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/images/testimonials/persona2.png"
                      alt="Imagen de la persona 2"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className={styles.text}>
                    <p>
                      &quot;He estado usando esta app durante un tiempo y ha
                      sido un gran recurso para el cuidado de mi gato. He
                      recibido consejos de nutrición y cuidado de mascotas que
                      realmente han mejorado su calidad de vida.&quot;
                    </p>
                    <p>Lucía</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cardTestimonials}>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/images/testimonials/persona3.png"
                      alt="Imagen de la persona 3"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className={styles.text}>
                    <p>
                      &quot;Soy un voluntario en un refugio de animales y la app
                      ha sido muy útil para encontrar hogares para nuestros
                      perros y gatos. Hemos recibido más solicitudes de adopción
                      y encontrado más hogares para animales necesitados.&quot;
                    </p>
                    <p>Luis Alberto</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
