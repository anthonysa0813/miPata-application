import React, { useCallback, useEffect, useState } from "react";
import styles from "../../styles/Header/Header2.module.scss";

const Header2 = () => {
  const [scrollY, setScrollY] = useState(0);

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
        <div className="logoMiPata">
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
        </div>

        <div className={styles.menuOptions}>
          <ul>
            <li className={"color-orange"}>BLOG</li>
            <li className={"color-orange"}>DESCARGA EL APP </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header2;
