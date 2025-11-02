import '../styles/header.css';
import { useNavigate } from 'react-router-dom'; // 👈 1. Importar useNavigate
import React from 'react'; // 👈 Garantir que o React esteja importado

const Header = () => {
    const navigate = useNavigate(); // 👈 2. Inicializar o useNavigate

    // 3. Função para verificar o login e redirecionar
    const handleAgendamentoClick = (e) => {
        // Previne a navegação padrão do <a> com href='#'
        e.preventDefault(); 
        
        // Verifica se há um usuário ativo no localStorage
        const usuarioAtivo = JSON.parse(localStorage.getItem("usuarioAtivo"));

        if (usuarioAtivo && usuarioAtivo.cpf) {
            // Se estiver logado, navega para a página de Agendamento
            navigate('/agendamento'); 
        } else {
            // Se NÃO estiver logado, navega para a página de Login
            navigate('/login');
        }
    };

    return (
         <header>
            <nav className="navbar">
                <ul className="menu-icon">
                    <li>
                        <a href='#'>
                            <img className='menu-icon-menu' src='/icons/menu.png' alt="Menu Hamburguer SUS Agenda+" />                        
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img className='menu-icon-logo'src='/icons/logo-menu.png' alt="Logo SUS Agenda+" />
                        </a>
                    </li>
                </ul>
                <ul className="user-icons">
                    <li>
                        <a href='#'>
                            <img className="notificacao" src='/icons/notificacao.png' alt="Minhas notificações" />
                        </a>
                    </li>
                    {/* 4. APLICAÇÃO DO HANDLER NO ÍCONE DE AGENDAMENTO */}
                    <li onClick={handleAgendamentoClick}> 
                        <a href='#'> 
                            <img 
                                className ="agendamentos" 
                                src='/icons/agendamentos.png' 
                                alt="Meus agendamentos" 
                            />
                        </a>
                    </li>
                    <li>
                        <a href='/login'>
                            <img className="usuario" src='/icons/usuario-menu.png' alt="Usuário" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;