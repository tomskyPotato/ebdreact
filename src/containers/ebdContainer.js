import { connect } from 'react-redux'
import { fragenAuswahl } from '../actions'
import ebd from '../components/ebdComponent.js'

const findActiveUser = (storeState) => {
  if(storeState === null)
    return
  const userName = storeState.map(item => 
    (item.active === true)
      ? item.Vorname
      : null
    ).join("")
  return userName
}

const findActiveUsersKind = (storeState) => {
  console.log(storeState)
  if(storeState === null)
    return
  const name = storeState.map(item => 
    (item.active === true)
      ? item.name
      : null
    ).join("")
  return name
}

const findActiveFragen = (storeState) => {
  console.log(storeState)
  if(storeState === null)
    return
  const frageID = storeState.map(item => {
    if(item.active === true){
       return item.id 
    }
    return null
  }).join("")
  
  return frageID
}

const mapStateToProps = (state) => ({
  currentUser: findActiveUser(state.reducerUser),
  currentKind: findActiveUsersKind(state.reducerKinder),
  currentFragenID: findActiveFragen(state.reducerFragen)
})

const mapDispatchToProps = {
  onClickButton: fragenAuswahl
}

const ebdContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ebd)

export default ebdContainer