import style from "./about-me.css"
import Contacte from "./contacte"

const About_Me = () => {
  return (
    <section className="About-Me">
      <h2>À propos de moi</h2>
      <div className="Contenue">
        <div className="Image">
          <img className="Image_Moi" src="./images/png/image_moi.png" alt="" />
        </div>
        <div className="Infos">
          <p>Bonjour je suis Myriam Gévry-Nethersole. J’étudie dans le domaine du multimédia, au cégep de Saint-Jérôme. Je cherche un stage dans le domaine du web. Je suis une personne organisée, perfectionniste et créative</p>
          <div className="Contactez-Moi">
            <h3>Contactez-moi</h3>
              <Contacte icone="./images/svg/icone_phone_background.svg" texte="438-831-1277" />
              <a href="mailto:myriamgevrynethersole@gmail.com"><Contacte icone="./images/svg/icone_email_background.svg" texte="myriamgevrynethersole@gmail.com" /></a>
              <a target="_blank" href=" https://github.com/myriamgevrynethersole"><Contacte icone="./images/svg/icone_github_background.svg" texte="https://github.com/myriamgevrynethersole" /></a> 
              <a target="_blank" href="https://www.linkedin.com/in/myriam-gevry-nethersole/"><Contacte icone="./images/svg/icone_linkedin_background.svg" texte="https://www.linkedin.com/in/myriam-gevry-nethersole/" /></a>
          </div>
        </div>


      </div>

    </section>
  );
};

export default About_Me;