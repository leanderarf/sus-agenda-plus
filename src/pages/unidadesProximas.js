import React, { useEffect, useState } from "react";
import "../styles/unidadesProximas.css";
import Footer from "../componentes/footer";
import Header from "../componentes/header";

const UnidadesProximas = () => {
    const [usuarioAtivo, setUsuarioAtivo] = useState(null);
    const [profissionais, setProfissionais] = useState([]);
    const [unidades, setUnidades] = useState([]);
    const [resultados, setResultados] = useState([]);
    const [filtros, setFiltros] = useState({
        unidade: "",
        cidade: "",
        bairro: "",
        especialidade: "",
        rua: "",
        cep: "",
    });

    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem("usuarioAtivo"));
        setUsuarioAtivo(usuario);

        // Simulação: busca dados armazenados de unidades e profissionais
        const profs = JSON.parse(localStorage.getItem("profissionais")) || [];
        const unid = JSON.parse(localStorage.getItem("unidades")) || [];

        setProfissionais(profs);
        setUnidades(unid);
        setResultados([...unid, ...profs]); // exibe tudo inicialmente
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFiltros({ ...filtros, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    // Filtro básico (simulado)
    const todosResultados = [...unidades, ...profissionais];
    const filtrados = todosResultados.filter((item) => {
        const matchUnidade = filtros.unidade
        ? item.nome?.toLowerCase().includes(filtros.unidade.toLowerCase())
        : true;
        const matchCidade = filtros.cidade
        ? item.cidade?.toLowerCase().includes(filtros.cidade.toLowerCase())
        : true;
        const matchBairro = filtros.bairro
        ? item.bairro?.toLowerCase().includes(filtros.bairro.toLowerCase())
        : true;
        const matchEspecialidade = filtros.especialidade
        ? item.especialidade?.toLowerCase().includes(filtros.especialidade.toLowerCase())
        : true;
        const matchRua = filtros.rua
        ? item.rua?.toLowerCase().includes(filtros.rua.toLowerCase())
        : true;
        const matchCep = filtros.cep
        ? item.cep?.toLowerCase().includes(filtros.cep.toLowerCase())
        : true;

        return (
        matchUnidade &&
        matchCidade &&
        matchBairro &&
        matchEspecialidade &&
        matchRua &&
        matchCep
        );
    });

    setResultados(filtrados);
    };

    return (
    <section className="unidades-proximas">
        <Header />
            <div className="unidades-container">
                <div className="banner">  
                    <div className="banner-text">
                        <h1>Unidades Próximas e Profissionais Disponíveis</h1>
                        <p>Encontre o atendimento mais próxima e adequado as suas necessidades de saúde</p>
                    </div>
                    <img src="/images/Unidades Proximas.png" alt="Imagem de Unidades Proximas" />
                </div>

                <form className="filtro-form" onSubmit={handleSubmit}>
                    <div className="filtros-linha">
                        <input
                            type="text"
                            name="unidade"
                            value={filtros.unidade}
                            onChange={handleChange}
                            placeholder="Unidade de Saúde"
                            className="campo-input"
                        />

                        <select
                            name="cidade"
                            value={filtros.cidade}
                            onChange={handleChange}
                            className="campo-select"
                        >
                            <option value="">Cidade</option>
                            <option value="Campinas">Campinas</option>
                            <option value="Monte Mor">Monte Mor</option>
                        </select>
                    </div>

                    <div className="filtros-linha">
                            <input
                            type="text"
                            name="bairro"
                            value={filtros.bairro}
                            onChange={handleChange}
                            placeholder="Bairro"
                            className="campo-input"
                        />

                        <select
                            name="especialidade"
                            value={filtros.especialidade}
                            onChange={handleChange}
                            className="campo-select"
                        >
                            <option value="">Especialidade</option>
                            <option value="Clínico Geral">Clínico Geral</option>
                            <option value="Cardiologia">Cardiologia</option>
                            <option value="Ortopedia">Ortopedia</option>
                        </select>
                    </div>

                    <div className="filtros-linha">
                        <input
                            type="text"
                            name="rua"
                            value={filtros.rua}
                            onChange={handleChange}
                            placeholder="Rua"
                            className="campo-input"
                        />

                        <input
                            type="text"
                            name="cep"
                            value={filtros.cep}
                            onChange={handleChange}
                            placeholder="CEP"
                            className="campo-input"
                        />
                    </div>

                    <button type="submit" className="btn-consultar">
                        Consultar
                    </button>
                </form>

                <section className="resultados">
                    <h3>Resultados</h3>

                    <div className="cards-resultados">
                        {resultados.length > 0 ? (
                        resultados.map((item, index) => (
                            <div key={index} className="card-resultado">
                            <div className="info">
                                <h4>{item.nome || item.profissional}</h4>
                                <p>
                                {item.endereco ||
                                    `${item.rua || ""}, ${item.numero || ""} - ${
                                    item.bairro || ""
                                    }, ${item.cidade || ""}`}
                                </p>
                                {item.especialidade && (
                                <p className="especialidade">
                                    <strong>Especialidade:</strong> {item.especialidade}
                                </p>
                                )}
                            </div>
                            <button className="btn-agendar" onClick={() => alert("Agendar consulta")}>
                                Agendar
                            </button>
                            </div>
                        ))
                        ) : (
                        <p className="sem-resultados">Nenhum resultado encontrado</p>
                        )}
                    </div>

                    <div className="paginacao">
                        <button>{"<"}</button>
                        <button className="ativo">1</button>
                        <button>2</button>
                        <button>3</button>
                        <span>...</span>
                        <button>15</button>
                        <button>{">"}</button>
                    </div>
                </section>
            </div>

            <Footer />
        </section>
    );
};

export default UnidadesProximas;
