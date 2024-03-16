//import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { Login } from "./views/login/Login";
import { Menu } from "./views/menu/Menu";
import { CriarManutencao } from "./views/manutencao/CriarManutencao";
import { CriarServico } from "./views/servico/CriarServico";
import { CriarVeiculo } from "./views/veiculo/AdicionarVeiculo";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route index element={<Login />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/criarManutencao" element={<CriarManutencao />} />
            <Route path="/criarServico" element={<CriarServico />} />
            <Route path="/adicionarVeiculo" element={<CriarVeiculo />} />
        </Routes>
    );
}

export default App;
