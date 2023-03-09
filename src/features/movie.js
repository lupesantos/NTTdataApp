import {createSlice} from '@reduxjs/toolkit'

export const movieSlice = createSlice({
    name: "movie",
    initialState: { value: { title: "", plot: "", actors: "", poster: "" } },
    reducers: {
        search: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { search } = movieSlice.actions;
export default movieSlice.reducer;