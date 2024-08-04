import { restService } from '../services/rest.service.local.js'
// import { userService } from '../services/user.service.js'
import { store } from './store.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, SET_RESTS, SET_FILTER_BY, SET_SORT_BY } from './rest.reducer.js'

import { LOADING_DONE, LOADING_START } from './loading.reducer.js'



export async function loadRests(filterBy, sortBy) {

    store.dispatch({ type: 'LOADING_START', isLoading: true })
    try {
        const rests = await restService.query(filterBy, sortBy)
        store.dispatch({ type: SET_RESTS, rests })
    } catch (err) {
        console.error('Cannot load rests', err)
        throw err
    } finally {
        store.dispatch({ type: 'LOADING_DONE', isLoading: false })
    }
}

export function setSortBy(sortBy) {

    store.dispatch({ type: SET_SORT_BY, sortBy })
}
export function setFilterBy(filterBy) {
    store.dispatch({ type: SET_FILTER_BY, filterBy })
}

export function addToCart(rest) {
    store.dispatch({
        type: ADD_TO_CART,
        rest
    })
}

export function removeFromCart(restId) {
    store.dispatch({
        type: REMOVE_FROM_CART,
        restId
    })
}

export async function checkout(total) {
    try {
        const score = await userService.changeScore(-total)
        store.dispatch({ type: SET_SCORE, score })
        store.dispatch({ type: CLEAR_CART })
        return score
    } catch (err) {
        console.log('restActions: err in checkout', err)
        throw err
    }
}


// Demo for Optimistic Mutation
// (IOW - Assuming the server call will work, so updating the UI first)

