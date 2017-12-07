import { connect } from 'react-redux'
import loginComponent from '../components/loginComponent.js'
import { dropDownUser } from '../actions'

const mapStateToProps = (state) => ({
    userData: state.reducerUser
})

const mapDispatchToProps = {
  onClickButton: dropDownUser
}

const loginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(loginComponent)

export default loginContainer