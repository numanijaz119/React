import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items)=>items.map(item=>item.id === id ? {...item, packed: !item.packed} : item))
  } 

  function hadleClearList(){
    const confirm = window.confirm("Are you sure you want to delete everything?")
    if (confirm)  setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
    <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={hadleClearList} />
      <Stats items={items} />
    </div>
  );
}
