import React, { useEffect, useState } from "react";
import { ListContainer } from "./List.styled";

import api from "../../services/api";
import ListHeader from "./components/ListHeader/ListHeader";
import ListCards from "./components/ListCards/ListCards";

const List = () => {
  const [data, setData] = useState([]);

  const getDevelopers = async () => {
    const response = await api.get("developers");
    setData(response.data);
  };

  useEffect(() => getDevelopers(), []);

  return (
    <ListContainer>
      <ListHeader />
      <ListCards data={data} refresh={getDevelopers} />
    </ListContainer>
  );
};

export default List;
