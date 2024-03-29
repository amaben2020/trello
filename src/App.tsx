import React from "react";
import { Column } from "./Column";
import { Card } from "./Card";
import { AppContainer } from "./styles";
import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./components/context/AppStateContext";
import { useContextHook } from "./components/Hooks/useContextHook";
import { NewItemForm } from "./components/NewItemForm";

function App() {
  const { state, dispatch } = useAppState();

  // const { state, dispatch } = useContextHook();
  // console.log("SATTATE", state);

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column key={list.id} text={list.text} index={i} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  );
}

export default App;
