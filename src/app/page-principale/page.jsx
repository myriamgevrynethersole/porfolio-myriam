import styles from "../page.module.css";
import Header from "../_components/header";
import About_Me from "../_components/about-me";
import Liste_Projet from "../_components/liste-projets";

const PagePrincipale = () => {

    return (
        <div className="page">
            <Header />
            <main className="main">
                <About_Me />
                <Liste_Projet />
            </main>
        </div>
    );
}

export default PagePrincipale;