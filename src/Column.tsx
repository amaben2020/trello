import React from "react";
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
    </ColumnContainer>
  );
};
