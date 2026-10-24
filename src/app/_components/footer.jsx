import style from "./footer.css";
import Contacte from "./contacte";

const Footer = () => {
    return (
        <div className="Footer">
            <h3>Contactez-moi</h3>
            <div className="Contactes">
                <Contacte icone="./images/svg/icone_phone_background.svg" texte="438-831-1277" />
                <a href="mailto:myriamgevrynethersole@gmail.com"><Contacte icone="./images/svg/icone_email_background.svg" texte="myriamgevrynethersole@gmail.com" /></a>
                <a target="_blank" href=" https://github.com/myriamgevrynethersole"><Contacte icone="./images/svg/icone_github_background.svg" texte="https://github.com/myriamgevrynethersole" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/myriam-gevry-nethersole/"><Contacte icone="./images/svg/icone_linkedin_background.svg" texte="https://www.linkedin.com/in/myriam-gevry-nethersole/" /></a>
            </div>

        </div>
    );
};

export default Footer;