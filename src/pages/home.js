import "../styles/home.css";
import React, { useState } from "react";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

const faqData = [
    { question: "Como faço meu cadastro?", answer: "O cadastro é feito diretamente na plataforma, informando seus dados pessoais e o número do Cartão SUS. Após o preenchimento, basta criar um login e senha para acessar o sistema." },
    { question: "Posso remarcar uma consulta?", answer: "Sim. O sistema permite remarcar consultas de forma simples e rápida, sem necessidade de ir até a unidade de saúde. Basta acessar o histórico de agendamentos e escolher a opção de reagendamento." },
    { question: "O sistema é gratuito", answer: "Sim. O uso do sistema é totalmente gratuito, pois faz parte de uma iniciativa pública voltada à melhoria do acesso e da gestão dos atendimentos no SUS." },
    { question: "Posso acessar pelo celular?", answer: "Sim. O sistema é responsivo e pode ser acessado de qualquer dispositivo, incluindo celulares, tablets e computadores, garantindo praticidade e inclusão digital." },
];

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        
        <body>
            <Header/>

            <section className="home">
            <div className="hero-home">
                <img
                className="image-home"
                src="/images/Home.png"
                alt="Banner Home SUS Agenda+"
                />
                <a className="hero_button" href="#">
                Agendar Agora
                </a>
            </div>
            <div className="funcionalidades">
                <h2>Como Funciona</h2>
                <ul className="funcionalidades_list">
                <li className="funcionalidades_item">
                    <img
                    className="cadastro"
                    src="/icons/cadastro.png"
                    alt="Ícone de Cadastro"
                    />
                    <h3>Cadastro</h3>
                    <p>Paciente cria seu perfil com número do cartão SUS</p>
                </li>
                <li className="funcionalidades_item">
                    <img
                    className="agendamento"
                    src="/icons/agendamento.png"
                    alt="Ícone de Agendamento"
                    />
                    <h3>Agendamento</h3>
                    <p>Escolhe unidade, especialidade e horário disponíveis</p>
                </li>
                <li className="funcionalidades_item">
                    <img
                    className="confirmacao"
                    src="/icons/confirmacao.png"
                    alt="Ícone de Confirmação"
                    />
                    <h3>Confirmação</h3>
                    <p>Recebe notificação por e-mail ou SMS</p>
                </li>
                <li className="funcionalidades_item">
                    <img
                    className="historico"
                    src="/icons/historico.png"
                    alt="Ícone de Histórico"
                    />
                    <h3>Histórico</h3>
                    <p>Consulta registros de atendimentos anteriores</p>
                </li>
                </ul>
                <p className="funcionalidade_rodape">
                O sistema reduz filas, otimiza o tempo e facilita o acesso aos
                serviços públicos.
                </p>
            </div>
            <div className="vantagens">
                <h2>Vantagens</h2>
                <div className="vantagens_conteudo">
                <ul className="vantagens_list">
                    <li className="vantagens_item">
                    <img
                        className="acessibilidade"
                        src="/icons/acessibilidade.png"
                        alt="Ícone de Acessibilidade digital"
                    />
                    <h3>Acessibilidade digital</h3>
                    <p>Interface simples e responsiva</p>
                    </li>
                    <li className="vantagens_item">
                    <img
                        className="transparencia"
                        src="/icons/transparencia.png"
                        alt="Ícone de Transparência"
                    />
                    <h3>Transparência</h3>
                    <p>Histórico e notificações automáticas</p>
                    </li>
                    <li className="vantagens_item">
                    <img
                        className="eficiencia"
                        src="/icons/eficiencia.png"
                        alt="Ícone de Eficiência"
                    />
                    <h3>Eficiência</h3>
                    <p>Menos faltas e mais controle para as unidades</p>
                    </li>
                </ul>
                </div>
                <img
                className="vantagens_image"
                src="/images/Home_Vantagens.png"
                alt="Imagem modelo de funcionários e engrenagem acima de suas cabeças. Nuvens ao fundo"
                />
            </div>
            <div className="missao">
                <h2>Missão, Visão e Valores</h2>
                <div className="missao_container">
                <div className="missao_text">
                    <p>
                    Contribuir para o desenvolvimento social e tecnológico da
                    comunidade, aplicando o conhecimento acadêmico em soluções reais.
                    </p>
                    <ul className="missao_text_list">
                    <li>Ética e responsabilidade social</li>
                    <li>Inovação e empregabilidade</li>
                    <li>Comprometimento com os ODS da ONU (3, 9 e 10)</li>
                    </ul>
                </div>
                <ul className="missao_icon_list">
                    <li>
                    <img src="/icons/unir.png" alt="ícone de Inclusão social" />
                    Inclusão social
                    </li>
                    <li>
                    <img
                        src="/icons/desigualdade.png"
                        alt="ícone de Redução das desigualdades"
                    />
                    Redução das desigualdades
                    </li>
                    <li>
                    <img src="/icons/apoio.png" alt="ícone de Apoio a Saúde" />
                    Apoio à saúde
                    </li>
                </ul>
                </div>
                </div>
                <div className="impacto">
                    <h2 className="impacto_titulo">Impacto Social</h2>
                    <div className="impacto_container">
                    <img src="/images/Home_Impacto.png" alt="Imagem de Impacto Social" />
                    <ul className="impacto_list">
                        <li className="impacto_item">
                        <img
                            src="/icons/melhoria.png"
                            alt="Ícone de Melhoria no acesso à saúde"
                        />
                        <h3>Melhoria no acesso à saúde pública</h3>
                        <p>
                            Facilita o agendamento e acompanhamento de consultas, garantindo{" "}
                            acesso rápido aos serviços do SUS
                        </p>
                        </li>
                        <li className="impacto_item">
                        <img
                            src="/icons/reducao.png"
                            alt="Ícone de Redução dos desigualdades"
                        />
                        <h3>Redução dos desigualdades</h3>
                        <p>
                            Promove inclusão social e digital, alcançando comunidades de
                            baixa renda e cidadãos com pouca familiaridade tecnológica
                        </p>
                        </li>
                        <li className="impacto_item">
                        <img
                            src="/icons/fortalecimento.png"
                            alt="Ícone de Fortalecimento da cidadania"
                        />
                        <h3>Fortalecimento da cidadania</h3>
                        <p>
                            Integra o conhecimento acadêmico à realidade social, estimulando
                            a empatia, a ética e a inovação com impacto real na comunidade
                        </p>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="banner-home">
                    <img className="banner_image" src="/images/Home_Banner.png" alt="Banner SUS Agenda+" />
                    <a className="banner_button" href="#">Agendar Agora</a>
                </div>
                <div className="faq_home">
                <h2 className="faq_titulo">FAQ</h2>
                
                {faqData.map((item, index) => (
                    <React.Fragment key={index}>
                        <button
                            className={`faq_accordion ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.question}
                        </button>
                        <div className={`faq_panel ${activeIndex === index ? 'open' : ''}`}>
                            <p>{item.answer}</p>
                        </div>
                    </React.Fragment>
                ))}
                </div>
            </section>

            <Footer />
        </body>
    );
};

export default Home;
