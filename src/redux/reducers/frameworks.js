const initialState = ['angular']

function changeFramework(state = initialState, action) {
    // console.log('1', state)
    switch (action.type) {
        case 'ADD_FRAMEWORK':
            return [...state, action.payload]
            break;
        case 'DELETE_FRAMEWORK':
            return state
            break;
        default:
            return state
    }
}

export default changeFramework;