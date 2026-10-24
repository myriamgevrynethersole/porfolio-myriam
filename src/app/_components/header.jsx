'use client';
import style from "./header.css"
import TopPage from "./top-page"
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


const Header = () => {
  const scopeRef = useRef();

  gsap.registerPlugin(useGSAP, useRef, DrawSVGPlugin, ScrollTrigger);

  useGSAP(() => {
    const splitChars = SplitText.create(".Tittle", {
      type: 'chars',
    });

    const tl = gsap.timeline({
      repeat: -1,

      ease: "power3.inOut",
    });

    tl.fromTo(".vignes", {
      rotate: "1deg",
      duration: 1,

    }, {
      rotate: "-1deg",
      duration: 1,

    })
      .fromTo(".vignes", {
        rotate: "-1deg",
        duration: 1,

      }, {
        rotate: "1deg",
        duration: 1,

      })

    gsap.set(".Tittle", {
      display: "grid"
    })
    
    gsap.fromTo(
      splitChars.chars,
      {
        x: "80vw",
        ease: "power4.inOut"
      },
      {
        x: 0,
        stagger: .1
      }, "<"
    )




  }, { scope: scopeRef });

  return (
    <header ref={scopeRef} className="Header">
      <TopPage />
      {/* <div className="PageTop">
        <div className="Logo"></div>
      </div> */}
      <div className="DivTittle">
        <img className="vignes images-vigne01" src="/images/svg/vigne01.svg" alt="" />
        <img className="vignes images-vigne02" src="/images/svg/vigne02.svg" alt="" />
        <h1 className="Tittle"><span>Porfolio de</span><br /><span>Myriam</span><br /><span>Gévry-Nethersole</span></h1>
      </div>
      <div className="image-fond"></div>

    </header>
  );
};

export default Header;