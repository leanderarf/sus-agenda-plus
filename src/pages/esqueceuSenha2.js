import React, { useState, useEffect, useRef } from "react";
import "../styles/esqueceuSenha2.css";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../componentes/header";
import Footer from "../componentes/footer";

const EsqueceuSenha2 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { requestId, identifier, metodo } = location.state || {};
    const [code, setCode] = useState(Array(6).fill(""));
    const inputsRef = useRef([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cooldown, setCooldown] = useState(0);

    useEffect(() => {
        if (!requestId) navigate("/esqueceuSenha1");
        inputsRef.current[0]?.focus();
    }, [requestId, navigate]);

    useEffect(() => {
        if (cooldown <= 0) return;
        const t = setTimeout(() => setCooldown(cooldown - 1), 1000);
        return () => clearTimeout(t);
    }, [cooldown]);

    const handleChange = (val, idx) => {
        if (!/^\d?$/.test(val)) return;
        const next = [...code];
        next[idx] = val;
        setCode(next);
        if (val && idx < 5) inputsRef.current[idx + 1]?.focus();
    };

    const handleKeyDown = (e, idx) => {
        if (e.key === "Backspace" && !code[idx] && idx > 0) inputsRef.current[idx - 1]?.focus();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        const joined = code.join("");
        if (joined.length < 6) return setError("Digite o código de 6 dígitos.");
        try {
            setLoading(true);
            const res = await fetch("/api/password-reset/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ requestId, code: joined })
            });
            if (!res.ok) throw new Error("Código inválido.");
            const data = await res.json();
            navigate("/esqueceuSenha3", { state: { resetToken: data.resetToken } });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async () => {
        if (cooldown > 0) return;
        try {
            setLoading(true);
            const res = await fetch("/api/password-reset/request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ identifier, method: metodo })
            });
            if (!res.ok) throw new Error("Erro ao reenviar código.");
            const data = await res.json();
            navigate("/esqueceuSenha2", { replace: true, state: { requestId: data.requestId, identifier, metodo } });
            setCooldown(60);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="esqueceu-senha-2-container">
            <Header />
            <div className="banner-esqueceu2">
                <img className="banner_image" src="/images/Código de verificação.png" alt="Código de Verificação" />
            </div>
            <div className="esqueceu-senha-2-formulario">
                <h2>Digite o código de verificação enviado</h2>
                <div className="code-inputs">
                    {code.map((c, i) => (
                        <input
                            key={i}
                            type="text"
                            maxLength="1"
                            value={c}
                            ref={(el) => (inputsRef.current[i] = el)}
                            onChange={(e) => handleChange(e.target.value.replace(/\D/g, ""), i)}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                        />
                    ))}
                </div>
                {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
                <button className="btn-enviar" onClick={handleSubmit} disabled={loading}>
                    {loading ? "Verificando..." : "Enviar"}
                </button>
                <div className="resend-section" style={{ marginTop: 12 }}>
                    <p className="text-info">Não recebeu o código?</p>
                    <button className="text-link" onClick={handleResend} disabled={cooldown > 0 || loading}>
                        {cooldown > 0 ? `Reenviar em ${cooldown}s` : "Reenviar código de verificação"}
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EsqueceuSenha2;
