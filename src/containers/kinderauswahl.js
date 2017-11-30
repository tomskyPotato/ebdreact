import { connect } from 'react-redux'
import loginComponent from '../components/login.js'
import { dropDownUser } from '../actions'
import kinderComponent from '../components/kinderauswahl'

const mapStateToProps = (state, kinderContainerProps) => ({
    kinderData: state.reducerKinder,
    currentKinder: state.reducerUser.map(user => 
      (user.active === true)
        ? user
        : null
      ),
    currentUser: state.reducerUser.map(user => 
      (user.active === true)
        ? user.Vorname
        : null
      )
})

const mapDispatchToProps = {
  onClickButton: dropDownUser
}

const kinderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(kinderComponent)

export default kinderContainer