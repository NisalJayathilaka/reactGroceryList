import React from "react";
import LineItem from "./LineItem";

const ItemList = ({ items, chekedItem, deleteItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          chekedItem={chekedItem}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
};

export default ItemList;
