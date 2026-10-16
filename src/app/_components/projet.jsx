import style from "./liste-projet.css"
import Link from 'next/link';

const Projet = ({ video, titre, id}) => {
    return (
        <Link className="Projet" href={`/projets/${id}`} >
            <div>
                <video src={video}></video>
                <h3>{titre}</h3>
            </div>
        </Link >
    );
};

export default Projet;