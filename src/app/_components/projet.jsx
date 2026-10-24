'use client';
import style from "./liste-projet.css"
import Link from 'next/link';
import { ViewTransition } from "react";
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projet = ({ video, titre, id, tag }) => {
    const scopeRef = useRef();
    gsap.registerPlugin(useGSAP, useRef, DrawSVGPlugin, ScrollTrigger);
  

    



    return (
        <Link ref={scopeRef} className="Projet" href={`/${id}`} >
            <ViewTransition name={`Video-${id}`}>
                <div className="Div-Projet">
                    <video className="Video" src={video} type="video/mp4" autoPlay muted loop> </video>

                    <div className="Info-Projet">
                        <h3 className="Titre-Projet">{titre}</h3>
                        <div className="Tag-Projet">
                            {tag.map((t) => (<p key={t} >{t}</p>))}

                        </div>
                    </div>

                </div>
            </ViewTransition>
        </Link >
    );
};

export default Projet;