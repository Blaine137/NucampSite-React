

export const Partners = (state = {isLoading: true, errMess: null, partners: []}, action) => {
    switch (action.type) {

        case action.type.ADD_PARTNERS:
            return {...state, isLoading: false, errMess: null, partners: action.payload};
        case action.type.PARTNERS_LOADING:
            return {...state, isLoading: true, errMess: null, partners: []};
        case action.type.PARTNERS_FAILED:
            return{...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};