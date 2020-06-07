import * as ActionTypes from './ActionTypes'
import axios from 'axios'

export const loginLoading = () => ({
    type: ActionTypes.LOGIN_LOADING
})

export const loginFailed = errMess => ({
    type: ActionTypes.LOGIN_FAILED,
    payload: errMess
})

export const loginSuccess = logintoken => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload : logintoken
})



export const loginUser = credentials => dispatch =>{

    axios
      .post('users/login', credentials, { "content-type": "application/json"})
      .then(res => {
          const {token} = res.data
          localStorage.setItem("jwtToken", token);
          // Set token to Auth header
          setAuthToken(token);
          // Decode token to get user data
          const decoded = jwt_decode(token);
          // Set current user
          dispatch(setCurrentUser(decoded));
          dispatch(getUserProfile(decoded.id));
          console.log("in the post axios login ", decoded.id)
          history.push('/myprofile')
      })

    .catch(error => {
      console.log('post comment', error.message, error);
      alert('We were unable to log you in \nError: ' + error.message);
    })
}
