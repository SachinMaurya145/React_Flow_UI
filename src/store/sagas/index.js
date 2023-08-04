import {all} from 'redux-saga/effects';

import {UserSagas} from '../UserSagas';

export function* watchSagas() {
  yield all([
    UserSagas()
  ]);
}
