import axios from "axios";

const initialState = {
    purchases: [],
    budgetLimit: null,
    loading: true,
}

const REQUEST_BUDGET_DATA ="REQUEST_BUDGET_DATA"
const ADD_PURCHASE ="ADD_PURCHASE"
const REMOVE_PURCHASE ="REMOVE_PURCHASE"

export function requestBudgetData() {
    return {
        type: REQUEST_BUDGET_DATA,
        payload: axios.get("/api/budget-data")
    }
}

export function addPurchase (price,description,category){
    return {
        type: ADD_PURCHASE,
        payload: axios.post("/api/budget-data/purchase", {price,description,category})
    }
}
export function removePurchase (id){
    return {
        type: REMOVE_PURCHASE,
        payload: axios.delete(`/api/budget-data/purchase/${id}`)
    }
}

function reducer (state = initialState, action) {
    const {type,payload} = action
    console.log(type)
    switch(type) {
        case `${REQUEST_BUDGET_DATA}_FULFILLED`: 
            return {...state, ...payload.data, loading: false}
        case `${REMOVE_PURCHASE}_FULFILLED`: 
            console.log(payload.data)
            return { ...state, purchases: payload.data }
        case `${ADD_PURCHASE}_FULFILLED`: 
            return {...state, purchases: payload.data}
        default: console.log('here');
        return state
    }
}

export default reducer 