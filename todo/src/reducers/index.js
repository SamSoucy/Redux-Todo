import { ADD_TODO, TOGGLE_TODO } from "../actions/index";

const initialState = {
    todos: [
        { todo: "Clean House", compleated: false }
    ]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                todo: action.payload,
                compleated: false
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
                        ? { ...todo, compleated: !todo.compleated }
                        : todo
                )
            };
        default:
            return state;
    }
}
export default reducer;

