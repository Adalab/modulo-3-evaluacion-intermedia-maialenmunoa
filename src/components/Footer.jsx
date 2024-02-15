import github from '../images/github-icon.png'

function Footer() {
    return (
       <footer className="footer">
            <p className="footer__text">Hecho con <span role="img" aria-label="corazón">❤️</span> por Maialen</p>
            <div className="footer__link">
                <img className="footer__logo" src={github} alt="GitHub Logo" />
                <a className= "footer__logo-link" href="https://github.com/maialenmunoa/personajes-Disney" target="_blank" rel="noreferrer">Repositorio</a>
            </div>
       </footer>
    );
}
  
export default Footer;