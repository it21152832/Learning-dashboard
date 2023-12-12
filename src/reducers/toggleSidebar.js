import {createSlice} from '@reduxjs/toolkit'

export const toggleSidebarSlice = createSlice ({
    name: "toggle-slice",
    initialState:{
        toggleSidebar :true,
    },
    reducers:{
        toggleSidebar: (state) => {
            state.toggleSidebar = !state.toggleSidebar
        },
        toggleSidebarClose: (state) => {
            state.toggleSidebar= true
        }
    }
})

export default toggleSidebarSlice