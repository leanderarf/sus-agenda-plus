import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container">
                {/* Seção dos Logos */}
                <div className="footer_logos">
                    {/* Supondo que você tenha ícones/imagens para os logos */}
                    <img src="/images/Logo_SUS.png" alt="Logo SUS" className="logo_sus" />
                    <img src="/images/Logo_UNIP.png" alt="Logo UNIP" className="logo_unip" />
                </div>

                {/* Seção de Links */}
                <div className="footer_links_container">
                    {/* Links de Navegação */}
                    <div className="footer_links nav_links">
                        <a href="#ajuda">Ajuda</a>
                        <a href="#suporte">Suporte</a>
                        <a href="#contato">Contato</a>
                        <a href="#faq">Perguntas Frequentes</a>
                    </div>

                    {/* Links Legais */}
                    <div className="footer_links legal_links">
                        <a href="#privacidade">Política de Privacidade</a>
                        <a href="#termos">Termos e condições</a>
                        <a href="#cookies">Política de Cookies</a>
                        <a href="#def_cookies">Definições de Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;