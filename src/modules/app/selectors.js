import { NAME } from "./constants";

export const getSomeState = state => {
  const moduleName = NAME;
  const appState = state[moduleName];
  if (!appState) {
    return [];
  }

  return appState.someState;
};
