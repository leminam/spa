import { VFC } from "react";
import { Props } from "./types";
import { Item } from "../item";

export const Table: VFC<Props> = ({ items, searchItem }) => {

  const FilterItems = items.filter((item) => {
    if (searchItem == "") {
      return item;
    } else if (
      item.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
    ) {
      return item;
    }
  });

  return (
    <div className="Content">
      {FilterItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
