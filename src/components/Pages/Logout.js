import React from "react";
import { Redirect } from "react-router-dom";

export const Logout = ({ ...props }) => {
  return <Redirect to="/" />;
};