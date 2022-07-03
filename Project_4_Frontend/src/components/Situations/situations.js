import "./situations.css";
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { tokenContext } from "../../App";
import { useParams } from "react-router-dom";
import StripeContainer from "../Payment/StripeContainer";

const Situations = () => {
  const [situations, setSituations] = useState([]);
  const [amountDonated, setamountDonated] = useState(0);
  const [showItem, setShowItem] = useState(false);

  const { token, setToken, islogin, setIslogin, message, setMessage } =
    useContext(tokenContext);
  const MAX_LENGTH = 90;
  setToken(localStorage.getItem("token"));

  const navigate = useNavigate();

  const { id } = useParams();

  const get = () => {
    axios
      .get(`https://attadonation.herokuapp.com/campaigns/${id}/situations`, {
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
      .put(
        `https://attadonation.herokuapp.com/campaigns/situations/${id}`,

        { amountDonated },

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
              <div className="Situations-Pic-Div">
                <img className="Situations-Pic" src={element.img} />
              </div>
              <div className="Situations-title-Div">
                <h2>{element.title}</h2>
              </div>
              <div className="Case-Detailes-Div">
              <div className="description-div" ><h3> {`${element.description.substring(0, MAX_LENGTH)}...`}</h3></div>
                <div><h3> Case Number :{element.caseNumber}</h3></div>
                <div><h3>Total Amount Need :{element.amoutStillNedded}</h3></div>
                <div><h3>Amount Still Need :{element.amountNedded}</h3></div>
                <div><h3>Total Amount Donated :{element.amountDonated}</h3></div>
              </div>

              <div>
                <input
                  type={"number"}
                  placeholder="0$"
                  onChange={(e) => {
                    setamountDonated(e.target.value);
                    console.log(amountDonated);
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
