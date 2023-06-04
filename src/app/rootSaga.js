import { fork } from 'redux-saga/effects'
import watchLoginForm from '../redux/saga/authSaga'

export default function* rootSaga() {
   yield fork(watchLoginForm)
}
