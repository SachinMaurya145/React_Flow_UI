/* eslint-disable no-unused-vars */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import store from '../store';
import Auth from '../utils/Auth';
import { dispatchToasterError, dispatchToasterSuccess } from '../utils/Shared';
import * as ACTIONS from './UserAction';
import { redirectToLogin } from './UserAction';
import * as API from './UserApis';
import * as MSG from './UserMessages';
import * as TYPES from './UserTypes';

export function* loginSaga(action) {
  try {
    const response = yield call(API.login, action.payload);


    yield call(Auth.signIn, response?.data || {});
    if (action.successCallback) {
      yield call(action.successCallback);
    }
    yield put(ACTIONS.loginResponse(response));
    dispatchToasterSuccess({ defaultMsg: MSG.loginSuccess });
  } catch (err) {
    yield put(ACTIONS.loginHttpResponse(err.response.data.httpCode));
    yield put(ACTIONS.loginCustomResponse(err.response.data));
    if (err.response.data.httpCode === 500) {

      alert(err.response.data.customMsg);



    }
    yield call(Auth.signOut);
    dispatchToasterError({
      payload: err?.response?.data,
      defaultMsg: MSG.loginFailed,
    });
  } finally {
    if (action.loaderCallback) {
      yield call(action.loaderCallback);
    }
  }
}

export function* logoutSaga(action) {
  try {
    if (Auth.isAuth) {
      yield call(API.logout, action.payload);
    }
    yield call(Auth.signOut);
    dispatchToasterSuccess({ defaultMsg: MSG.logoutSuccess });
    if (action.successCallback) {
      yield call(action.successCallback);
    }
  } catch (err) {
    dispatchToasterError({
      payload: err?.response?.data,
      defaultMsg: MSG.logoutFailed,
    });
  } finally {
    yield call(action.loaderCallback);
  }
}

export function* userListSaga(action) {
  try {
    const response = yield call(API.userList, action);
    yield put(ACTIONS.userListResponse(response.data));
  } catch (err) {
    dispatchToasterError({
      payload: err?.response?.data,
      defaultMsg: MSG.tagListFailed,
    });
  } finally {
  }
}


export function* roleListSaga(action) {
  try {
    const response = yield call(API.roleList, action);
    yield put(ACTIONS.roleListResponse(response.data));
  } catch (err) {
    dispatchToasterError({
      payload: err?.response?.data,
      defaultMsg: MSG.tagListFailed,
    });
  } finally {
  }
}


export function* walletListSaga(action) {
  try {
    const response = yield call(API.walletList, action);
    console.log(" RES P " , response);
    
    yield put(ACTIONS.walletResponseData(response));
    // yield put(ACTIONS.walletListHttpResponse(response.httpCode));
  } catch (err) {
   
    dispatchToasterError({
      payload: err?.response?.data,
      defaultMsg: MSG.tagListFailed,
    });

  } finally {
  }
}


export function* mintGassaga(action) {
  try {
    yield call(action.loaderCallback);
    const response = yield call(API.mintGas, action);
    // yield put(ACTIONS.mintGasResponse(response.data));
    // yield put(ACTIONS.newMintDataResponse(response.data));

    yield call(action.successCallback);
  } catch (err) {
    yield call(action.failedCallback);
    // yield put(ACTIONS.loginHttpResponse(err.response.data.httpCode));
    // yield put(ACTIONS.loginCustomResponse(err.response.data.customMsg));
    if (err.response.data.httpCode === 500) {

      alert(err.response.data.customMsg);
    }
    dispatchToasterError({
      payload: err?.response?.data,
      defaultMsg: MSG.tagListFailed,
    });
  } finally {
  }
}

export function* mintSaga(action) {
  try {
    yield call(action.loaderCallback)
    const response = yield call(API.mint, action.payload);

    // yield put(ACTIONS.MintResponseHttp(response.httpCode));
    yield call(action.successCallback)
    dispatchToasterSuccess({ defaultMsg: MSG.mintSuccess });
    // if (Auth.isAuth) {
    //   Auth.signOut();
    //   store.dispatch(redirectToLogin());
    // }
    // yield call(action.successCallback);
  } catch (err) {
    yield call(action.failedCallback)
    dispatchToasterError({
      payload: err?.response?.data,
      defaultMsg: MSG.changePasswordFailed,
    });
  } finally {

  }
}

export function* updateNftSaga(action) {

  try {
    const response = yield call(API.updateNftCollection, action.payload);
    

  } catch (err) {
   
    dispatchToasterError({
      payload: err?.response?.data,
      defaultMsg: MSG.tagListFailed,
    });
  } finally {
  }
}

export function* nftSingleSaga(action) {

  try {
    const response = yield call(API.nftSingleList, action);
    console.log("nftSingleList <<<<<<<<< " , response);

    yield put(ACTIONS.nftSingleListResponse(response));
  } catch (err) {
    dispatchToasterError({
      payload: err?.response?.data,
      defaultMsg: MSG.walletFailed,
    });
  } finally {
  }
}

export function* UserSagas() {
  yield all([
    takeLatest(TYPES.LOGIN_REQUEST, loginSaga),
    takeLatest(TYPES.LOGOUT_REQUEST, logoutSaga),
    takeLatest(TYPES.USER_LIST, userListSaga),
    takeLatest(TYPES.ROLE_LIST, roleListSaga),
    takeLatest(TYPES.WALLET_LIST, walletListSaga),
    takeLatest(TYPES.MINT_GAS, mintGassaga),
    takeLatest(TYPES.MINT_REQUEST, mintSaga),
    takeLatest(TYPES.UPDATE_NFT_REQUEST, updateNftSaga),
    takeLatest(TYPES.NFT_SINGLE_LIST, nftSingleSaga),

    

    
 

  ]);
}
