import { user } from '../data'

const reducerUser = (state = user, action) => {
    switch(action.type){
        case "DROP_DOWN_USER":
            return state.map(user =>
            (user.id === action.id)
                ? {...user, active: !user.active}
                : {...user, active: false}
            )
        default:
            return state
    }
}

export default reducerUser