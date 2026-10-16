import style from "../../globals.css"
import projetData from "../../_data/projets.json"
import TopPage from "../../_components/top-page"


const PageProjet = async ({ params }) => {
    const { projetId } = await params;
    const projet = projetData.find((p) => p.id === projetId)
    console.log(projet)
    return (
        <div>
            <header>
                <TopPage />
            </header>
            {/* Affiche le projet: synthese */}
            <main>
                <h1 className="Titre-Projet">{projet.nom}</h1>
                <div className="Contexte"></div>
                <div className="Approche"></div>
            </main>
        </div>)
}


export default PageProjet;