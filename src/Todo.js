// Import useState to track user inputs with state variable:
import React, { useState } from 'react'

/* Import hooks:
  1. useSelector - to render the initial state - an empty list) to the screen
  2. useDispatch - dispatch actions back to the store
*/
import { useSelector, useDispatch } from 'react-redux'

// Import the same actions exported from toDoSlice:
import { addTodo, removeOne, clearTodo } from './features/todoSlice'

// Create function to handle list items
function Todo() {

    // Call useSelector to grab current initialState, and assign it to variable:
    const items = useSelector((state) => state.todos.items)

    // Add dispatch hook:
    const dispatch = useDispatch()

    // Instantiate a state variable to track the user's input; set the initial value an empty string:
    const [input, setInput] = useState('')

    // Create a variable to render the list of items:
    const renderItems = items.map((item, index) =>
        <li key={ index } onClick={ () => dispatch(removeOne(index)) }>{ item }</li>)

    // Create a function to be used by form element:
    const submitForm = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    /* Render a page which includes:
        1. A form (field and button) to input new list items
        2. The list of items inputted
        3. A button to clear the list
    */
    return (
        <div>
            <form onSubmit={ (e) => submitForm(e) }>
                <input type="text" onChange={ (e) => setInput(e.target.value) } />
                <button type="submit">Submit</button>
            </form>
            <ul>
                { renderItems }
            </ul>
            <button onClick={ () => dispatch(clearTodo()) }>Clear</button>
        </div>
    )
}

// Export component to be imported by App:
export default Todo
