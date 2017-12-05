import { connect } from 'react-redux'
import { dropDownUser, kinderAuswahl } from '../actions'
import ebd from '../components/ebd.js'

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
  if(storeState === null)
    return
  const name = storeState.map(item => 
    (item.active === true)
      ? item.name
      : null
    ).join("")
  return name
}

const mapStateToProps = (state) => ({
  currentUser: findActiveUser(state.reducerUser),
  currentKind: findActiveUsersKind(state.reducerKinder)
})

const mapDispatchToProps = {
  onClickButton: kinderAuswahl
}

const ebdContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ebd)

export default ebdContainer