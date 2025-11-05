import React, { useState } from "react";
import "../styles/cadastroPaciente.css";
import { useNavigate } from "react-router-dom";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

const CadastroPaciente = () => {

    const usuariosExistentes = JSON.parse(localStorage.getItem("usuarios")) || [];

    const navigate = useNavigate();

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

        usuariosExistentes.push(formData);


        localStorage.setItem("usuarios", JSON.stringify(usuariosExistentes));


        console.log("Dados cadastrados:", formData);
        alert("Cadastro realizado com sucesso!");
        navigate("/login");
    };

    return (
        <div className="cadastro-container">
            <Header />

            <div className="cadastro-banner">
                <img className="banner-image-cadastro" src="/images/Cadastro Paciente.png" alt="Imagem de Cadastro Paciente" />
            </div>

            <form className="cadastro-form" onSubmit={handleSubmit}>
                {/* Dados Pessoais */}
                <h2>Dados Pessoais
                    <span>
                        <img className="cadastro-icon" src="/icons/dados-pessoais.png" alt="ícone de Dados Pessoais" />
                    </span>
                </h2>

                <input
                    type="text"
                    name="nome"
                    placeholder="Nome completo"
                    value={formData.nome}
                    onChange={handleChange}
                />

                <div className="duo-input">
                    <input
                        type="text"
                        name="cpf"
                        placeholder="CPF"
                        value={formData.cpf}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="rg"
                        placeholder="RG"
                        value={formData.rg}
                        onChange={handleChange}
                    />
                </div>

                <div className="duo-input">
                    <select
                        name="sexo"
                        value={formData.sexo}
                        onChange={handleChange}
                    >
                        <option value="">Sexo</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                    </select>

                    <input
                        type="text"
                        name="genero"
                        placeholder="Gênero"
                        value={formData.genero}
                        onChange={handleChange}
                    />
                </div>

                <div className="duo-input">
                    <input
                        type="date"
                        name="nascimento"
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

                {/* Endereço */}
                <h2>Endereço
                    <span>
                        <img className="cadastro-icon" src="/icons/endereco.png" alt="ícone de Endereço" />
                    </span>
                </h2>

                <div className="duo-input">
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

                <div className="duo-input">
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

                {/* Contato */}
                <h2>Contato
                    <span>
                        <img className="cadastro-icon" src="/icons/contato.png" alt="ícone de Contato" />
                    </span>
                </h2>

                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                />

                <div className="duo-input">
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

                <div className="duo-input">
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

                {/* Dados do SUS */}
                <h2>Dados do SUS
                    <span>
                        <img className="cadastro-icon" src="/icons/cartao-sus.png" alt="ícone de Dados do SUS" />
                    </span>
                </h2>
                <input
                    type="text"
                    name="carteirinha"
                    placeholder="Número da carteirinha"
                    value={formData.carteirinha}
                    onChange={handleChange}
                />

                {/* Credenciais */}
                <h2>Credenciais de Acesso
                    <span>
                        <img className="cadastro-icon" src="/icons/credenciais.png" alt="ícone de Credenciais de Acesso" />
                    </span>
                </h2>

                <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    value={formData.senha}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="confirmarSenha"
                    placeholder="Confirmar Senha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                />

                <button type="submit" className="btn-cadastrar">
                    Cadastrar
                </button>
            </form>

            <Footer />
        </div>
    );
};

export default CadastroPaciente;
