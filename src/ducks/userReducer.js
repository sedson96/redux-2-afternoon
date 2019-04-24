import axios from "axios"

const initialState = {
    email: null,
    firstName: null,
    lastName: null,
}
const REQUEST_USER_DATA = "REQUEST_USER_DATA"

export function requestUserData() {
    return {
        type: REQUEST_USER_DATA,
        payload: axios.get("/auth/user-data")
    }
}

function reducer (state = initialState, action) {
    const {type,payload} = action
    switch(type) {
        case `${REQUEST_USER_DATA}_FULFILLED`:
        const {firstName,lastName,email} = payload.data.user
        console.log(payload)
        return {firstName,lastName,email}
        default: return state
    }
}

export default reducer 