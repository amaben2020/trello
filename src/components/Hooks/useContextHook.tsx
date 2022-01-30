import React, { createContext, useReducer, useContext } from "react";
import { AppStateContext } from "../context/AppStateContext";

export const useContextHook = () => {
  console.log("appStateContext", useContext(AppStateContext));
  const { state } = useContext(AppStateContext);

  return { state };
};
