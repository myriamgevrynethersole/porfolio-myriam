import style from "../page.module.css"
import projetData from "../_data/projets.json"
import TopPage from "../_components/top-page"
import ProjetDetails from "../_components/projet-details"
import Footer from "../_components/footer";


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
            <main className="Main-Page-Detail">
                <h1 className="Titre-Projet">{projet.nom}</h1>
                <ProjetDetails projet={projet} />
            </main>
            <div className="Footer-Page-Detail">
                <Footer />
            </div>
        </div>)
}


export default PageProjet;