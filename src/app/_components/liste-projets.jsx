import style from "./liste-projet.css"
import Projet from "../_components/projet";

const Liste = () => {
  return (
    <section className="Liste-Projet">
        <h2>Mes projets</h2>
        <Projet/>
        <Projet/>
        <Projet/>
        <Projet/>

    </section>
  );
};

export default Liste;