import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProDashboard() {
  const { me, logout } = useAuth();

  return (
    <div style={{ padding: 24 }}>
      <h2>Dashboard PRO</h2>
      <p>Olá, {me?.name} ({me?.email})</p>

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <Link to="/patients/new">Cadastrar Paciente</Link>
        <Link to="/exercises/new">Cadastrar Exercício</Link>
      </div>

      <button style={{ marginTop: 20 }} onClick={logout}>
        Sair
      </button>
    </div>
  );
}