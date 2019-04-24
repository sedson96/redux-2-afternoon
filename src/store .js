import  {createStore,combineReducers,applyMiddleware} from "redux"
import promiseMiddleware from "redux-promise-middleware"
import budget from "./ducks/budgetReducer"
import user from "./ducks/userReducer"


const rootReducer = combineReducers({
    budget,
    user
})

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))


export default store