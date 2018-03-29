import { kinder } from '../data'

const reducerKinder = (state = kinder, action) => {
    switch(action.type){
        case "KINDERAUSWAHL":
            return state.map(kind =>
            (kind.id === action.id)
                ? {...kind, active: true}
                : {...kind, active: false}
            )
        default:
            return state
    }
}

export default reducerKinder