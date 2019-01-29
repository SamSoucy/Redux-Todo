import { UPDATE_TODO} from '../actions';

const initialState = {
    todos: [
        {}
    ]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TODO:
    
            return {
                ...state,
                todo: action.payload
            };
    
    

        default:
            return state;
    }
}



export default reducer;