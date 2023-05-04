import Header2 from "@/components/Header/Secondary";
import React, { FC } from "react";
import styles from "../styles/Layout/MainLayout.module.scss";
import Head from "next/head";

interface Prop {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export const MainLayout: FC<Prop> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header2 />
      <main className={styles.main}>{children}</main>
    </>
  );
};
