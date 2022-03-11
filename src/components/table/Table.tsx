import { VFC } from "react";
import { Props } from "./types";
import { Item } from "../item";

export const Table: VFC<Props> = ({ items, searchItem }) => {
  const FilterItems = items.filter((item) => {
    if (searchItem === "") {
      return item;
    } else if (
      item.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
    ) {
      return item;
    }
  });

  return (
    <div className="Content">
      <table className="bp3-html-table">
        <tbody>
          {FilterItems.map((item) => (
            <tr key={item.id}>
              <Item item={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
