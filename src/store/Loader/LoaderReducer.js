import * as types from './LoaderTypes';

const INITIAL_STATE = {
  show: false,
  api: '',
  loaderType: 'button',
  variant: 'dark',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_LOADER:
      return {
        ...state,
        show: true,
        loaderType: action.loaderType || 'button',
      };
    case types.HIDE_LOADER:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};
