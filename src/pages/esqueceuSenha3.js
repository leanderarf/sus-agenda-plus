import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/esqueceuSenha3.css";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

const EsqueceuSenha3 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { resetToken } = location.state || {};
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!resetToken) navigate("/esqueceuSenha1");
    }, [resetToken, navigate]);

    const handleNextStep = async (e) => {
        e.preventDefault();
        setError(null);
        if (newPassword.length < 8) return setError("A senha deve ter ao menos 8 caracteres.");
        if (newPassword !== confirmPassword) return setError("As senhas não coincidem.");
        try {
            setLoading(true);
            const res = await fetch("/api/password-reset/complete", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${resetToken}`
                },
                body: JSON.stringify({ password: newPassword })
            });
            if (!res.ok) throw new Error("Erro ao redefinir senha.");
            navigate("/login", { state: { message: "Senha redefinida com sucesso. Faça login." } });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="esqueceu-senha-3-container">
            <Header />
            <div className="banner">
                <img className="banner-image-esqueceu3" src="/images/Redefinir senha.png" alt="Redefinir Senha" />
            </div>
            <div className="esqueceu-senha-3-formulario">
                <label className="input-label">Nova Senha</label>
                <input
                    type="password"
                    className="input-field"
                    placeholder="Digite sua nova senha"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <label className="input-label">Confirmar nova senha</label>
                <input
                    type="password"
                    className="input-field"
                    placeholder="Confirme sua nova senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
                <button className="btn-redefinir" onClick={handleNextStep} disabled={loading}>
                    {loading ? "Redefinindo..." : "Redefinir"}
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default EsqueceuSenha3;
