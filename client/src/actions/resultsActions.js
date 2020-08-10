import axios from 'axios';

//Async function passing in query to retrieve results 

export const fetchResults = (query) => {
        return async (dispatch) => {
            try {
                const response = await axios.get("https://hn.algolia.com/api/v1/search?query=" + query);
                dispatch({ type: 'FETCH_ARTICLES', results: response.data.hits });
            }
            catch (err) { dispatch({ type: 'FETCH_RESULTS_ERROR', err }); }
        }
    }

