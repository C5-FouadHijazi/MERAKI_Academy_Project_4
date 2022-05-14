import "./Campaigns.css";
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { tokenContext } from "../../App";





const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [image, setimage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { token, setToken, islogin, setIslogin, message, setMessage } =
    useContext(tokenContext);
  setToken(localStorage.getItem("token"));



  const GetAllSituations = () => {
    //http://localhost:3000/Campaigns/(Campaigns.title)building_mosques/situations
    console.log("hello");


    const [situations, setSituations] = useState([]);

    const { token, setToken, islogin, setIslogin, message, setMessage } =
      useContext(tokenContext);
    setToken(localStorage.getItem("token"));

    useEffect(() => {
      axios
        .get("http://localhost:5000/campaigns/:id/situations", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          console.log(result);
          setSituations(result.data.situations);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    return (
      <div className="Main-Situations-Dev">
        {situations &&
          situations.map((element, index) => {
            return (
              <div className="Situations-dev" key={element.id}>
                <h2>{element.title}</h2>
                <h3>{element.description}</h3>
                <button>Donate</button>
              </div>
            );
          })}
      </div>
    ); 
  };
  

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
            <div className="campaigns-dev" 
               key={element.id}>
              {/* <p>{element.img}</p> */}
              <img src={element.img}/>
              <h2>{element.title}</h2>
              <h3>{element.description}</h3>
              <button onClick={GetAllSituations}>More</button>
            </div>
          );
        })}
    </div>
  );
};

export default Campaigns;
