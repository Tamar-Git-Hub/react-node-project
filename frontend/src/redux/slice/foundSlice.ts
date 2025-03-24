import { createSlice } from "@reduxjs/toolkit";
import { Found } from "../../interfaces/models";
const initialState: { allFounds: Found[] } = {
    allFounds: [],
};

const foundSlice = createSlice({
    name: "founds",
    initialState,
    reducers: {
        setAllFounds: (state, action) => {
            state.allFounds = action.payload
        },
        addFound: (state, action) => {
            state.allFounds.push(action.payload)
        }
    }
})
export const { setAllFounds } = foundSlice.actions
export default foundSlice.reducer