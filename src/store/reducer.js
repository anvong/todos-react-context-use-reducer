import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, EDIT_TODO } from './constants'

const initState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            let newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)

            return {
                ...state,
                todos: newTodos
            }
        case EDIT_TODO:
            const todoListEditing = [...state.todos];
            console.log('Recuder edited: ', action.payload)
            todoListEditing[action.payload] = state.todoInput;
            return {
                ...state,
                todos: todoListEditing
            };
        default:
            throw new Error('Invalid Action')
    }
}

export { initState }
export default reducer