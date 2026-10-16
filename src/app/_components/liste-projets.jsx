import style from "./liste-projet.css"
import Projet from "../_components/projet";
import projetData from "../_data/projets.json"


const Liste = () => {
  return (
    <section className="Liste-Projet">
        <h2>Mes projets</h2>
        {projetData.map((p) => <Projet key={p.id} video={p.video} titre={p.nom} id={p.id}/>)}
        

    </section>
  );
};

export default Liste;