"use client";
import "./style.css";
import { Power3, gsap } from "gsap";
import { useEffect, useRef } from "react";
const index = () => {
  const sectionAnim = useRef(null);
  const tl = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline().to(".Hero-content", {
        clipPath: "circle(110% at 50% 600px)",
        duration: 1,
        ease: Power3.easeInOut,
      });
    }, sectionAnim);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionAnim} className="Hero--container aic ">
      <div className="Hero-content aic">
        <h1>hero</h1>
      </div>
    </section>
  );
};

export default index;
