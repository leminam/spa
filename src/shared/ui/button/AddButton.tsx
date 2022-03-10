import { Button } from "@blueprintjs/core";
import { VFC } from "react";
import { Props } from "./types";

export const AddButton: VFC<Props> = ({ onClick }) => {
  return (
    <div>
      <form>
        <Button onClick={onClick}>+</Button>
      </form>
    </div>
  );
};
