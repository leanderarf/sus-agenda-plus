import React, { useEffect, useState } from "react";
import "../styles/historicoAgendamento.css";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

const HistoricoAgendamento = () => {
    const [usuarioAtivo, setUsuarioAtivo] = useState(null);
    const [agendamentos, setAgendamentos] = useState([]);
    const [filtros, setFiltros] = useState({
        unidade: "",
        data: "",
        status: "",
    });

    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem("usuarioAtivo"));
        if (usuario) {
            setUsuarioAtivo(usuario);
            const agendamentosUsuario =
                JSON.parse(localStorage.getItem(`agendamentos_${usuario.email}`)) || [];
            setAgendamentos(agendamentosUsuario);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFiltros({ ...filtros, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const usuario = JSON.parse(localStorage.getItem("usuarioAtivo"));
        if (usuario) {
            const agendamentosUsuario =
                JSON.parse(localStorage.getItem(`agendamentos_${usuario.email}`)) || [];
            const filtrados = agendamentosUsuario.filter((ag) => {
                const matchUnidade = filtros.unidade
                    ? ag.unidade?.toLowerCase().includes(filtros.unidade.toLowerCase())
                    : true;
                const matchStatus = filtros.status ? ag.status === filtros.status : true;
                const matchData = filtros.data ? ag.data === filtros.data : true;
                return matchUnidade && matchStatus && matchData;
            });
            setAgendamentos(filtrados);
        }
    };

    return (
        <section className="historico-agendamento">
            <Header />

            <div className="historico-container">
                <div className="banner-historico">
                    <img className="image-historico" src="/images/Historico.png" alt="Imagem de Histórico de Agendamentos" />
                </div>

                <form className="filtro-form" onSubmit={handleSubmit}>
                    <div className="filtros-linha">
                        <select
                            name="unidade"
                            value={filtros.unidade}
                            onChange={handleChange}
                            className="campo-select"
                        >
                            <option value="">Unidade de Saúde</option>
                            <option value="UBS Jardim Rosana">UBS Jardim Rosana</option>
                            <option value="UBS Jardim Santa Clara">UBS Jardim Santa Clara</option>
                            <option value="Dr Marilia Lima">Dr Marilia Lima</option>
                        </select>

                        <input
                            type="text"
                            name="data"
                            value={filtros.data}
                            onChange={handleChange}
                            className="campo-select"
                            placeholder="Data de agendamento"
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => {
                                if (!e.target.value) {
                                    e.target.type = 'text';
                                }
                            }}
                        />

                        <select
                            name="status"
                            value={filtros.status}
                            onChange={handleChange}
                            className="campo-select"
                        >
                            <option value="">Status</option>
                            <option value="Em Andamento">Em Andamento</option>
                            <option value="Concluído">Concluído</option>
                            <option value="Cancelado">Cancelado</option>
                        </select>
                    </div>

                    <button type="submit" className="btn-consultar">
                        Consultar
                    </button>
                </form>

                <section className="resultados">
                    <h3>Resultados</h3>

                    <div className="tabela-container">
                        <table className="tabela-agendamentos">
                            <thead>
                                <tr>
                                    <th>Especialidade</th>
                                    <th>Unidade</th>
                                    <th>Profissional de Saúde</th>
                                    <th>Data</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {agendamentos.length > 0 ? (
                                    agendamentos.map((ag, index) => (
                                        <tr key={index}>
                                            <td>{ag.especialidade}</td>
                                            <td>{ag.unidade}</td>
                                            <td>{ag.profissional}</td>
                                            <td>
                                                {ag.data} - {ag.horario}
                                            </td>
                                            <td>{ag.status}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="sem-resultados">
                                            Nenhum agendamento encontrado
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Paginação visual */}
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

export default HistoricoAgendamento;
