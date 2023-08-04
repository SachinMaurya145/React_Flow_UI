/* eslint-disable eqeqeq */
/* eslint-disable import/no-anonymous-default-export */
import {
 
  LOGIN_RESPONSE,
  REDIRECT_TO_LOGIN,
  LOGIN_CUSTOM_RESPONSE,
  LOGIN_HTTP_RESPONSE, 
  ROLE_LIST_RESPONSE , 
  USER_LIST_RESPONSE , 
  WALLET_LIST_RESPONSE,
  MINT_GAS_RESPONSE,
  // NFT_LIST_COUNT_RESPONSE , 
  // WALLET_RESPONSE_LIST , 
  NFT_SINGLE_LIST_RESPONSE,
  



  
} from './UserTypes';

const INITIAL_STATE = {
  isLoggedOut: false,
  isLoading : false,
  showPendingInviteDialog: false,
  loginHttp: {},
  loginCustom: {},
  roles: [],
  userRole: [], 
  wallets: [],
  localhostData:[], 
  mint_gas: '',
  nftDetail: {},

  


};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_RESPONSE: {
      return {
        ...state,
        isLoggedOut: false, 
      };
    }
    

    case REDIRECT_TO_LOGIN: {
      return {
        ...state,
        isLoggedOut: true,
      };
    }
    
    case LOGIN_CUSTOM_RESPONSE: {
      return {
        ...state,
        loginCustom: action.payload,

      };
    }

    case LOGIN_HTTP_RESPONSE: {
      return { 
        ...state,
        loginHttp: action.payload,

      };
    }

    case ROLE_LIST_RESPONSE: {
      return {
        ...state,
        roles: action.payload?.role,
      };
    }
 
    case USER_LIST_RESPONSE: {
      return {
        ...state,
        userRole: action.payload?.role?.privileges,
      };
    }

    case WALLET_LIST_RESPONSE: {
      return {
        ...state,
        wallets: action.payload,
        localhostData: action.payload,

      };
    }
    // case NFT_LIST_COUNT_RESPONSE: {
    //   return {
    //     ...state,
       
    //     nft_count: action.payload,

    //   };
    // }


    
    // case WALLET_RESPONSE_LIST: {
    //   return {
    //     ...state,
       
    //     // wallets: action.payload?.walletList,
    //     walletResponse: action.payload?.walletList,

    //   };
    // }
    case MINT_GAS_RESPONSE: {
      return {
        ...state,
        mint_gas: action.payload,
      };
    }

    case NFT_SINGLE_LIST_RESPONSE: {
      return {
        ...state,
        nftDetail: action.payload,
      };
    }
    

    default:
      return state;
  }
};

