import * as types from './UserTypes';

export const login = (loginData, loaderCallback, successCallback) => ({
  type: types.LOGIN_REQUEST,
  payload: loginData,
  loaderCallback,
  successCallback,
});


export const logout = (data, loaderCallback, successCallback) => ({
  type: types.LOGOUT_REQUEST,
  loaderCallback,
  successCallback,
});

export const loginResponse = (data) => ({
  type: types.LOGIN_RESPONSE,
  payload: data,
});

export const redirectToLogin = () => ({
  type: types.REDIRECT_TO_LOGIN,
});



export const loginCustomResponse = (data, loaderCallback, successCallback) => ({


  type: types.LOGIN_CUSTOM_RESPONSE,
  payload: data,
});

export const loginHttpResponse = (data, loaderCallback, successCallback) => ({


  type: types.LOGIN_HTTP_RESPONSE,
  payload: data,
});


export const roleList = () => ({
  type: types.ROLE_LIST,
});



export const roleListResponse = (data, loaderCallback, successCallback) => ({
  type: types.ROLE_LIST_RESPONSE,
  payload: data,
});

export const userListResponse = (data, loaderCallback, successCallback) => ({

  type: types.USER_LIST_RESPONSE,
  payload: data,
});

export const userList = (data) => ({

  data: data,
  type: types.USER_LIST,
});

// export const walletList2 = () => ({
//   type: types.WALLET_LIST,
// });


// export const walletListResponse2 = (data) => ({
//   type: types.WALLET_LIST_RESPONSE,
//   payload: data,
// });


// export const nftListCount = (walletID, loaderCallback, successCallback) => ({
//   type: types.NFT_LIST_COUNT_REQ,
//   walletID,
//   loaderCallback,
//   successCallback,
// });


// export const nftListCountResponse = (data) => ({
//   type: types.NFT_LIST_COUNT_RESPONSE,
//   payload: data,
// });

export const walletRequestData = () => ({

  type: types.WALLET_LIST,
});

export const walletResponseData = (data) => ({

  type: types.WALLET_LIST_RESPONSE,
    payload: data,

});


export const mint = (mintData, loaderCallback, successCallback, failedCallback) => ({
  type: types.MINT_REQUEST,
  payload: mintData,
  loaderCallback,
  successCallback,
  failedCallback
});

export const mintGas = (mintGasData, loaderCallback, successCallback, failedCallback) => ({
  type: types.MINT_GAS,
  mintGasData,
  loaderCallback,
  successCallback,
  failedCallback
});

export const mintGasResponse = (data, loaderCallback, successCallback) => ({
  type: types.MINT_GAS_RESPONSE,
  payload: data,
});

export const updateNftCollection = (updateNftData, loaderCallback, successCallback) => ({
  type: types.UPDATE_NFT_REQUEST,
  payload: updateNftData,
  loaderCallback,
  successCallback,
});

export const nftSingleList = (data) => ({

  data: data,
  type: types.NFT_SINGLE_LIST,
});

export const nftSingleListResponse = (data, loaderCallback, successCallback) => ({

  type: types.NFT_SINGLE_LIST_RESPONSE,
  payload: data,
});
