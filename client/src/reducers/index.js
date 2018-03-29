import { combineReducers } from 'redux'

import reducerKinder from './kinder'
import reducerUser from './user'
import reducerFragen from './Fragen'

//anmelde Status eines users ändern
const mainReducer = combineReducers({
    reducerUser,
    reducerKinder,
    reducerFragen
})

export default mainReducer