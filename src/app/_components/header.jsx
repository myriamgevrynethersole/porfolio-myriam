import style from "./header.css"

const Header = () => {
  return (
    <header className="Header">
      <div className="PageTop">
        <div className="Logo"></div>
        <div className="Nav">
          <svg className="IconeMenu" width="90" height="65" xmlns="http://www.w3.org/2000/svg">
            <rect width="90" height="15" x="0" y="0" rx="10" ry="10" />
            <rect width="90" height="15" x="0" y="25" rx="10" ry="10" />
            <rect width="90" height="15" x="0" y="50" rx="10" ry="10" />
          </svg>
        </div>
      </div>
      <div className="DivTittle">
        <h1 className="Tittle"><span>Porfolio de</span><br /><span>Myriam</span><br /><span>Gévry-Nethersole</span></h1>
        <img className="images-vigne01" src="/images/vigne01.svg" alt="" />
        <img className="images-vigne02" src="/images/vigne02.svg" alt="" />
      </div>
        <div className="image-fond"></div>

    </header>
  );
};

export default Header;