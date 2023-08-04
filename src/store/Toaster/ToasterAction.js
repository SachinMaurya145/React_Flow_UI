import * as types from './ToasterTypes';

export const showToasterAction = (errorObj, toasterType) => {
  return {
    type: types.SHOW_TOASTER,
    errorObj,
    toasterType,
  };
};

export const hideToasterAction = () => {
  return {
    type: types.HIDE_TOASTER,
  };
};
