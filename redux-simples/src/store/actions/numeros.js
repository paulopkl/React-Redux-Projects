// Action Creator
function changeMinimalNumber(newNumber) {
    return {
        type: 'NUM_MIN_ALTERADO',
        payload: newNumber
    }
}

function changeMaximumNumber(newNumber) {
    return {
        type: 'NUM_MAX_ALTERADO',
        payload: newNumber
    }
}

export { changeMinimalNumber, changeMaximumNumber };