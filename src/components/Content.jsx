import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, chekedItem, deleteItem }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          chekedItem={chekedItem}
          deleteItem={deleteItem}
        />
      ) : (
        <p>Item List is empty</p>
      )}
    </main>
  );
};

export default Content;
