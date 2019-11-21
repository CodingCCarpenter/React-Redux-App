import {
    SORTINGHAT_LOAD_START,
    SORTINGHAT_LOAD_SUCCESS,
    SORTINGHAT_LOAD_FAILURE
}  from '../actions/sortingActions';


const initialState = {
    isLoading = false,
    error: "Someone grab the time turner! We have an error!",
    house: "Hmmm... Better be ..."
};

const sortingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORTINGHAT_LOAD_START:
            return {
                ...state,
                isLoading: true
            };
        case SORTINGHAT_LOAD_SUCCESS:
            return {
                ...state,
                house: {
                    { state.house }
                }
            }
    }
}
