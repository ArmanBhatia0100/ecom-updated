import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import basket from "./basketSlice";

export default configureStore({
  reducer: { basket },
});
