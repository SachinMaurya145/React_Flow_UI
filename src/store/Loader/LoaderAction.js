import * as types from './LoaderTypes';

export const showLoaderAction = (loaderConfig) => {
  return {
    type: types.SHOW_LOADER,
    show: true,
    loaderType: loaderConfig?.loaderType,
  };
};

export const hideLoaderAction = () => {
  return {
    type: types.HIDE_LOADER,
    show: false,
  };
};
