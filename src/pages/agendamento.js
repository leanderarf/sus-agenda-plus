import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/agendamento.css";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

const Agendamento = () => {
    const navigate = useNavigate();

    // refs
    const formRef = useRef(null);

    // estado do formulário
    const [form, setForm] = useState({
    especialidade: "",
    data: "",
    horario: "",
    distancia: "",
    disponibilidade: "maior",
    });

    // dados carregados
    const [especialidades, setEspecialidades] = useState([]);
    const [resultados, setResultados] = useState([]);

    // carrega especialidades a partir dos profissionais no localStorage
    useEffect(() => {
    const profs = JSON.parse(localStorage.getItem("profissionais")) || [];
    const unique = Array.from(
        new Set(profs.map((p) => (p.especialidade || "").trim()).filter(Boolean))
    );
    setEspecialidades(unique);
    }, []);

    // handlers
    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    };

    const scrollToForm = () => {
    if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    };

    const handleConsultar = (e) => {
    e.preventDefault();

    // verifica usuário logado
    const usuarioAtivo = JSON.parse(localStorage.getItem("usuarioAtivo"));
    if (!usuarioAtivo || !usuarioAtivo.cpf) {
        alert("É necessário estar logado para realizar agendamentos.");
        navigate("/login");
        return;
    }

    // carrega profissionais e filtra por especialidade
    const profs = JSON.parse(localStorage.getItem("profissionais")) || [];
    const matches = profs.filter(
        (p) =>
        (p.especialidade || "").toLowerCase() === (form.especialidade || "").toLowerCase()
    );

    // monta resultados a partir dos profissionais encontrados
    const encontrados = matches.map((p, idx) => {
        // estrutura de exibição com fallback
        return {
        id: `${p.cpf || p.registro || idx}-${Date.now()}`,
        unidade: p.unidade || "Unidade de Saúde",
        endereco:
            (p.rua ? p.rua + (p.numero ? `, ${p.numero}` : "") : "Endereço não informado") +
            (p.cidade ? ` - ${p.cidade}` : ""),
        especialidade: p.especialidade || form.especialidade,
        data: form.data || "Data não selecionada",
        horario: form.horario || "Horário não selecionado",
        };
    });

    // salva agendamento amarrado ao usuário (chave por CPF)
    const key = `agendamentos_${usuarioAtivo.cpf}`;
    const agendamentosAtuais = JSON.parse(localStorage.getItem(key)) || [];

    // transformamos os matches em objetos de agendamento e salvamos todos
    const novos = encontrados.map((r) => ({
        ...r,
        paciente: usuarioAtivo.nome,
        cpfPaciente: usuarioAtivo.cpf,
        distancia: form.distancia,
        disponibilidade: form.disponibilidade,
        createdAt: new Date().toISOString(),
    }));

    const todos = [...agendamentosAtuais, ...novos];
    localStorage.setItem(key, JSON.stringify(todos));

    // atualiza resultados (se nenhum encontrado, mostra vazio)
    setResultados(encontrados);

    // scroll para resultados (opcional: já estamos na mesma página, mas rolar suavemente)
    if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    if (encontrados.length === 0) {
        alert("Nenhuma disponibilidade encontrada para a especialidade selecionada.");
    }
    };

    return (
    <section className="agendamento">
    <Header />

    <div className="agendamento-page">

        <div className="agendamento-hero">
        <div className="agendamento-text">
            <h1>Agendamento<br />SUS Agenda+</h1>
            <p>Agende consultas e exames de forma rápida, prática e acessível</p>
            <button className="btn-disponibilidade" onClick={scrollToForm}>
            Consultar Disponibilidade
            </button>
        </div>

        <div className="banner">
            <img className="banner-image" src="/images/agendamento.png" alt="Ilustração agendamento" />
        </div>
        </div>

        <div className="agendamento-form-wrapper" ref={formRef}>
        <form className="agendamento-form" onSubmit={handleConsultar}>
            <div className="row">
            <select
                className="opcao"
                name="especialidade"
                value={form.especialidade}
                onChange={handleChange}
                required
            >
                <option value="">Especialidade</option>
                {especialidades.map((s) => (
                <option key={s} value={s}>
                    {s}
                </option>
                ))}
            </select>

            <input
                type="text"
                name="data"
                value={form.data}
                onChange={handleChange}
                placeholder="Data de agendamento"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => { // 👈 Adicione onBlur para voltar ao 'text' se o campo ficar vazio
                    if (!e.target.value) {
                    e.target.type = 'text';
                    }
                }}
            />
            </div>

            <div className="row">
            <input
                name="horario"
                value={form.horario}
                onChange={handleChange}
                placeholder="Horário"
                onFocus={(e) => (e.target.type = "time")}
            />

            <select className="opcao" name="distancia" value={form.distancia} onChange={handleChange}>
                <option value="">Distância</option>
                <option value="5">Até 5 km</option>
                <option value="10">Até 10 km</option>
                <option value="20">Até 20 km</option>
            </select>
            </div>

            <div className="row disponibilidade">
            <label>
                <input
                type="radio"
                name="disponibilidade"
                value="maior"
                checked={form.disponibilidade === "maior"}
                onChange={handleChange}
                />
                Maior disponibilidade
            </label>

            <label>
                <input
                type="radio"
                name="disponibilidade"
                value="qualquer"
                checked={form.disponibilidade === "qualquer"}
                onChange={handleChange}
                />
                Qualquer horário
            </label>
            </div>

            <button className="btn-consultar" type="submit">
            Consultar
            </button>
        </form>
        </div>

        <div className="agendamento-results">
        <h3>Resultados</h3>

        {resultados.length === 0 ? (
            <div className="no-results">Nenhuma disponibilidade exibida.</div>
        ) : (
            <div className="cards">
            {resultados.map((r) => (
                <div key={r.id} className="card">
                <div className="card-left">
                    <strong className="card-title">{r.unidade}</strong>
                    <div className="card-address">{r.endereco}</div>
                    <div className="card-especialidade">
                    <strong>Especialidade</strong>
                    <div>{r.especialidade}</div>
                    </div>
                </div>

                <div className="card-right">
                    <div className="card-date">Data: {r.data}</div>
                    <div className="card-time">Horário: {r.horario}</div>
                </div>
                </div>
            ))}
            </div>
        )}
        </div>
        
    </div>
    <Footer />
    </section>
    );
};

export default Agendamento;
