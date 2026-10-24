'use client';
import style from "./liste-projet.css"
import Projet from "../_components/projet";
import projetData from "../_data/projets.json"
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Liste = () => {
  const scopeRef = useRef();
  const numImages = projetData.length;
  gsap.registerPlugin(useGSAP, useRef, DrawSVGPlugin, ScrollTrigger);

  useGSAP(() => {
    gsap.to(".Projets-Scroller", {
      scrollTrigger: {
        trigger: scopeRef.current,
        start: "40% center",
        end: "+=1000vh bottom",
        scrub: true,
        pin: true,


      },
       x: -80+"vw",
    })
  }, { scope: scopeRef });


  return (
    <section  ref={scopeRef} className="Liste-Projet">
      <h2>Mes projets</h2>

      <div className="Projets-Scroller">
        {projetData.map((p) => <Projet key={p.id} video={p.video} titre={p.nom} id={p.id} tag={p.tag} />)}
      </div>


    </section>
  );
};

export default Liste;