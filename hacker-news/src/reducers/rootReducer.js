
import { CREATE_SEARCH, FETCH_ARTICLES, FETCH_RESULTS_ERROR } from "../constants/searchConstants";


const rootReducer = (state = ({searches:[],results:[]}), action) => {
    switch (action.type) {
        case CREATE_SEARCH:
          return { ...state,
            searches: [...state.searches, action.userInput] };
        case FETCH_ARTICLES:
          return { ...state,
            results: action.results};
        case FETCH_RESULTS_ERROR:
          return {  
            error: action.payload
        };
        default: return state;
    }
}

export default rootReducer;

