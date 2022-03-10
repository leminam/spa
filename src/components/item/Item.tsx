import { VFC } from "react";
import { Props } from "./types";

export const Item: VFC<Props> = ({ item }) => <div>{item.title}</div>;
