//We are going to define a function that will accept any object that has a field id: string.

// Now we will use generic type T that extends Item. That means that we constrained our generic to have the fields that are defined on the Item interface. In this case the id field.

interface Item {
  id: string;
}

export const findItemIndexById = <T extends Item>(items: T[], id: string) => {
  return items.findIndex((item: T) => item.id === id);
};
