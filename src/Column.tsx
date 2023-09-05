import React from 'react';
import { AddNewItem } from './components/AddNewItem';
import { ColumnTitle, ColumnContainer } from './styles';
import { useContextHook } from './components/Hooks/useContextHook';
interface ColumnProps {
  text: string;
  // children?: React.ReactNode;
  index: number;
}
export const Column = ({
  text,
  // children,
  index,
}: React.PropsWithChildren<ColumnProps>) => {
  const { state } = useContextHook();
  console.log('state in column', state);
  // console.log(children);
  return (
    <ColumnContainer>
      <ColumnTitle>
        {text} - {index}
      </ColumnTitle>
      {/* {children} */}
      <AddNewItem
        toggleButtonText='+ Add another task'
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
