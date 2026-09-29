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
      </div>
    
    </header>
  );
};

export default Header;

const IconeMenu = () => {
  <svg className="IconeMenu" width="300" height="130" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="100" x="10" y="10" rx="20" ry="20" />
  </svg>
}
const IconeClose = () => {

}