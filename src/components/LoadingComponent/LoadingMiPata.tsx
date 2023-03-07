import Image from "next/image";
import React from "react";
import styles from "../../styles/LoadingMiPata/LoadingMiPata.module.scss";

const LoadingMiPata = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          alt="Logo de miPata"
          src="/images/logoBlanco.png"
          width={125}
          height={125}
          className={`animate__animated animate__fadeIn`}
        />
      </div>
    </div>
  );
};

export default LoadingMiPata;
