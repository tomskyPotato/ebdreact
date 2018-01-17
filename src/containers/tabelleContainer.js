import { connect } from 'react-redux'
import { fragenAuswahl } from '../actions'
import Tabelle from '../components/tabComponent.js'

const findActiveObject = (storeState) => {
  let arrayTemp = null
  if(storeState === null)
    return
  storeState.map(item => {
    if(item.active === true){
      arrayTemp = item
      return null
    }
    else
      return null    
    }).join("")
  return arrayTemp
}

const mapStateToProps = (state) => ({
  currentUser: findActiveObject(state.reducerUser),
  currentKind: findActiveObject(state.reducerKinder),
  currentFragen: findActiveObject(state.reducerFragen)
})

const mapDispatchToProps = {
  onClickButton: fragenAuswahl
}

const tabelleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabelle)

export default tabelleContainer