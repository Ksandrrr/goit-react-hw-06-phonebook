import { createSlice } from "@reduxjs/toolkit";

const filterReducer = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        setFilter: (_, {payload}) => payload,
    }
})

export const {setFilter} = filterReducer.actions;

export default filterReducer.reducer;