import style from "./liste-projet.css"
import Projet from "../_components/projet";


const Liste = () => {
  return (
    <section className="Liste-Projet">
        <h2>Mes projets</h2>
        <Projet video="/projet01/resto-desktop-showcase.mp4" titre="Izakaya Hiroshi"/>
        <Projet video="/projet01/resto-desktop-showcase.mp4" titre="Izakaya Hiroshi"/>
        <Projet video="/projet01/resto-desktop-showcase.mp4" titre="Izakaya Hiroshi"/>
        <Projet video="/projet01/resto-desktop-showcase.mp4" titre="Izakaya Hiroshi"/>

    </section>
  );
};

export default Liste;