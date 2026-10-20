'use client';
import style from "./projet-details.css";
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const ProjetDetails = ({ projet }) => {
    
    const scopeRef = useRef();
    const numImages = projet.images.length;
    gsap.registerPlugin(useGSAP, useRef, DrawSVGPlugin, ScrollTrigger);

    useGSAP(() => {
        gsap.to(".Images-Scroller", {
            scrollTrigger: {
                trigger: ".Images-Scroller",
                markers: true,
                start: "center center",
                end: "+=100% center",
                scrub:true,
                pin:true,

                
            },
            x: -((500 *(numImages-3)) + (30*(numImages-4) ))+160
            
        })
 console.log(projet.images.length)


}, { scope: scopeRef });

return (
    <div ref={scopeRef} className="ProjetDetails">
        <section className="Contexte">
            <div className="Videos">
                <video className="Video" src={projet.video} type="video/mp4" autoPlay muted loop></video>
                <img className="Mockup" src={projet.mockup} type="video/gif"></img>
            </div>
            <p>{projet.contexte}</p>
        </section>
        <section className="Approche">

            <p>{projet.approche}</p>
            <div className="Images-Scroller">

                {projet.images.map((image) => (<div key={image} ><img src={image} /></div>))}

            </div>

        </section>
    </div>
);
};

export default ProjetDetails;