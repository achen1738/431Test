import { defineAction } from "redux-define";
import { NAME } from "./constants";
import { CANCELLED, ERROR, PENDING, SUCCESS } from "./stateConstants";

export const SOME_ACTION = defineAction(
  "SOME_ACTION",
  [CANCELLED, ERROR, PENDING, SUCCESS],
  NAME
);
