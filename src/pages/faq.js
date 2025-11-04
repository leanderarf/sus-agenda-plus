import React, { useState, useEffect } from "react";
import "../styles/faq.css";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

const Faq = () => {
    const [faqList, setFaqList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredFaqs, setFilteredFaqs] = useState([]);
    const [contato, setContato] = useState({
        nome: "",
        telefone: "",
        email: "",
        mensagem: "",
    });

    useEffect(() => {
        // Carrega perguntas do localStorage ou usa padrão
        const faqs =
            JSON.parse(localStorage.getItem("faq")) || [
                {
                    pergunta: "Como faço meu cadastro?",
                    resposta:
                        "Você pode realizar seu cadastro clicando em 'Cadastro' no menu principal e preenchendo todas as informações obrigatórias.",
                },
                {
                    pergunta: "Posso reagendar ou cancelar um agendamento?",
                    resposta:
                        "Sim, acesse a área 'Reagendar/Cancelar' e selecione o agendamento desejado.",
                },
                {
                    pergunta: "Como recebo notificações sobre minha consulta?",
                    resposta:
                        "As notificações são enviadas automaticamente para o e-mail e telefone cadastrados.",
                },
                {
                    pergunta: "Esqueci minha senha, como recuperar?",
                    resposta:
                        "Na tela de login, clique em 'Esqueceu sua senha?' e siga as instruções para redefini-la.",
                },
                {
                    pergunta:
                        "Como saber quais unidades de saúde estão mais próximas de mim?",
                    resposta:
                        "Use o menu 'Unidades Próximas' e consulte as opções disponíveis na sua cidade.",
                },
            ];

        setFaqList(faqs);
        setFilteredFaqs(faqs);
    }, []);

    useEffect(() => {
        const resultados = faqList.filter((faq) =>
            faq.pergunta.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredFaqs(resultados);
    }, [searchTerm, faqList]);

    const toggleResposta = (index) => {
        const novosFaqs = [...filteredFaqs];
        novosFaqs[index].aberto = !novosFaqs[index].aberto;
        setFilteredFaqs(novosFaqs);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContato({ ...contato, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Mensagem enviada com sucesso!");
        setContato({ nome: "", telefone: "", email: "", mensagem: "" });
    };

    return (
        <section className="faq">
            <Header />
            <div className="faq-container">
                <section className="faq-banner">
                    <img src="/images/Faq.png" alt="Imagem de Perguntas Frequentes" />
                </section>

                <section className="faq-busca">
                    <input
                        type="text"
                        placeholder="Buscar"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="faq-input"
                    />
                    <span className="faq-search-icon"></span>

                    <div className="faq-botoes">
                        <button>Agendamento</button>
                        <button>Cadastro</button>
                        <button>Suporte</button>
                    </div>
                </section>

                <section className="faq-perguntas">
                    <h3>Perguntas Frequentes</h3>
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${faq.aberto ? "aberto" : ""}`}
                                onClick={() => toggleResposta(index)}
                            >
                                <div className="faq-pergunta">
                                    <p>{faq.pergunta}</p>
                                    <span>{faq.aberto ? "−" : "+"}</span>
                                </div>
                                {faq.aberto && <div className="faq-resposta">{faq.resposta}</div>}
                            </div>
                        ))
                    ) : (
                        <p className="sem-resultados">Nenhum resultado encontrado.</p>
                    )}
                </section>

                <section className="faq-contato">
                    <h3>Contato</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Nome completo"
                            value={contato.nome}
                            onChange={handleInputChange}
                        />
                        <div className="contato-linha">
                            <input
                                type="text"
                                name="telefone"
                                placeholder="Telefone"
                                value={contato.telefone}
                                onChange={handleInputChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                value={contato.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <textarea
                            name="mensagem"
                            placeholder="Mensagem"
                            rows="4"
                            value={contato.mensagem}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Enviar Mensagem</button>
                    </form>
                </section>
            </div>
            <Footer />
        </section>
    );
};

export default Faq;
