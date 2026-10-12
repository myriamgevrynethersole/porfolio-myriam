import style from "./header.css"

const Header = () => {
  return (
    <header className="Header">
      <div className="PageTop">
        <div className="Logo"></div>
      </div>
      <div className="DivTittle">
        <h1 className="Tittle"><span>Porfolio de</span><br /><span>Myriam</span><br /><span>Gévry-Nethersole</span></h1>
        <img className="images-vigne01" src="/images/svg/vigne01.svg" alt="" />
        <img className="images-vigne02" src="/images/svg/vigne02.svg" alt="" />
      </div>
        <div className="image-fond"></div>

    </header>
  );
};

export default Header;