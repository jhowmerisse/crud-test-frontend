import React, { useState } from "react";
import { CardContainer, CardIconEdit, CardIconTrash } from "./Card.styled";
import PropTypes from "prop-types";

import Modal from "react-modal";
import { FiEdit3 } from "react-icons/fi";
import { GoTrashcan } from "react-icons/go";
import api from "../../../../services/api";
import Register from "../../../resgister/Register";
import CardInformation from "../CardInformation/CardInformation";

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

  const { id } = data;

  const handleDeleteCard = async () => {
    await api.delete(`developers/${id}`);

    refresh();
  };

  return (
    <CardContainer>
      <CardInformation data={data} />
      <CardIconTrash>
        <GoTrashcan
          className="button-icon"
          size={20}
          color="#d41b58"
          onClick={() => handleDeleteCard(id)}
        />
      </CardIconTrash>
      <CardIconEdit>
        <FiEdit3
          className="button-icon"
          size={20}
          color="#d41b58"
          onClick={() => setIsOpenModal(true)}
        />
      </CardIconEdit>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <Register data={data} isOpenModal={isOpenModal} />
      </Modal>
    </CardContainer>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    sexo: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    hobby: PropTypes.string.isRequired,
    datanascimento: PropTypes.string.isRequired,
  }),
  refresh: PropTypes.func,
};

export default Card;
