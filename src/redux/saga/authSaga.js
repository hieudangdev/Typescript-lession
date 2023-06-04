import { call, fork, put, take, takeLatest } from 'redux-saga/effects'
import { authActions } from '../reducer/auth'
import { fetchlogin, fetchregister } from '../../api/auth'

function* handlelogin(payload) {
   try {
      const response = yield call(fetchlogin, payload)
      put(authActions.loginSuccess.type, response)
   } catch (error) {
      console.log(error)
   }
}

function* handleregister(action) {
   try {
      const res = yield call(fetchregister, action.payload)
      console.log(res)
      put(authActions.registerSuccess.type, res.data)
   } catch (error) {
      put(authActions.registerFailed(error.message))
      // console.log(error)
   }
}

function* handlelogout() {
   yield localStorage.removeItem('access_token')
}

export default function* watchLoginForm() {
   yield takeLatest(authActions.register.type, handleregister)
   yield takeLatest(authActions.logout.type, handlelogout)
}
