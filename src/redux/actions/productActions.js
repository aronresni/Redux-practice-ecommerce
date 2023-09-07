//CREAMOS 3 ACCIONES DE LAS ACTION TYPES
import { Provider } from "react-redux"
import { ActionTypes } from "../contants/action-types"
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: products,
    }
}

export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}