import React from "react";
import { Route } from "react-router-dom";
import Header from "../Components/Header/Header";

export const HomeTemplate = (props) => {
  let { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div>
            <Header />
            <Component {...propsRoute} />
          </div>
        );
      }}
    />
  );
};
