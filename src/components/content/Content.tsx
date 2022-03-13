import { useState } from "react";
import { setId, setTitle } from "../../shared";
import { Table } from "../table";
import { NavigationBar } from "../navigation";

export const Content = () => {
  const [items, setItems] = useState([{ id: 0, title: "" }]);

  const addNewItem = (e: any) => {
    e.preventDefault();
    const NewItem = {
      id: setId(),
      title: setTitle(),
    };
    setItems([...items, NewItem]);
  };

  const [searchItem, setSearchItem] = useState("");

  return (
    <div>
      <NavigationBar onClick={addNewItem} setSearchItem={setSearchItem} />
      <Table items={items} searchItem={searchItem} />
    </div>
  );
};
