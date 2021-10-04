import React, { useState } from "react";
import {
  RegisterContainer,
  RegisterContent,
  RegisterForm,
  RegisterInput,
  RegisterTitle,
} from "./Register.styled";
import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";
import api from "../../services/api";
import RegisterFooter from "./components/RegisterFooter/RegisterFooter";

const Register = ({ data, isOpenModal }) => {
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
    <RegisterContainer>
      <RegisterContent>
        <RegisterTitle>Informações de Cadastro</RegisterTitle>
        <RegisterForm
          onSubmit={isOpenModal ? handleUpdateDeveloper : handleAddDeveloper}
        >
          <RegisterInput
            className="register-form-input"
            placeholder="nome"
            type="text"
            maxLength="100"
            value={nome}
            required
            onChange={(e) => setNome(e.target.value)}
          />
          <RegisterInput
            className="register-form-input"
            placeholder="sexo"
            type="text"
            maxLength="1"
            value={sexo}
            required
            onChange={(e) => setSexo(e.target.value)}
          />
          <RegisterInput
            className="register-form-input"
            placeholder="idade"
            type="number"
            value={idade}
            required
            onChange={(e) => setIdade(e.target.value)}
          />
          <RegisterInput
            className="register-form-input"
            placeholder="hobby"
            type="text"
            maxLength="100"
            value={hobby}
            required
            onChange={(e) => setHobby(e.target.value)}
          />
          <RegisterInput
            className="register-form-input"
            placeholder="data de nascimento"
            type="date"
            value={datanascimento}
            required
            onChange={(e) => setDatanascimento(e.target.value)}
          />
          <RegisterFooter isOpenModal={isOpenModal} />
        </RegisterForm>
      </RegisterContent>
    </RegisterContainer>
  );
};

Register.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    sexo: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    hobby: PropTypes.string.isRequired,
    datanascimento: PropTypes.string.isRequired,
  }),
  isOpenModal: PropTypes.bool,
};

export default Register;
