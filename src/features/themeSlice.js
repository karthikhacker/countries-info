import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkMode: false
    },
    reducers: {
        changeTheme: (state, action) => {
            console.log(action);
            state.darkMode = action.payload
        }
    }
})
export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;