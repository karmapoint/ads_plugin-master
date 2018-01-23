import { connect,applyMiddleware } from 'react-redux'
import ApplicationComponent from 'Components/ApplicationComponent'
import * as actions from 'Actions'

const mapStateToProps = ( state, props ) => {
    debugger
    return {
      ...state.Application,
      username: state.Application.userLogin,
      password: state.Application.userPassword
    }
}

const mapDispatchToProps = (dispatch) => {

  // return actions;
  return {
    userSignInStart: function(){
      dispatch({type: "USER_SIGNIN_START"})
    },
    userClickedHandler: function() {
      dispatch({type: "USER_LOGIN_BUTTON_CLICK"})
    },
    userLoginKeyUp: function(value) {
      dispatch({type: "USER_GAVE_LOGIN_NAME", value })
    },
    userPwdKeyUp: function(value) {
      dispatch({type: "USER_GAVE_LOGIN_PASSWORD", value })
    },
    newTodoOnButtonClick: function() {
      dispatch({type: "NEW_TODO_BUTTON_CLICK", value })
    }
  };

}

const Junction = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationComponent)

export default Junction
