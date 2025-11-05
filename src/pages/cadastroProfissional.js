import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/cadastroProfissional.css";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

const CadastroProfissional = () => {
    const navigate = useNavigate();
    const profissionaisExistentes = JSON.parse(localStorage.getItem("profissionais")) || [];

    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        rg: "",
        sexo: "",
        genero: "",
        nascimento: "",
        naturalidade: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        cep: "",
        email: "",
        telefoneDDD: "",
        telefone: "",
        celularDDD: "",
        celular: "",
        tipoProfissional: "",
        registro: "",
        area: "",
        especialidade: "",
        unidade: "",
        carteirinha: "",
        senha: "",
        confirmarSenha: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.senha !== formData.confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        const cpfExistente = profissionaisExistentes.some(
            (prof) => prof.cpf === formData.cpf
        );

        if (cpfExistente) {
            alert("Este CPF já está cadastrado!");
            return;
        }

        profissionaisExistentes.push(formData);
        localStorage.setItem("profissionais", JSON.stringify(profissionaisExistentes));

        alert("Cadastro realizado com sucesso!");
        navigate("/login");
    };

    return (
        <section className="cadastro-profissional">
            <Header />

            <div className="cadastro-profissional-container">

                <div className="banner">
                    <img className="banner_image" src="/images/Cadastro Profissional.png" alt="Imagem de Cadastro Profissional" />
                </div>

                <div className="cadastro-card">


                    <form className="cadastro-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Nome completo"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />

                        <div className="linha-dupla">
                            <input
                                type="text"
                                name="cpf"
                                placeholder="CPF"
                                value={formData.cpf}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="rg"
                                placeholder="RG"
                                value={formData.rg}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="linha-dupla">
                            <select name="sexo" value={formData.sexo} onChange={handleChange}>
                                <option value="">Sexo</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                            </select>

                            <input
                                type="text"
                                name="genero"
                                placeholder="Gênero"
                                value={formData.genero}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="linha-dupla">
                            <input
                                type="date"
                                name="nascimento"
                                placeholder="Data de Nascimento"
                                value={formData.nascimento}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="naturalidade"
                                placeholder="Naturalidade"
                                value={formData.naturalidade}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="linha-dupla">
                            <input
                                type="text"
                                name="rua"
                                placeholder="Rua"
                                value={formData.rua}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="numero"
                                placeholder="Número"
                                value={formData.numero}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="linha-dupla">
                            <input
                                type="text"
                                name="bairro"
                                placeholder="Bairro"
                                value={formData.bairro}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="cidade"
                                placeholder="Cidade"
                                value={formData.cidade}
                                onChange={handleChange}
                            />
                        </div>

                        <input
                            type="text"
                            name="cep"
                            placeholder="CEP"
                            value={formData.cep}
                            onChange={handleChange}
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <div className="linha-dupla">
                            <input
                                type="text"
                                name="telefoneDDD"
                                placeholder="DDD"
                                value={formData.telefoneDDD}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="telefone"
                                placeholder="Telefone"
                                value={formData.telefone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="linha-dupla">
                            <input
                                type="text"
                                name="celularDDD"
                                placeholder="DDD"
                                value={formData.celularDDD}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="celular"
                                placeholder="Celular"
                                value={formData.celular}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="linha-dupla">
                            <select
                                name="tipoProfissional"
                                value={formData.tipoProfissional}
                                onChange={handleChange}
                            >
                                <option value="">Tipo de Profissional</option>
                                <option value="Médico">Médico</option>
                                <option value="Dentista">Dentista</option>
                                <option value="Psicólogo">Psicólogo</option>
                                <option value="Enfermeiro">Enfermeiro</option>
                                <option value="Outro">Outro</option>
                            </select>

                            <input
                                type="text"
                                name="registro"
                                placeholder="CRM/CRO/CRP"
                                value={formData.registro}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="linha-dupla">
                            <input
                                type="text"
                                name="area"
                                placeholder="Área"
                                value={formData.area}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="especialidade"
                                placeholder="Especialidade"
                                value={formData.especialidade}
                                onChange={handleChange}
                            />
                        </div>

                        <input
                            type="text"
                            name="unidade"
                            placeholder="Unidade de Atuação"
                            value={formData.unidade}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="carteirinha"
                            placeholder="Número da carteirinha"
                            value={formData.carteirinha}
                            onChange={handleChange}
                        />

                        <div className="linha-dupla">
                            <input
                                type="password"
                                name="senha"
                                placeholder="Senha"
                                value={formData.senha}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="password"
                                name="confirmarSenha"
                                placeholder="Confirmar Senha"
                                value={formData.confirmarSenha}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn-cadastrar">
                            Cadastrar
                        </button>
                    </form>
                </div>

            </div>
            <Footer />
        </section>
    );
};

export default CadastroProfissional;
