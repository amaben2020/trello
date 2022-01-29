import React from "react";
import { AddNewItem } from "./components/AddNewItem";
import { ColumnTitle, ColumnContainer } from "./styles";

interface ColumnProps {
  text: string;
  children?: React.ReactNode;
}
export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
