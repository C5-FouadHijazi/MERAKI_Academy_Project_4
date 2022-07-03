import "./Campaigns.css";
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { tokenContext } from "../../App";
import { Link } from "react-router-dom";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  const { token, setToken, islogin, setIslogin, message, setMessage } =
    useContext(tokenContext);
  setToken(localStorage.getItem("token"));

  useEffect(() => {
    axios
      .get("https://attadonation.herokuapp.com/campaigns", {
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
              <img className="Pic-Div"  src={element.img} />
              <div className="Camapigin-Name-Div"><h2 className="Title-Camapigin">{element.title}</h2></div>
              <div className="Discription-Div" ><h4>{element.description}</h4></div>
              <button className="Btn-More"><Link to={`/campaigns/setiation/${element._id}`}>More</Link></button>
            </div>
          );
        })}
    </div>
  );
};

export default Campaigns;
