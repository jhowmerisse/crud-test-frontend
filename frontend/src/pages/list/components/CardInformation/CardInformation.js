import React from "react";
import {
  CardInformationTitle,
  CardInformationValue,
} from "./CardInformation.styled";
import PropTypes from "prop-types";

const CardInformation = ({ data }) => {
  const { nome, sexo, idade, hobby, datanascimento } = data;
  return (
    <>
      <CardInformationTitle> nome:</CardInformationTitle>
      <CardInformationValue> {nome} </CardInformationValue>
      <CardInformationTitle> sexo:</CardInformationTitle>
      <CardInformationValue> {sexo} </CardInformationValue>
      <CardInformationTitle> idade:</CardInformationTitle>
      <CardInformationValue> {idade} </CardInformationValue>
      <CardInformationTitle> hobby:</CardInformationTitle>
      <CardInformationValue> {hobby} </CardInformationValue>
      <CardInformationTitle> data de nascimento:</CardInformationTitle>
      <CardInformationValue>
        {datanascimento.split("-").reverse().join("/")}
      </CardInformationValue>
    </>
  );
};

CardInformation.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    sexo: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    hobby: PropTypes.string.isRequired,
    datanascimento: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardInformation;
