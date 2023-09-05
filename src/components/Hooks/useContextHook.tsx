import { useContext } from "react";
import { AppStateContext } from "../context/AppStateContext";

export const useContextHook = () => {
  const { state } = useContext(AppStateContext);

  return { state };
};
