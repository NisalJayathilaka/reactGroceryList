import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  // save Items to localStorage
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  // add checked 
  const chekedItem = (item) => {
    const chekedItem = items.map((i) =>
      i.id === item.id ? { ...i, checked: !i.checked } : i
    );
    setAndSaveItems(chekedItem);
  };

  // delete Item
  const deleteItem = (item) => {
    const updatedItems = items.filter((i) => i.id !== item.id);
    setAndSaveItems(updatedItems);
  };

  // add Item
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, checked: false, item };
    const newItems = [...items, newItem];
    setAndSaveItems(newItems);
  };

  // submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <SearchItem search={search} setSearch={setSearch} />
      <AddItem
        handleSubmit={handleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        chekedItem={chekedItem}
        deleteItem={deleteItem}
      />
      <Footer itemCount={items.length} />
    </div>
  );
}

export default App;
