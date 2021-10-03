import React, { useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import { FaBackward } from "react-icons/fa";

import api from "../../services/api";

const Register = ({ data, isOpenModal }) => {
  console.log(data);
  const history = useHistory();
  const [nome, setNome] = useState(data ? data.nome : "");
  const [sexo, setSexo] = useState(data ? data.sexo : "");
  const [idade, setIdade] = useState(data ? data.idade : "");
  const [hobby, setHobby] = useState(data ? data.hobby : "");
  const [datanascimento, setDatanascimento] = useState(
    data ? data.datanascimento : ""
  );

  const handleUpdateDeveloper = async (e) => {
    e.preventDefault();
    const newData = { nome, sexo, idade, hobby, datanascimento };

    try {
      await api.put(`developers/${data.id}`, newData);
    } catch (e) {
      alert(e.message);
    }

    history.push("/");
  };

  const handleAddDeveloper = async (e) => {
    e.preventDefault();
    const newData = { nome, sexo, idade, hobby, datanascimento };

    try {
      await api.post("developers", newData);
    } catch (e) {
      alert(e.message);
    }

    history.push("/");
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <h1>informações para cadastro</h1>
        <form
          onSubmit={isOpenModal ? handleUpdateDeveloper : handleAddDeveloper}
        >
          <input
            className="register-form-input"
            placeholder="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="register-form-input"
            placeholder="sexo"
            type="text"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
          />
          <input
            className="register-form-input"
            placeholder="idade"
            type="number"
            min="5"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          <input
            className="register-form-input"
            placeholder="hobby"
            type="text"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          />
          <input
            className="register-form-input"
            placeholder="data de nascimento"
            type="date"
            value={datanascimento}
            onChange={(e) => setDatanascimento(e.target.value)}
          />
          <div className="register-form-footer">
          <Link className="register-back" to="/developers">
            <FaBackward color={"#d41b58"} size={40} />
          </Link>
          <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
