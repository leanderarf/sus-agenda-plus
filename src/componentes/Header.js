import './Header.css'

const Cabecalho = () => {
    return (
        <header>
            <nav>
                <div className="menu-icon">
                    <img src='icons/menu.png' alt="Menu" />
                    <img src='icons/icone_transparente.png' alt="Logo Saúde" />
                </div>
                <div className="user-icons">
                    <img className="notificacao" src='icons/notificacao.png' alt="Notificações" />
                    <img className ="calendario" src='icons/calendario.png' alt="Calendário" />
                    <img className="usuario" src='icons/usuario-menu.png' alt="Usuário" />
                </div>
            </nav>
        </header>
        
    )
}

export default Cabecalho