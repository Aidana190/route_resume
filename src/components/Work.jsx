import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../helpers/const";
import { Link } from "react-router-dom";

const Work = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const { data } = await axios(API);
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="work">
      {users.map((elem) => (
        <Link to={`/workdetails/${elem.id}`} key={elem.id}>
          <li>{elem.name}</li>
        </Link>
      ))}
    </div>
  );
};

export default Work;
