import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import LoadingMiPata from "../components/LoadingComponent/LoadingMiPata";
import ServicesMiPata from "../components/ServicesMiPata";
import Head from "next/head";
import Testimonials from "../components/Testimonials";
import Hero3 from "../components/Hero/HeroTerciary";
import Header2 from "../components/Header/Secondary";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loadingStatus, setLoadingStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingStatus(false);
    }, 1250);
  }, []);

  return (
    <>
      <Head>
        <title>miPata </title>
        <link rel="icon" sizes="32x32" href="favicon.ico" />
      </Head>

      <main className="mainContainer">
        {loadingStatus && <LoadingMiPata />}
      </main>
      {!loadingStatus && (
        <>
          <Header2 />
          <Hero3 />
          <ServicesMiPata />
          <Testimonials />
          <Footer />
        </>
      )}
    </>
  );
}
