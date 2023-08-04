import store from '../store';
import {hideLoaderAction, showLoaderAction} from '../store/Loader/LoaderAction';
import {hideToasterAction, showToasterAction} from '../store/Toaster/ToasterAction';
import {logout} from '../store/UserAction';

export function dispatchToasterError(errorObj) {
  store.dispatch(showToasterAction(errorObj, 'error'));
}

export function dispatchToasterSuccess(message) {
  store.dispatch(showToasterAction(message, 'success'));
}

export function dispatchToasterHide() {
  store.dispatch(hideToasterAction());
}

export function signOut() {
  store.dispatch(logout());
}

export function showLoader() {
  store.dispatch(showLoaderAction());
}

export function hideLoader() {
  store.dispatch(hideLoaderAction());
}
