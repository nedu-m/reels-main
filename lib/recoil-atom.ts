import { atom, selector } from "recoil";

export const searchResults = atom({
  key: "searchResults",
  default: [],
});
