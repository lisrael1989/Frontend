import { restService } from "../services/rest.service.local.js"

export const SET_RESTS = 'SET_RESTS'

export const ADD_TO_CART = 'ADD_TO_CART'
export const CLEAR_CART = 'CLEAR_CART'

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_FILTER_BY = 'SET_FILTER_BY'

// const searchParams = new URLSearchParams(window.location.search)
const initialState = {
    rests: [],
    cart: []
}

export function restReducer(state = initialState, action = {}) {
    let rests


    switch (action.type) {
        case SET_RESTS:
            return { ...state, rests: action.rests }

        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.rest] }

        case REMOVE_FROM_CART:
            var cart = state.cart.filter(rest => rest._id !== action.restId)
            return { ...state, cart }

        case CLEAR_CART:
            return { ...state, cart: [] }

        default: return state
    }

}
