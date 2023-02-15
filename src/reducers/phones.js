const initialState = {
    isReady: false,
    items: null,
};

const fn = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PHONES':
            return {
            ...state,
            items: action.payload,
            isReady: true,
    };
        case 'SET_READY':
            return {
               ...state,
               isReady: action.payload,
            };
        default:
           return  state;
    }
};

export default fn;