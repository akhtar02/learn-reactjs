const CounterReducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state +1
        // case 'DECREMENT':
        //     return state -1
        default:
        throw new Error()
    }
}
export default CounterReducer;