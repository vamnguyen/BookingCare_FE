import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./Header/HomeHeader";
import Banner from "./Banner/Banner";

class HomePage extends Component {
  render() {
    return (
      <>
        <HomeHeader />
        <Banner />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
