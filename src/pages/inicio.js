import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/inicio.css";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

const Inicio = () => {
  const navigate = useNavigate();
  const [nomePaciente, setNomePaciente] = useState("");

  useEffect(() => {
    // Recupera usuário logado
    const usuarioAtivo = JSON.parse(localStorage.getItem("usuarioAtivo"));
    if (usuarioAtivo && usuarioAtivo.nome) {
      setNomePaciente(usuarioAtivo.nome);
    } else {
      navigate("/login"); // Redireciona se não houver usuário logado
    }
  }, [navigate]);

  const handleAgendarConsulta = () => {
    navigate("/agendamento");
  };

  return (
    <section className="inicio">
        <Header />
        <div className="inicio-container">
            <div className="banner">
                <img className="banner-image"src="/images/Inicio.png" alt="Imagem de tela de Início" />
                <button className="btn-agendar" onClick={handleAgendarConsulta}>
                    Agendar consulta
                </button>
            </div>

            {/* Saudação */}
            <section className="saudacao">
                <h3>
                Olá, <span>{nomePaciente ? nomePaciente : "[nome do paciente]"}</span>
                </h3>
            </section>

            {/* Menu de opções */}
            <section className="opcoes-container">
                <div className="opcao-card">
                <div className="icon">
                    <img src="/icons/agendar-consulta.png" alt="Agendar Consulta" />
                </div>
                <h4>Agendar Consulta</h4>
                <button onClick={handleAgendarConsulta}>Acessar</button>
                </div>

                <div className="opcao-card">
                <div className="icon">
                    <img src="/icons/reagendar.png" alt="Reagendar/Cancelar" />
                </div>
                <h4>Reagendar/Cancelar</h4>
                <a href="/historico">Acessar</a>
                </div>

                <div className="opcao-card">
                <div className="icon">
                    <img src="/icons/historico-agendamentos.png" alt="Histórico de Consultas" />
                </div>
                <h4>Histórico de Consultas</h4>
                <a href="/historico">Acessar</a>
                </div>

                <div className="opcao-card">
                <div className="icon">
                    <img src="/icons/unidades-proximas.png" alt="Unidades Próximas" />
                </div>
                <h4>Unidades Próximas</h4>
                <a href="/unidades">Acessar</a>
                </div>

                <div className="card-duvidas">
                <div className="icon">
                    <img src="/icons/perguntas-frequentes.png" alt="Dúvidas Frequentes" />
                </div>
                <h4>Dúvidas Frequentes</h4>
                <a href="#">Acessar</a>
                </div>
            </section>

            {/* Mensagem final */}
            <section className="mensagem-final">
                <div className="mensagem-box">
                <img src="/icons/dica.png" alt="Dica" />
                <p>
                    Agende suas consultas com antecedência e <br />
                    evite filas nas unidades de saúde
                </p>
                </div>
            </section>
        </div>

        <Footer />
    </section>
  );
};

export default Inicio;
