
import initialStateJSON from '../data/reduxStore.json'

//anmelde Status eines users ändern
const userStateManager = (state = initialStateJSON, action) => {
    switch(action.type){
        case 'CHANGE_USER_STATE':
            return action.userState
        default:
            return state
    }
}

export default userStateManager