import { combineReducers } from "@reduxjs/toolkit";

import phonebookSlice from "./phonebook/phonebook-slice";
import filterReducer from "./filter/filter-slice";

const rootReducer = combineReducers({
    contacts: phonebookSlice,
    filter: filterReducer,
})

export default rootReducer; 