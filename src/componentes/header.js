import '../styles/header.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [menuAberto, setMenuAberto] = useState(false);

    // Verificar login
    const usuarioAtivo = JSON.parse(localStorage.getItem("usuarioAtivo"));

    const handleAgendamentoClick = (e) => {
        e.preventDefault();
        if (usuarioAtivo && usuarioAtivo.cpf) {
            navigate('/agendamento');
        } else {
            navigate('/login');
        }
    };

    const handleHomeClick = () => {
        if (usuarioAtivo && usuarioAtivo.cpf) {
            navigate('/inicio');
        }
    };

    return (
        <header>
            <nav className="navbar">
                <ul className="menu-icon">
                    <li
                        className="menu-hamburguer-area"
                        onMouseEnter={() => setMenuAberto(true)}
                        onMouseLeave={() => setMenuAberto(false)}
                    >
                        <img
                            className="menu-icon-menu"
                            src="/icons/menu.png"
                            alt="Menu SUS Agenda+"
                        />

                        {menuAberto && (
                            <div className="menu-dropdown">
                                <ul>
                                    <li onClick={() => navigate('/login')}>LOGIN</li>
                                    <li onClick={handleAgendamentoClick}>AGENDAR CONSULTA</li>
                                    <li onClick={() => navigate('/unidades')}>UNIDADES PRÓXIMAS</li>
                                    <li onClick={() => navigate('/historico')}>HISTÓRICO DE AGENDAMENTOS</li>
                                    <li onClick={() => navigate('/faq')}>PERGUNTAS FREQUENTES</li>
                                    <li onClick={() => navigate('/faq')}>CONTATO</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <a href="#" onClick={() => navigate('/inicio')}>
                            <img className="menu-icon-logo" src="/icons/logo-menu.png" alt="Logo SUS Agenda+" />
                        </a>
                    </li>
                </ul>

                <ul className="user-icons">
                    <li>
                        <img
                            className="home-icon"
                            src="/icons/home.png"
                            alt="Início"
                            onClick={handleHomeClick}
                            style={{ cursor: usuarioAtivo ? 'pointer' : 'not-allowed', opacity: usuarioAtivo ? 1 : 0.6 }}
                        />
                    </li>
                    <li>
                        <img className="notificacao" src="/icons/notificacao.png" alt="Notificações" />
                    </li>
                    <li onClick={handleAgendamentoClick}>
                        <img className="agendamentos" src="/icons/agendamentos.png" alt="Agendamentos" />
                    </li>
                    <li>
                        <img
                            className="usuario"
                            src="/icons/usuario-menu.png"
                            alt="Usuário"
                            onClick={() => navigate('/login')}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
