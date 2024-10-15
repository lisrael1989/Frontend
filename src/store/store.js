import { legacy_createStore as createStore, combineReducers } from 'redux'

import { restReducer } from './rest.reducer.js'

import { systemReducer } from './loading.reducer.js'
import { orderReducer } from './order.reducer.js'

const rootReducer = combineReducers({
    restModule: restReducer,
    systemModule: systemReducer,
    orderModule: orderReducer,
})


const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)


// store.subscribe(() => {
//     console.log('**** Store state changed: ****')
//     console.log('storeState:\n', store.getState())
//     console.log('*******************************')
// })



