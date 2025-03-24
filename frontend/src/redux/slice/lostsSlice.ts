import { createSlice } from "@reduxjs/toolkit";
import { Lost } from "../../interfaces/models";

const initialState: { allLosts: Lost[] } = {
    allLosts: [],
};

const lostSlice = createSlice({
    name: "losts",
    initialState,
    reducers: {
        setAllLosts: (state, action) => {
            state.allLosts = action.payload
        },
        addLost: (state, action) => {
            state.allLosts.push(action.payload)
        }
    }
})
export const { setAllLosts } = lostSlice.actions
export default lostSlice.reducer

