import store from '../../store';
import {dispatchToasterError} from '../../utils/Shared';
import {redirectToLogin} from '../../store/UserAction';
import Auth from './../../utils/Auth';

export const isHandlerEnabled = (config = {}) => {
  return !(
    Object.prototype.hasOwnProperty.call(config, 'handlerEnabled') && !config.handlerEnabled
  );
};

export const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    const authToken = Auth.getToken()?.authToken;
    const language = Auth.getLanguage();
    if (authToken) {
      request.headers.Authorization = `Bearer ${authToken}`;
    }
    if (language) {
      request.headers['Accept-Language'] = language;
    }
  }
  return request;
};

export const successHandler = (response) => {
  if (isHandlerEnabled(response.config)) {
    const {responseType = 'json'} = response.config || {};
    if (responseType === 'blob') {
      return {file: response.data, headers: response.headers};
    }
  }
  return response.data;
};


export const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    const {response} = error;
    if (response?.status === 401) {
      dispatchToasterError({defaultMsg: response.data.message});
      if (Auth.isAuth) {
        Auth.signOut();
        store.dispatch(redirectToLogin());
      }
    }
  }
  return Promise.reject({...error});
};
