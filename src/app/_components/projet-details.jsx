'use client';
import style from "./projet-details.css";
import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ViewTransition } from "react";


const ProjetDetails = ({ projet }) => {
    const scopeRef = useRef();

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

                tl.to(s, { ...moveUpAnimation, y: -100 * i + "%", }, "-=.5");

            } else {


                tl.to(s, { ...moveUpAnimation, y: -100 * i + "%", }, "-=.5");
                tl.to(s, scaleAnimation);
            }

        })

    }, { scope: scopeRef });

    return (
        <div ref={scopeRef} className="ProjetDetails">
            <h1 className="Titre-Projet-Details">{projet.nom}</h1>
            <ViewTransition name={`Video-${projet.id}`}>
                <section className="Contexte">
                    <div className="Videos">
                        <video className="Video-Projet" src={projet.video} type="video/mp4" autoPlay muted loop></video>
                        <img className="Mockup" src={projet.mockup} type="video/gif"></img>
                    </div>
                    <div className="Infos-General">
                        <h2>Contexte</h2>
                        <p>{projet.contexte}</p>
                        <div className="Tag-Projet-Details">{projet.tag.map((t) => (<p key={t} >{t}</p>))}</div>
                        <div className="Btn-Retour"><p><Link href={"/page-principale"}>Retour</Link></p></div>
                    </div>
                </section>
                <section className="Approche">
                    <h2>Approche</h2>
                    {projet.slides.map((slide) => (
                        <div className={`Slide Slide-${slide.id}`} key={slide.id} >
                            <div>
                                <h3>{slide.titre}</h3>
                                <p>{slide.approche}</p>
                            </div>
                            <div className="Images">{slide.images.map((image) => (<div key={image} ><img src={image} /></div>))}</div>
                        </div>
                    ))};

                </section>
            </ViewTransition>
        </div >
    );
};

export default ProjetDetails;