const reducer = (state, action) => {
    switch (action?.type) {
        case 'GET_ALL_REVIEWS':
            return [...action.payload];
        case 'ADD_REVIEW':
            return [...state, action.payload];
        case 'DELETE_REVIEW':
            return state.filter(review => review._id !== action.payload);
        case 'EDIT_REVIEW':
            return state.map(c => c._id === action.payload._id ? { ...c, text: action.payload.text } : c)

        default:
            return state;
    }
}

export default reducer;