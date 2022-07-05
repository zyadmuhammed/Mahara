import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import getConfig from 'next/config'
import Customizer from '../components/customizer'
import'../public/assets/css/slider.css'
import'../public/assets/css/customizer.css'
import'../styles/globals.css'
import'../styles/animation.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Menu } from'../components/menu'
import "../styles/Policy.css";


import useTranslation from "next-translate/useTranslation";
import { Container } from 'reactstrap';

const { publicRuntimeConfig = {} } = getConfig() || {};

NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

function MyFunctionComponent({ children }) {
  const [loader, setLoader] = useState(true)
  const [goingUp, setGoingUp] = useState(false)

  let { t } = useTranslation("common");

  useEffect(() => {
    // Tap to Top Scroll 
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 500)
        setGoingUp(true);
      else
        setGoingUp(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const tapToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  }

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name={t("titleـpage")} content={t("titleـpage")} />
      </Head>
      <>{children}</>
      <div className="tap-top" style={goingUp ? { display: 'block' } : { display: 'none' }} onClick={tapToTop}>
        <div><i className="fa fa-angle-double-up"></i></div>
      </div>
    </>
  )
}

 function MyApp({ Component, pageProps },ref) {
  return (
    <Container ref={ref}>
      <MyFunctionComponent>
        <Component {...pageProps} />
        <Customizer />
        <Menu/>
      </MyFunctionComponent>
      {/* <ToastContainer /> */}
    </Container>
  )
}
export default React.forwardRef(MyApp);
