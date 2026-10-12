import style from "./contacte.css"

const Contacte = ({icone, texte}) => {
    return (
        <div className="Contacte">
            <img className="Icone" src={icone} alt="" />
            <p>{texte}</p>

        </div>
    );
};

export default Contacte;