import React, { createContext, useReducer, useContext } from "react";
import { AppState } from "./AppStateContext";

//The technique we are using here is called discriminated union (pipe symbol)

//Each interface has a type property. This property will be our discriminant. It means that Typescript can look at this property and tell what will be the other fields of the interface.
type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; taskId: string };
    };

export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: uuid(), text: action.payload, tasks: [] },
        ],
      };
    }
    case "ADD_TASK": {
      // Reducer logic here...
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
