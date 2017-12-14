import Fragen from '../data/bereiche.js'

const reducerFragen = (state = Fragen, action) => {
    switch(action.type){
        case "FRAGEN_AUSWAHL":
            return state.map(frage => {
                if(frage.id === action.id){
                    return {...frage, active: true}
                }
                else{
                    return {...frage, active: false}
                }
            })
        default:
            return state
    }
}

export default reducerFragen