import { configureStore } from '@reduxjs/toolkit'

import createSagaMiddleware from 'redux-saga'
import authReducer from '../redux/reducer/auth'
import mainReducer from '../redux/reducer/main'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
   reducer: {
      auth: authReducer,
      main: mainReducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
