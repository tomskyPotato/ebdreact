import Fragen from '../data/bereiche.js'

const reducerFragen = (state = Fragen, action) => {
    switch(action.type){
        case "FRAGEN_AUSWAHL":
            return state.map(frage =>
            (frage.id === action.id)
                ? {...frage, active: true}
                : {...frage, active: false}
            )
        default:
            return state
    }
}

export default reducerFragen