import "./situations.css";
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { tokenContext } from "../../App";
import { useParams } from "react-router-dom";

const Situations = () => {
  const [situations, setSituations] = useState([]);
  const { token, setToken, islogin, setIslogin, message, setMessage } =
    useContext(tokenContext);
  setToken(localStorage.getItem("token"));
  const navigate = useNavigate();

  const { id } = useParams();
  console.log("situdations:", id);

  const get = () => {
    axios
      .get(`http://localhost:5000/campaigns/${id}/situations`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        //console.log(result);
        setSituations(result.data.situations);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const update = () => {
    axios
      .put(`http://localhost:5000/campaigns/situations/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log("Update :", result);
        setSituations(result.data.situations);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    get();
    update();
  }, []);

  return (
    <div className="Main-Situations-Dev">
      {situations &&
        situations.map((element, index) => {
          return (
            <div className="Situations-dev" key={element.id}>
              <img src={element.img} />
              <h2>{element.title}</h2>
              <h3>{element.description}</h3>
              <h3> Case Number : {element.caseNumber}</h3>
              <h3>Total Amount Need : {element.amoutStillNedded}</h3>
              <h3>Amount Still Need : {element.amountNedded}</h3>
              <h3>Total Amount Donated :{element.amountDonated}</h3>
              <input type={"number"} placeholder="$0" />
              {/* rule : Cant donate if not loged in // onlcik on it will update the situation from the Updatesituation fun
               */}
              <button
                onClick={() => {
                  if (islogin) {
                    update();
                    navigate("/Payments");
                  }
                  navigate("/login");
                }}
              >
                Donate
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Situations;
