'use client';
import style from "./projet-details.css";
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const ProjetDetails = ({ projet }) => {

    const scopeRef = useRef();
    // const numImages = projet.slides.images.length;
    gsap.registerPlugin(useGSAP, useRef, DrawSVGPlugin, ScrollTrigger);

    useGSAP(() => {
        const slide = gsap.utils.toArray('.Slide');
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.Approche',
                start: "top 10%",
                end: "+=300%",
                pin: true,
                scrub: true
            }
        });

        const moveUpAnimation = {
         
            ease: 'power1.out',
        };
        const scaleAnimation = {
            scale: 0.8,
            ease: 'power2.out'
        };

        slide.forEach((s, i) => {
            if (i === 0) {
                 tl.to(s, scaleAnimation);

            } else if (i === slide.length - 1) {

                tl.to(s,{ ...moveUpAnimation,  y: -100*i+"%", },"-=.5");

            } else {

                
                tl.to(s, { ...moveUpAnimation,  y: -100*i+"%", },"-=.5");
                tl.to(s, scaleAnimation);
            }

        })

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
                    {projet.slides.map((slide) => (
                        <div className={`Slide Slide-${slide.id}`} key={slide.id} >
                            <p>{slide.approche}</p>
                            <div className="Images">{slide.images.map((image) => (<div key={image} ><img src={image} /></div>))}</div>
                        </div>
                    ))};


                    {/* <p>{projet.approche}</p>
            <div className="Images-Scroller">

                {projet.images.map((image) => (<div key={image} ><img src={image} /></div>))}

            </div> */}

                </section>
            </div>
        );
    };

    export default ProjetDetails;