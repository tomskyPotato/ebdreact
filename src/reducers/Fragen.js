import Fragen from '../data/bereiche.js'

const reducerFragen = (state = Fragen, action) => {
    switch(action.type){
        case "FRAGEN_AUSWAHL":
            return state.map(item => {
                if(item.id === action.id){
                    return {...item, active: true}
                }
                else{
                    return {...item, active: false}
                }
            })
        case "ERGEBNIS":
            return state.map(item => {
                if(item.id === action.entwicklungsBereichID){
                    return item.Fragen.map(item2 => {
                        console.log("item: " + item2.frage)
                        if(item2.id === action.id)
                            return {Ergebnis: action.value}
                        else
                            return Object.assign({}, {...item2})
                })
                }
                else
                    return {...item}
            })
        default:
            return state
    }
}

export default reducerFragen