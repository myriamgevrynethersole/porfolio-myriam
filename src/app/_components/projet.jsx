import style from "./liste-projet.css"
import Link from 'next/link';

const Projet = ({ video, titre, id, tag }) => {
    return (
        <Link className="Projet" href={`/${id}`} >
            <div>
                <video src={video} autoPlay muted></video>
                <div className="info">
                    <h3>{titre}</h3>
                    <div className="Tag">
                        {tag.map((t) => (<p key={t} >{t}</p>))}
                    
                    </div>
                </div>

            </div>
        </Link >
    );
};

export default Projet;