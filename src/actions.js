import { CHANGE_SEARCH_FIELD } from "./constants.JS";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});
