import { useState } from "react";
import { setId, setTitle } from "../../shared";
import { Table } from "../table";
import { NavigationBar } from "../navigation";
import { Column, Table2 } from "@blueprintjs/table";

export const Content = () => {

  const [items, setItems] = useState([{ id: "", title: "" }]);

  const addNewItem = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const NewItem = {
      id: setId(),
      title: setTitle(),
    };
    setItems([...items, NewItem]);
  };

  const [searchItem, setSearchItem] = useState("");

  return (
    <div className="Wrapper">
      <NavigationBar onClick={addNewItem} setSearchItem={setSearchItem} />
      <Table items={items} searchItem={searchItem}/>
    </div>
  );
};
