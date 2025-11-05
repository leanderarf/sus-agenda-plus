import React, { useState } from "react";
import "../styles/esqueceuSenha1.css";
import { useNavigate } from "react-router-dom";
import Footer from "../componentes/footer";
import Header from "../componentes/header";

const EsqueceuSenha1 = () => {
  const [metodo, setMetodo] = useState("email");

  const navigate = useNavigate();

  const handleNextStep = (e) => {
    e.preventDefault();
    navigate("/esqueceuSenha2");
  };

  return (
    <div className="esqueceu-container">
      <Header />
      <div className="banner-esqueceu1">
        <img className="banner_image" src="/images/Esqueceu Senha.png" alt="Imagem de Esqueceu a Senha" />
      </div>

      <div className="formulario">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="text"
          id="email"
          className="input"
          placeholder="Digite seu e-mail ou CPF"
        />

        <p className="texto-opcao">
          Deseja recuperar a senha via SMS ou e-mail?
        </p>

        <div className="radio-grupo">
          <label className="radio">
            <input
              type="radio"
              value="email"
              checked={metodo === "email"}
              onChange={(e) => setMetodo(e.target.value)}
            />
            <span>Email</span>
          </label>

          <label className="radio">
            <input
              type="radio"
              value="sms"
              checked={metodo === "sms"}
              onChange={(e) => setMetodo(e.target.value)}
            />
            <span>SMS</span>
          </label>
        </div>

        <button type="submit" className="botao-enviar" onClick={handleNextStep}>
          Enviar
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default EsqueceuSenha1;
