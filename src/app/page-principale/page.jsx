import styles from "../page.module.css";
import Header from "../_components/header";
import About_Me from "../_components/about-me";

const PagePrincipale = () => {

    return (
        <div className="page">
            <Header />
            <main className="main">
                <About_Me />
            </main>
        </div>
    );
}

export default PagePrincipale;