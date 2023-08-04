import moment from 'moment';
import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import axiosInstance, { microServices } from '../network/apis';
import Auth from '../utils/Auth';
import reducers from './reducers';
import {watchSagas} from './sagas';

const REFRESH_TIME = 5;
const saga = createSagaMiddleware();
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const refreshMiddleware = () => (next) => async (action) => {
  const expiryTime = Auth.getExpiryTime();
  const refreshToken = Auth.getRefreshToken();
  const timeDifferenceInMin = moment.duration(moment(expiryTime).diff(moment())).asMinutes();
  if (Auth.isAuth() && parseInt(timeDifferenceInMin) < REFRESH_TIME) {
    const response = await axiosInstance('get', `refresh-token?refresh_token=${refreshToken}`, {
      server: microServices.GLOBAL_ADMIN_URL,
    });
    Auth.refreshToken(response.payload);
  }
  next(action);
};

const createStoreWithMiddleware = applyMiddleware(refreshMiddleware, saga);
const enhancer = composeEnhancers(createStoreWithMiddleware);

const store = createStore(reducers, enhancer);

saga.run(watchSagas);

export default store;
