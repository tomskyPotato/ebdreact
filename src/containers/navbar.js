import { connect } from 'react-redux'
import navbarComponent from '../components/navbar'

const mapStateToProps = (state) => ({
  currentUser: state.reducerUser.map(user => 
    (user.active === true)
      ? user.Vorname
      : null
    )
})

const navbarContainer = connect(
  mapStateToProps
)(navbarComponent)

export default navbarContainer