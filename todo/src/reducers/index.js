import {ADD_TODO} from '../actions';

const initialState = {
    todos: [
        {}
    ]
};

function reducer(state = initialState, action) {
    switch (action.type) {
            
        case ADD_TODO:
            const newTodo = {
                todo: action.payload,
                
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
    
        default:
            return state;
    }
}



export default reducer;