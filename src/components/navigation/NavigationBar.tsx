import { InputGroup } from "@blueprintjs/core";
import { VFC } from "react";
import { AddButton } from "../../shared/ui/button/AddButton";
import { Props } from "./types";

export const NavigationBar: VFC<Props> = ({ onClick, setSearchItem }) => {
  return (
    <div className="Navigation">
      <InputGroup
        className="SearchInput"
        placeholder="Search..."
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <AddButton onClick={onClick} />
    </div>
  );
};
