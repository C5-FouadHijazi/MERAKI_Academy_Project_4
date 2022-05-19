import "./situations.css";
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { tokenContext } from "../../App";
import { useParams } from "react-router-dom";
import StripeContainer from "../Payment/StripeContainer";

const Situations = () => {
  const [situations, setSituations] = useState([]);
  const [donate, setDonate] = useState(0);
  const [showItem, setShowItem] = useState(false);

  const { token, setToken, islogin, setIslogin, message, setMessage } =
    useContext(tokenContext);

  setToken(localStorage.getItem("token"));
  const navigate = useNavigate();

  const { id } = useParams();

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

  const update = (id) => {
    console.log("Hello World", "header", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log(id);
    axios
      .post(
        `http://localhost:5000/campaigns/situations/${id}`,
        { donate },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log("Update :", result);
        setSituations(result.data.situations);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    get();
    // update();
  }, []);

  return (
    <div className="Main-Situations-Dev">
      {situations &&
        situations.map((element, index) => {
          console.log(element);

          return (
            <div className="Situations-dev" key={element.id}>
              <div>
                <img src={element.img} />
              </div>
              <div>
                <h2>{element.title}</h2>
              </div>
              <div>
                <h3>{element.description}</h3>
                <h3> Case Number : {element.caseNumber}</h3>
                <h3>Total Amount Need : {element.amoutStillNedded}</h3>
                <h3>Amount Still Need : {element.amountNedded}</h3>
                <h3>Total Amount Donated :{element.amountDonated}</h3>
              </div>

              
              <div>
                <input
                  type="number"
                  placeholder={"0$"}
                  onChange={(e) => {
                    setDonate(e.target.value);
                    console.log(e.target.value);
                  }}
                />

                <button
                  onClick={() => {
                    if (islogin) {
                      setShowItem(true);
                      console.log(islogin);
                      update(element._id);
                      navigate("/payment");
                    } else {
                      navigate("/login");
                    }
                  }}
                >
                  Donate
                </button>

               {/*  <div>
                  {showItem && islogin ? (
                    <>
                      <button
                        onClick={() => {
                          if (islogin) {
                            update(element._id);
                            navigate("/payment");
                          } else {
                            navigate("/login");
                          }
                        }}
                      >
                        Pay
                      </button>
                    </>
                  ) : (
                    <></>
                  )}
                </div> */}
              </div>
            </div>
            
          );
          
        })}
        
    </div>
  );
};
console.log();
export default Situations;
