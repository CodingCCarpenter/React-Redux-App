import axios from 'axios';

export const POTTERDATA_LOAD_START = 'POTTERDATA_LOAD_START';
export const POTTERDATA_LOAD_SUCCESS = 'POTTERDATA_LOAD_SUCCESS';
export const POTTERDATA_LOAD_FAILURE = 'POTTERDATA_LOAD_FAILURE';

export const getPotterHouseData = () => dispatch => {
    dispatch({ type: POTTERDATA_LOAD_START });  
axios
    .get('API URL HERE')
    .then(res =>
        dispatch({
            type: POTTERDATA_LOAD_SUCCESS,
            payload: res.data.value
        })
    )
    .catch(err => {
        console.log(err);
        dispatch({
            type: POTTERDATA_LOAD_FAILURE,
            payload: 'error loading data'
        });
    });
};