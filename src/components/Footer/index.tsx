import Image from "next/image";
import React from "react";
import styles from "../../styles/Footer/Footer.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BiBook } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["custom-shape-divider-top"]}>
        <div className="wrapper">
          <div className={styles.footerContainer}>
            <div className={styles.socials}>
              <div className={styles.logoSection}>
                <Image
                  src="/images/logo-blanco.png"
                  alt="Logo de Mi pata"
                  width={50}
                  height={50}
                />
              </div>
              <div className="socialsMedia">
                <div className={styles.boxSocial}>
                  <div className={styles.box}>
                    <FaFacebookF />
                  </div>
                  <div className={styles.box}>
                    <AiFillInstagram />
                  </div>
                  <div className={styles.box}>
                    <AiFillYoutube />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contacts}>
              <div className={styles.titleBox}>
                <p>CONTACT</p>
              </div>
              <p className={styles.contactItem}>
                <MdEmail />
                contacto@mipata.pe
              </p>
              <div className={styles.titleBox}>
                <p>QUICK LINKS </p>
              </div>
              <p className={styles.contactItem}>
                <BiBook />
                Términos y Condiciones
              </p>
            </div>
            <div className={styles.subscribe}>
              <div className={styles.titleBox}>
                <p>NEWSLETTER</p>
              </div>
              <form className={styles.form}>
                <input type="email" />
                <button type="button">SUSCRÍBETE</button>
              </form>
            </div>
          </div>
          <div className={styles.poweredContainer}>
            <p>Powered by: </p>
            <Image
              src="/images/globant.png"
              alt="Logo de Globant"
              width={200}
              height={50}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
