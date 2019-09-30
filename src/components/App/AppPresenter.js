import Footer from "components/Footer";
import styles from "./styles.scss";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import React from "react";
import Auth from "components/Auth";
import Navigation from "../Navigation";

const AppPresenter = props => {
  const { isLoggedIn } = props;
  return (
    <>
      {props.isLoggedIn ? <Navigation /> : null}
      {isLoggedIn ? (
        <PrivateRouter></PrivateRouter>
      ) : (
        <PublicRouter></PublicRouter>
      )}
      <Footer></Footer>
    </>
  );
};

const PrivateRouter = props => (
  <>
    <Route exact path="/" render={() => "logged in ! "} />
    <Route path="/explore" render={() => "explore !"} />
  </>
);

const PublicRouter = props => (
  <>
    <Route exact path="/" component={Auth}></Route>
    <Route exact path="/forgot" render={() => "forgot password"}></Route>
  </>
);

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppPresenter;
