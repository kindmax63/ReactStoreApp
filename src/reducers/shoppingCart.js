const initialState = {
    items: []
};


const fn = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                items: [...state.items,
                action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(o => o.id != action.payload)
            };
        default:
            return  state;
    }
};

export default fn;