import logo from '../images/Friends_logo.png'; // Importar la imagen

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo de Friends" className="header__logo"/> {/* Usar la imagen importada */}
        </header>
    );
}
  
export default Header;