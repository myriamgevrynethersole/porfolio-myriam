import style from "./liste-projet.css"

const Projet = ({video, titre}) => {
    return (
        <div className="Projet">
            <video src={video}></video>
            <h3>{titre}</h3>
        </div>

    );
};

export default Projet;