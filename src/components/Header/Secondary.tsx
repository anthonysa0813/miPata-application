import React, { useCallback, useEffect, useState } from "react";
import styles from "../../styles/Header/Header2.module.scss";
import { isMacOs, isIOS, osName } from "react-device-detect";
import Link from "next/link";

const Header2 = () => {
  const [scrollY, setScrollY] = useState(0);

  // if the value is true is equal "Android system", when the value is false is equal "iOS system"
  const [currentSys, setcurrentSys] = useState(true);

  useEffect(() => {
    console.log("system", osName);
    if (osName === "Windows" || osName === "Android") {
      setcurrentSys(true);
    } else if (isMacOs || isIOS) {
      setcurrentSys(false);
    }
  }, []);

  const onScroll = useCallback((event: any) => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${scrollY ? styles.backgroundWhite : ""}`}
    >
      <div className={styles.headerContainer}>
        <Link href="/" className="logoMiPata">
          {scrollY ? (
            <i
              className="icon-logo color-orange"
              style={{ fontSize: "3rem" }}
            ></i>
          ) : (
            <i
              className="icon-logo color-orange "
              style={{ fontSize: "3rem" }}
            ></i>
          )}
        </Link>

        <div className={styles.menuOptions}>
          <ul>
            <li className={"color-orange"}>BLOG</li>
            <li className={"color-orange"}>
              <a
                href={
                  currentSys
                    ? "https://play.google.com/store/apps/details?id=pe.mipata.mipata&hl=es"
                    : "https://apps.apple.com/pa/app/mi-pata-mascotas/id1534249237"
                }
                target="_blank"
              >
                DESCARGA EL APP
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header2;
