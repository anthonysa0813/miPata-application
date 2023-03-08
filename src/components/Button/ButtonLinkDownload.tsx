import React from "react";
import styles from "../../styles/Buttons/ButtonLinkDownload.module.scss";
import logoAppStore from "../../../public/images/logo_apple_blanco.png";
import logoPlayStore from "../../../public/images/play_store_logo.png";
import Image from "next/image";

interface Prop {
  url?: string;
  title?: string;
  platform?: string;
}

const ButtonLinkDownload = ({ url, title, platform }: Prop) => {
  return (
    <a
      className={styles.buttonContainer}
      href={
        platform === "android"
          ? "https://play.google.com/store/apps/details?id=pe.mipata.mipata&hl=es"
          : "https://apps.apple.com/pa/app/mi-pata-mascotas/id1534249237"
      }
      target="_blank"
    >
      <div className={styles.imageContainer}>
        {platform === "android" && (
          <Image
            height={30}
            width={50}
            alt={`logo de ${platform}`}
            src={logoPlayStore}
          />
        )}
        {platform === "ios" && (
          <Image
            height={30}
            width={50}
            alt={`logo de ${platform}`}
            src={logoAppStore}
          />
        )}
      </div>
      <div className={styles.textContent}>
        <p className={styles.textLight}>Download on the</p>
        <p className={styles.textTitle}>
          {platform === "android" ? "Google Play" : "App Store"}
        </p>
      </div>
    </a>
  );
};

export default ButtonLinkDownload;
