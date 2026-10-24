import style from "./liste-projet.css"
import Link from 'next/link';
import { ViewTransition } from "react";

const Projet = ({ video, titre, id, tag }) => {
    return (
        <Link className="Projet" href={`/${id}`} >
             <ViewTransition name={`Video-${id}`}>
            <div>
                <video className="Video" src={video} type="video/mp4" autoPlay muted loop> </video>

                <div className="info">
                    <h3>{titre}</h3>
                    <div className="Tag">
                        {tag.map((t) => (<p key={t} >{t}</p>))}
                    
                    </div>
                </div>

            </div>
            </ViewTransition>
        </Link >
    );
};

export default Projet;