export const ChangeValue = event => {
    return {
        type: 'VALUE_CHANGED',
        payload: event.target.value
    };
}