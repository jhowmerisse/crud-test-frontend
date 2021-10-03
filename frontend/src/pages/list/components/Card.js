import React, { useState } from "react";
import "./Card.css";
import { GoTrashcan } from "react-icons/go";
import { FiEdit3 } from "react-icons/fi";

import api from "../../../services/api";
import Modal from "react-modal";
import Register from "../../resgister/Register";

const customStyles = {
  content: {
    backgroundColor: "#1d2124",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Card = ({ data, refresh }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { id, nome, sexo, idade, hobby, datanascimento } = data;

  const handleDeleteCard = async () => {
    await api.delete(`developers/${id}`);

    refresh();
  };

  return (
    <div className="card-container">
      <strong> nome:</strong>
      <p> {nome} </p>
      <strong> sexo:</strong>
      <p> {sexo} </p>
      <strong> idade:</strong>
      <p> {idade} </p>
      <strong> hobby:</strong>
      <p> {hobby} </p>
      <strong> data de nascimento:</strong>
      <p> {datanascimento.split("-").reverse().join("/")} </p>
      <GoTrashcan
        className="card-icon-trash button-icon"
        size={20}
        color="#d41b58"
        onClick={() => handleDeleteCard(id)}
      />
      <FiEdit3
        className="card-icon-edit button-icon"
        size={20}
        color="#d41b58"
        onClick={() => setIsOpenModal(true)}
      />
      <Modal
        isOpen={isOpenModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Register data={data} isOpenModal={isOpenModal}/>
      </Modal>
    </div>
  );
};

export default Card;
