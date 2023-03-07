import React from "react";
import styles from "../../styles/ServicesMiPata/ServicesMiPata.module.scss";
import { MdPets, MdOutlineRecommend, MdPlace } from "react-icons/md";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";

const ServicesMiPata = () => {
  return (
    <>
      <div className="wrapper">
        <div className={styles.services}>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <div
              className={`${styles.servicesItem} animate__animated animate__fadeInTopLeft`}
            >
              <div className={styles.imageContainer}>
                <i className="icon-gps"></i>
              </div>
              <div className={styles.servicesInfo}>
                <h3>Rastrea a tu mascota</h3>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInDown">
            <div className={styles.servicesItem}>
              <div className={styles.imageContainer}>
                <i className="icon-facial_recognition"></i>
              </div>
              <div className={styles.servicesInfo}>
                <h3>Reconocimiento facial</h3>
              </div>
            </div>{" "}
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <div className={styles.servicesItem}>
              <div className={styles.imageContainer}>
                <i className="icon-community"></i>
              </div>
              <div className={styles.servicesInfo}>
                <h3>Conéctate con otros dueños</h3>
              </div>
            </div>{" "}
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <div className={styles.servicesItem}>
              <div className={styles.imageContainer}>
                <i className="icon-calendar"></i>
              </div>
              <div className={styles.servicesInfo}>
                <h3>Calendario y recordatorios</h3>
              </div>
            </div>{" "}
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInUp">
            <div className={styles.servicesItem}>
              <div className={styles.imageContainer}>
                <i className="icon-ranking"></i>
              </div>
              <div className={styles.servicesInfo}>
                <h3>Recomendaciones de lugares petfriendly</h3>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <div className={styles.servicesItem}>
              <div className={styles.imageContainer}>
                <i className="icon-marketplace"></i>
              </div>
              <div className={styles.servicesInfo}>
                <h3>Market place y promociones</h3>
              </div>
            </div>{" "}
          </AnimationOnScroll>
        </div>
      </div>
    </>
  );
};

export default ServicesMiPata;
