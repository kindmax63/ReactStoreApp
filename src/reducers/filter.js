const initialState = {
    searchQuery: '',
    filter: '',
};


const fn = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QUERY':
            return {
                ...state,
                searchQuery: action.payload,
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return  state;
    }
};

export default fn;