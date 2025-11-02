import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/esqueceuSenha3.css";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

const ForgotPasswordStep3 = () => {
    const navigate = useNavigate();

    const handleNextStep = (e) => {
        e.preventDefault();
        navigate("/login"); // rota da próxima tela
    };

    return (
        <div className="esqueceu-senha-3-container">
            <Header />

            <div className="banner">
                <img className="banner-image" src="/images/Redefinir senha.png" alt="Imagem de Redefinir Senha" />
            </div>

            <div className="esqueceu-senha-3-formulario">
                <label htmlFor="newPassword" className="input-label">Nova Senha</label>
                <input
                type="password"
                id="newPassword"
                className="input-field"
                placeholder="Digite sua nova senha"
                />

                <label htmlFor="confirmPassword" className="input-label">Confirmar nova senha</label>
                <input
                type="password"
                id="confirmPassword"
                className="input-field"
                placeholder="Confirme sua nova senha"
                />

                <button className="btn-redefinir" onClick={handleNextStep}>Redefinir</button>
            </div>

            <Footer />
        </div>
    );
};

export default ForgotPasswordStep3;
