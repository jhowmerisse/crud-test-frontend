import React from "react";
import { ListCardsContainer, ListCardsUl } from "./ListCards.styled";
import PropTypes from "prop-types";

import Card from "../Card/Card";

const ListCards = ({ data, refresh }) => {
  return (
    <ListCardsContainer>
      <ListCardsUl>
        {data.map((developer) => (
          <Card key={developer.id} data={developer} refresh={refresh} />
        ))}
      </ListCardsUl>
    </ListCardsContainer>
  );
};

ListCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nome: PropTypes.string.isRequired,
      sexo: PropTypes.string.isRequired,
      idade: PropTypes.number.isRequired,
      hobby: PropTypes.string.isRequired,
      datanascimento: PropTypes.string.isRequired,
    })
  ),
  refresh: PropTypes.func,
};

export default ListCards;
