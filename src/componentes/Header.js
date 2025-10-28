import './Header.css';

const Header = () => {
    return (
         <header>
            <nav className="navbar">
                <ul className="menu-icon">
                    <li>
                        <a href='#'>
                            <img className='menu-icon-menu' src='icons/menu.png' alt="Menu Hamburguer SUS Agenda+" />                        
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img className='menu-icon-logo'src='icons/logo-menu.png' alt="Logo SUS Agenda+" />
                        </a>
                    </li>
                </ul>
                <ul className="user-icons">
                    <li>
                        <a href='#'>
                            <img className="notificacao" src='icons/notificacao.png' alt="Minhas notificações" />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img className ="calendario" src='icons/calendario.png' alt="Meus agendamentos" />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img className="usuario" src='icons/usuario-menu.png' alt="Usuário" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;