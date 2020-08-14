import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import moment from "moment";
import AppHeader from "../../components/AppHeader";
import { Redirect } from "react-router-dom";
import rentSucess from "../../images/rent_success.png";

const axios = require("axios");

const useStyles = makeStyles((theme) => ({}));

function BatteryRentCompleteForWeb(props) {
  const classes = useStyles(props);

  const [data, setData] = useState("");
  const [userID, setUserID] = useState("");
  function getID(callback) {
    return new Promise(function (resolve, reject) {
      window.getUserIdFromNativeOnTheComponentJS = function (id) {
        setUserID(id);
        resolve(id);
      };
    });
  }

  useEffect(() => {
    // if (window.webkit == undefined && window.androidHandlers == undefined) {
    //   window.alert("모바일로 접속해주세요");
    //   window.location.href = "https://banto.io";
    // }
  }, []);

  const dummyData = [
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    }
  ];

  return (
    <>
      <header></header>
      <body className="allBlack">
        <div className="rentSucessContainer">
          <img src={rentSucess} className="rentSuccessImage" alt="testA" />

          <p className="batteryRentCompleteText">대여가 완료됐습니다!</p>
        </div>
        <div className="kakaoPayRegisterButtonContainer">
          <button
            className="kakaoPayRegisterButton"
            onClick={() => {
              sessionStorage.clear();
              window.location.href = "/loginpage";
            }}
          >
            완료
          </button>
        </div>
      </body>
    </>
  );
}

export default BatteryRentCompleteForWeb;
