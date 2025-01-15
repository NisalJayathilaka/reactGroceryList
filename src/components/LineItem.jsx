import React from "react";
import { FaTrash } from "react-icons/fa";

const LineItem = ({ item, chekedItem, deleteItem }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => chekedItem(item)}
      />
      <label
        style={{ textDecoration: item.checked ? "line-through" : null }}
        onDoubleClick={() => chekedItem(item)}
      >
        {item.item}
      </label>
      <FaTrash
        role="button"
        tabIndex={0}
        onClick={() => deleteItem(item)}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
