import style from "./projet-details.css"

const ProjetDetails = async ({ projet }) => {
    return (
        <div className="ProjetDetails">
            <section className="Contexte">
                <div className="Videos">
                    <video className="Video" src={projet.video} type="video/mp4" autoPlay muted loop></video>
                    <img className="Mockup" src={projet.mockup} type="video/gif"></img>
                </div>
                <p>{projet.contexte}</p>
            </section>
            <section className="Approche">

                <p>{projet.approche}</p>
                <div className="images-scroller">

                    {projet.images.map((image) => (<div key={image} ><img src={image}/></div>))}

                </div>

            </section>
        </div>
    );
};

export default ProjetDetails;