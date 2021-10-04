import React from "react";
import {
  ListHeaderContainer,
  ListHeaderIconPlus,
  ListHeaderTitle,
} from "./ListHeader.styled";

import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";

const ListHeader = () => {
  return (
    <ListHeaderContainer>
      <ListHeaderTitle>Lista de Desenvolvedores</ListHeaderTitle>
      <ListHeaderIconPlus>
        <Link className="button-icon" to="/register">
          <BsPlusCircle color="#d41b58" size={30} />
        </Link>
      </ListHeaderIconPlus>
    </ListHeaderContainer>
  );
};

export default ListHeader;
