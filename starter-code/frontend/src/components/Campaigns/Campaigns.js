import "./Campaigns.css";
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { tokenContext } from "../../App";
import { Link } from "react-router-dom";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [image, setimage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { token, setToken, islogin, setIslogin, message, setMessage } =
    useContext(tokenContext);
  setToken(localStorage.getItem("token"));

  useEffect(() => {
    axios
      .get("http://localhost:5000/campaigns", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result);
        setCampaigns(result.data.campaigns);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Main-Campaigns-Dev">
      {campaigns &&
        campaigns.map((element, index) => {
          return (
            <div className="campaigns-dev" key={element.id}>
              <img src={element.img} />
              <h2>{element.title}</h2>
              <h3>{element.description}</h3>
              <button><Link to={`/campaigns/setiation/${element._id}`}>More</Link></button>
            </div>
          );
        })}
    </div>
  );
};

export default Campaigns;
