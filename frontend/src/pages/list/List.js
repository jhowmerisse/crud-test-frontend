import React, { useEffect, useState } from "react";
import "./List.css";

import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import Card from "./components/Card";
import api from "../../services/api";

const List = () => {
  const [data, setData] = useState([]);

  const getDevelopers = async () => {
    const response = await api.get("developers");
    setData(response.data);
  };

  useEffect(() =>  getDevelopers(), [data]);

  return (
    <div className="list-container">
      <div className="list-header">
        <div className="list-header-title">
          <h1>lista de devs</h1>
        </div>
        <Link className="list-plus-icon button-icon" to="/register">
          <BsPlusCircle color="#d41b58" size={30} />
        </Link>
      </div>
      <div className="list-cards">
        <ul>
          {data.map((developer) => (
            <Card key={developer.id} data={developer} refresh={getDevelopers} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
