import { connect } from 'react-redux'
import { dropDownUser, kinderAuswahl } from '../actions'
import kinderComponent from '../components/kinderauswahl'

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

const vergleicheKinderID = (arr, Kinder) => {
  if(arr === null)
    return
  var kinderArray = {}
  Kinder.map(item => {
    for(let i=0;i<=arr.length;i++){
      if(item.id === arr[i]){
        kinderArray[i] = item
      }
    }
  })
  console.log(kinderArray)
  return kinderArray
}

const findActiveUsersKinder = (storeState) => {
  const arr = storeState.reducerUser.map(item => 
    (item.active === true)
      ? item.KinderID
      : null
    )
  let arr2 = null
  for(let i=0;i<=arr.length;i++){
    if(arr[i] != null)
      arr2 = arr[i]
  }
  var arr3 = vergleicheKinderID(arr2, storeState.reducerKinder)
  return Object.values(arr3)
}

const mapStateToProps = (state) => ({
  currentUser: findActiveUser(state.reducerUser),
  currentKinder: findActiveUsersKinder(state)
})

const mapDispatchToProps = {
  onClickButton: kinderAuswahl
}

const kinderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(kinderComponent)

export default kinderContainer