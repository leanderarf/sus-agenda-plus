import React from "react";
import "../styles/esqueceuSenha2.css";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

const EsqueceuSenha2 = () => {


  return (
    <div className="esqueceu-senha-2-container">
        <Header /> 

        <div className="banner">
            <img className="banner_image" src="/images/Código de verificação.png" alt="Imagem de Código de Verificação" />
        </div>

        <div className="esqueceu-senha-2-formulario">
            <h2>Digite o código de verificação enviado</h2>

            <div className="code-inputs">
            {[...Array(6)].map((_, i) => (
                <input key={i} type="text" maxLength="1" />
            ))}
            </div>

            <button className="btn-enviar">Enviar</button>

            <div className="resend-section">
            <p className="text-info">Não recebeu o código?</p>
            <p className="text-link">Reenviar código de verificação</p>
            </div>
        </div>

        <Footer />
    </div>
  );
};

export default EsqueceuSenha2;
