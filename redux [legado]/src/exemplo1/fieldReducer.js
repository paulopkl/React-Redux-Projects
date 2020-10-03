const INITIAL_STATE = { value: 'Opa' }

const handleChange = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'VALUE_CHANGED': {
            state.value = action.payload
            return { value: action.payload }
        }
        default: {
            return state
        }
    }
}

export default handleChange;