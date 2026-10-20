import style from "../../page.module.css"
import projetData from "../../_data/projets.json"
import TopPage from "../../_components/top-page"
import ProjetDetails from "../../_components/projet-details"


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
            <main className="Page-Detail">
                <h1 className="Titre-Projet">{projet.nom}</h1>
                <ProjetDetails projet={projet}/>
            </main>
        </div>)
}


export default PageProjet;