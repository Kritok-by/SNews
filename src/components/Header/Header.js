import React from "react";
import Authorized from "./Authorized/Authorized";
import "./Header.scss";
import NotAuthorized from "./NotAuthorized/NotAuthorized";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUrl, numberTab } from "../../redux/Actions";

export const Header = () => {
  const dispatch = useDispatch(),
    url = "https://conduit.productionready.io/api/articles?limit=10&offset=",
    auth = useSelector((state) => state.autorize.currentUser);
  const ifAuth = () => {
    return auth.id === undefined ? <NotAuthorized /> : <Authorized />;
  };
  const toMain = () => {
    dispatch(currentUrl(url));
    dispatch(numberTab(1));
  };

  return (
    <header>
      <nav className="navigation ">
        <div className="center">
          <Link to="/">
            <div className={`logo`} onClick={toMain}>
              <img
                src={require("./img/logo.svg")}
                alt=""
                className={`main-logo-img`}
              />
            </div>
          </Link>
          {ifAuth()}
        </div>
      </nav>
    </header>
  );
};
