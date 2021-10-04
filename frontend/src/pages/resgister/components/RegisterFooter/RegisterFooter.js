import React from "react";
import {
  RegisterFooterContainer,
  RegisterFooterWithBack,
} from "./RegisterFooter.styled";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";

const RegisterFooter = ({ isOpenModal }) => {
  return !isOpenModal ? (
    <>
      <RegisterFooterWithBack>
        <Link className="register-back" to="/developers">
          <FaBackward color={"#d41b58"} size={40} />
        </Link>
      </RegisterFooterWithBack>
      <button type="submit">Salvar</button>
    </>
  ) : (
    <RegisterFooterContainer>
      <button type="submit">Salvar</button>
    </RegisterFooterContainer>
  );
};

RegisterFooter.protoTypes = {
  isOpenModal: PropTypes.bool,
};

export default RegisterFooter;
