import { connect } from 'react-redux'
import loginComponent from '../components/login.js'
import { stringAction } from '../actions'

//This is where state is catched (from the void) and copied over to the properties 
//of loginComponent
const mapStateToProps = (state, loginContainerProps) => ({
    userName: "User1"
})

const mapDispatchToProps = {
  onClickButton: stringAction
}

const loginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(loginComponent)

export default loginContainer