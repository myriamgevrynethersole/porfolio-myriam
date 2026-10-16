import style from "../projets.css"
import projetData from "../../_data/projets.json"

const PageProjet = async ({ params }) => {
    const { projetId } = await params;
    const projet = projetData.find((p) => p.id===projetId)
    console.log(projet)
    return (
        <div>
            {/* Affiche le projet: synthese */}
            <h1>{projet.nom}</h1>
            <div className="contexte"></div>
            <div className="approche">
                
            </div>
        </div>)
}


export default PageProjet;