"use client";
import { useEffect } from "react";
import "./style.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import MouseFollower from "mouse-follower";
import { gsap } from "gsap";
import { SmoothScrollProvider } from "@/contexts/SmoothScroll.context";

const Main = ({ children }) => {
  MouseFollower.registerGSAP(gsap);
  useEffect(() => {
    const cursor = new MouseFollower({
      speed: 0.3,
      overwrite: true,
      showTimeout: 20,
      hideOnLeave: true,
      hideTimeout: 300,
      hideMediaTimeout: 300,
    });
    return () => {
      cursor.destroy();
    };
  }, []);

  return (
    <div data-scroll-container className="main--container aic">
      <SmoothScrollProvider>
        <div className="main-body aic anim" id="homepage">
          <Navbar />
          <main className="main-content aic anim">{children}</main>
          <Footer />
        </div>
      </SmoothScrollProvider>
    </div>
  );
};

export default Main;
