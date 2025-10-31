import React from "react";
import "../styles/login.css";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

const Login = () => {
  return (
    <section>
        <Header />
        <div className="login-container">
            <div className="login-card">
                <div className="login-icon">
                    <img src="/icons/usuario-login.png" alt="Ícone de Usuário" className="login-user-icon" />
                </div>

                <form className="login-form">
                <label htmlFor="usuario" className="login-label">
                    Usuário
                </label>
                <input
                    type="text"
                    id="usuario"
                    className="login-input"
                    placeholder="Digite seu e-mail ou CPF"
                />

                <label htmlFor="senha" className="login-label">
                    Senha
                </label>
                <input
                    type="password"
                    id="senha"
                    className="login-input"
                    placeholder="Digite sua senha"
                />

                <div className="login-checkbox">
                    <input type="checkbox" id="manterConectado" />
                    <label htmlFor="manterConectado">Manter-me Conectado</label>
                </div>

                <button type="submit" className="login-button">
                    Entrar
                </button>

                <div className="login-links">
                    <a href="#" className="link">
                    Esqueceu a senha?
                    </a>
                    <a href="#" className="link">
                    Cadastre-se
                    </a>
                </div>
                </form>
            </div>
        </div>

        <Footer />
    </section>
    
  );
};

export default Login;
