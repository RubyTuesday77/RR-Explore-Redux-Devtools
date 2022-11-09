// Import createSlice from Redux toolkit:
import { createSlice } from '@reduxjs/toolkit'


// Establish initial state:
const initialState = {
    items: []
}

/* Build and export todoSlice function which adds actions to add (addTodo), remove (removeOne) and clear (clearTodo)
list items: */
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload] }
        },
        removeOne: (state, action) => {
            console.log(action)
            let array = [...state.items]
            let index = action.payload
            if(index !== -1) {
                array.splice(index, 1)
                return { items: array }
            }
        },
        clearTodo: () => {
            return { items: [] }
        }
    }
})


// Export todoSlice actions:
export const { addTodo, removeOne, clearTodo } = todoSlice.actions

// Export todoSlice reducer as default export
export default todoSlice.reducer