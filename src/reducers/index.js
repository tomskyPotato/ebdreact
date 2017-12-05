import { combineReducers } from 'redux'

import reducerKinder from './kinder'
import reducerUser from './user'

//anmelde Status eines users ändern
const mainReducer = combineReducers({
    reducerUser,
    reducerKinder
})

export default mainReducer