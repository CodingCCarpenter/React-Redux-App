import axios from 'axios';

export const SORTINGHAT_LOAD_START = 'SORTINGHAT_LOAD_START';
export const SORTINGHAT_LOAD_SUCCESS = 'SORTINGHAT_LOAD_SUCCESS';
export const SORTINGHAT_LOAD_FAILURE = 'SORTINGHAT_LOAD_FAILURE';

export const getPotterHouseData = () => dispatch => {
    dispatch({ type: SORTINGHAT_LOAD_START });  
axios
    .get('https://www.potterapi.com/v1/sortingHat')
    .then(res =>
        dispatch({
            type: SORTINGHAT_LOAD_SUCCESS,
            payload: res.data.value
        })
    )
    .catch(err => {
        console.log(err);
        dispatch({
            type: SORTINGHAT_LOAD_FAILURE,
            payload: 'error loading data'
        });
    });
};