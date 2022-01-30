import React, { createContext, useReducer, useContext } from "react";

export const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

interface AppStateContextProps {
  state: AppState;
}

//single task
interface Task {
  id: string;
  text: string;
}
interface List {
  id: string;
  text: string;
  // group of tasks in a house
  tasks: Task[];
}

//The technique we are using here is called discriminated union (pipe symbol)
type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; taskId: string };
    };

export interface AppState {
  lists: List[];
}

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};
export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const { Provider } = AppStateContext;
  return <Provider value={{ state: appData }}>{children}</Provider>;
};

//custom hooks
//Inside of this function, we retrieve the value from AppStateContext using useContext

export const useAppState = () => {
  return useContext(AppStateContext);
};
