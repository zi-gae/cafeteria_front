import Footer from "components/Footer";
import "./styles.scss";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import React from "react";
import Auth from "components/Auth";
import Navigation from "../Navigation";
import Feed from "components/Feed";
import Search from "components/Search";

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
    <Route exact path="/" component={Feed} />
    <Route path="/explore" render={() => "explore !"} />
    <Route path="/search/:searchTerm" component={Search} />
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
