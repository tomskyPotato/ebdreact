import { connect } from 'react-redux'
import loginComponent from '../components/login.js'
import { dropDownUser } from '../actions'

//This is where state is catched (from the void) and copied over to the properties 
//of loginComponent
const mapStateToProps = (state, loginContainerProps) => ({
    userData: state.reducerUser,
    currentUser: state.reducerUser.map(user => 
      (user.active === true)
        ? user.email
        : null
      )
})

const mapDispatchToProps = {
  onClickButton: dropDownUser
}

const loginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(loginComponent)

export default loginContainer