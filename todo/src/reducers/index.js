import { ADD_TODO, TOGGLE_TODO } from '../actions';


const initialState = {
    todos: [
        {todo: "Clean Out Car", completed: false}
    ]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                todo: action.payload,
                completed: false
                
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    action.payload === index
                        ? { ...todo, completed: !todo.completed}
                        : todo
                )
            };
    
        default:
            return state;
    }
}



export default reducer;