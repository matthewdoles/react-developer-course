const redux = require('redux')
const createStore = redux.createStore

const initalstate = {
    counter: 0
}


// Reducer
const rootReducer = (state = initalstate, action) => {
    return state
}

// Store
const store = createStore(rootReducer)
console.log(store.getState())

// Action


// Subscription