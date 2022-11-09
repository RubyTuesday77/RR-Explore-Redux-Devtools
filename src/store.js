import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'

// Import reducer for new ToDo component (todoReducer) and add to store
import todoReducer from './features/todoSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer
    }
})