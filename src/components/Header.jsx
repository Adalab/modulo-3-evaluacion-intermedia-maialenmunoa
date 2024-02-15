import logo from '../images/Friends_logo.png'; 

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo de Friends" className="header__logo"/> 
        </header>
    );
}
  
export default Header;