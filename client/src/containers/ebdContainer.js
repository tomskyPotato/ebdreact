import { connect } from 'react-redux'
import { fragenAuswahl, ergebnis } from '../actions'
import ebd from '../components/ebdComponent.js'

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
  onClickButton: fragenAuswahl,
  onClickErgebnis: ergebnis
}

const ebdContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ebd)

export default ebdContainer