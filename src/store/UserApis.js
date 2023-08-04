/* eslint-disable no-useless-concat */
import { Report } from '@mui/icons-material';
import axiosInstance, {microServices} from '../../src/network/apis';
const LOGIN = 'auth/admin';
const MINT = 'http://localhost:3000/posts';
const LOGOUT = 'logout';
const TAG_LIST = 'tags?showOnHome=true';
// const WALLET_LIST = 'https://jsonplaceholder.typicode.com/users';
const WALLET_LIST = 'http://localhost:3000/posts';
const NFT_LIST = 'nft/list';
const NFT_LIST_COUNT = 'admin/nfts';
const Wallet = 'admin/wallet';
const BLOCKCHAIN_LIST = 'admin/wallet-type';
const COLLECTION = 'collections/createcollection';
const  ALL_TAG_LIST = 'tags';
const COLLECTION_LIST = 'collections';
const MODAL = 'admin/nft/transfer/estimate-gas-price';
const NFT_TRANSFER = 'admin/nft/transfer';
const MARKETING = 'tags/createTag';
const DISCOUNT = 'discounts/createDiscount';
const COUPON = 'coupons/createCoupon';
const SECTION = 'sections/home';
const UPDATE_SECTION = 'sections/updatesection';
const UPDATE_TAG = 'tags';
const CRYPTO = 'admin/cryptos/transfer';
const COUPON_LIST = 'coupons';
const DISCOUNT_LIST = 'discounts';
const EDIT_COLLECTION = 'collections';
const REMOVE_COLLECTION = 'collections/removeNFTFromCollection';
const MINT_GAS = 'http://localhost:3000/posts';
const CryptoTransfer ='admin/estimate-gas-fee';
const AddNftSection='sections/addNftToSection';
const  AddNftCollection ='collections/addNFTToCollection'
const UPDATE_NFT= 'http://localhost:3000/posts/6';
const ROLE_LIST= 'users/getRole'
const ROLE_USER_LIST = 'users/roleUserList'
const EDIT_ROLE= 'users/editRole'
const NFT_SINGLE= 'http://localhost:3000/posts/6';
const BATCH_MINT = 'https://jsonplaceholder.typicode.com/users'

const PRIVILEDGE_LIST= 'users/getPrivilegeList'

const BANNER = 'banners';
const BANNER_LIST = 'banners/home';
const CREATE_USER = 'admin/createUser'
const CAMPAIN_GET = 'campaign'
const GET_USERS = 'admin';
const EDIT_USER = 'admin/updateDetail'
const CREATE_ROLE ='users/createRole'
const CAMPAIGN = 'campaign/campaigns'
const Excel = 'nft/excel'
const Reports = 'reports'
const REPORTS = 'reports/users'
const NFTLIST = 'nft/list?isAdmin=true'
const RESETPASSWORD ='admin/resetPassword'
const CHANGEPASSWORD ='admin/changePassword'
const DELETE_COUPON = 'coupons'
const DELETE_DISCOUNT ='discounts'
const ROLE_USER_DISCOUNT ='users/deleteUser' 
// const BANNER_UPDATE = 'banners/';

export const login = async (loginData) => {
  return await axiosInstance('post', `${LOGIN}`, loginData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const wallet = async (walletData) => {
  return await axiosInstance('post', `${Wallet}`, walletData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const mintGas = async (mintGasData) => {
  return await axiosInstance('post', `${MINT_GAS}`, mintGasData.mintGasData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const mint = async (mintData) => {
  return await axiosInstance('post', `${MINT}`, mintData, {
    // headers: {
    //   'content-type': 'multipart/form-data',
    //   Accept: 'application/json',
    // },
    server: microServices.GLOBAL_ADMIN_URL,
  });
};


export const collection = async (collectionData) => {
  return await axiosInstance('post', `${COLLECTION}`, collectionData, {
    headers: {
      'content-type': 'multipart/form-data',
      Accept: 'application/json',
    },
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const tagList = async () => {
  return await axiosInstance('get', `${TAG_LIST}`, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const collectionList = async () => {
  return await axiosInstance('get', `${COLLECTION_LIST}`, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const nftList = async (data) => {
  let url = `${NFT_LIST}`;

  const queryString = Object.keys(data.payload)
    .map(function (key) {
      if (key === 'walletAddress' || key === 'rentalListed' || key === 'collectionID'|| key === 'availability') {
        return key + '=' + encodeURIComponent(data.payload[key]);
      }
      return key + '=' + '['+encodeURI(data.payload[key]) + ']';
    })
    .join('&');
  url += `?${queryString}&isAdmin=true`;
  return await axiosInstance('get', url, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const manageNftList = async () => {
  return await axiosInstance('get', `${NFT_LIST}`, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const walletType = async () => {
  return await axiosInstance('get', `${BLOCKCHAIN_LIST}`, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const logout = async (data) => {
  return await axiosInstance('post', `${LOGOUT}`, data, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const nftTransfer = async (nftData) => {
  return await axiosInstance('post', `${NFT_TRANSFER}`, nftData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const modalValue = async (modalData) => {
  return await axiosInstance('post', `${MODAL}`, modalData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const marketing = async (marketingData) => {
  return await axiosInstance('post', `${MARKETING}`, marketingData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const discount = async (discountData) => {
  return await axiosInstance('post', `${DISCOUNT}`, discountData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const coupon = async (couponData) => {
  return await axiosInstance('post', `${COUPON}`, couponData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const section = async (data) => {
  return await axiosInstance('get', `${SECTION}`, data, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const updateSection = async (sectionData) => {
  return await axiosInstance('put', `${UPDATE_SECTION}`, sectionData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};
export const updateTag = async (updateData,updateValue) => {
  let url = `${UPDATE_TAG}`;
 

  //  const queryString = Object.keys(updateData.payload)
  //   .map(function (key) {
  //     return key + '=' + encodeURIComponent(updateData.payload[key]);
  //   })
  //   .join('&');
  url += `/${updateValue.tagID}`;
 
  return await axiosInstance('put', url, updateData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};
export const cryptoValue = async (cryptoData) => {
  return await axiosInstance('post', `${CRYPTO}`, cryptoData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const cryptoTransferValue = async (trasferCryptoData) => {
  return await axiosInstance('post', `${CryptoTransfer}`, trasferCryptoData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};
export const couponList = async () => {
  return await axiosInstance('get', `${COUPON_LIST}`, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const discountList = async () => {
  return await axiosInstance('get', `${DISCOUNT_LIST}`, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const updateEdit = async (editData, editValue) => {

  let url = `${EDIT_COLLECTION}`;
 
  url += `/${editValue.collectionId}`;
 
  return await axiosInstance('put', url, editData, {
    headers: {
      'content-type': 'multipart/form-data',
      Accept: 'application/json',
    },
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const removeCollection = async (deleteData) => {
  return await axiosInstance('put', `${REMOVE_COLLECTION}`, deleteData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const addNftSection = async (addNftData) => {
  return await axiosInstance('post', `${AddNftSection}`, addNftData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};
export const addNftCollection = async (addNftCollection) => {
  return await axiosInstance('post', `${AddNftCollection}`, addNftCollection, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const updateNftCollection = async (updateNftData) => {
  return await axiosInstance('put', `${UPDATE_NFT}`, updateNftData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};


export const roleList = async () => {
  
  return await axiosInstance('get', `${ROLE_LIST}`, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const roleUserList = async (data) => {

  let url = `${ROLE_USER_LIST}`;

  // const queryString = Object.keys(data.payload)
  //   .map(function (key) {
  //   //   if (key === 'appRoleID') {
  //   //     return key + '=' + encodeURIComponent(data.payload[key]);
  //   //   }
  //     return key + '=' + encodeURI(data.payload[key]);
  //   })
  //   .join('&');
  // url += `?${queryString}`;

  url += `/${data.data}`;

  return await axiosInstance('get',url, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};
export const editRoleList = async (editRoleData,editValue) => {

  let url = `${EDIT_ROLE}`;
 
  url += `/${editValue.appRoleID}`;
 
  return await axiosInstance('put', url, editRoleData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};
export const userList = async (data,roleIDs) => {
 
  let url = `${ROLE_LIST}`;
  // const queryString = Object.keys(data.payload)
  //   .map(function (key) {
  //     if (key === 'roleID' ) {
  //       return key + '=' + encodeURIComponent(data.payload[key]);
  //     }
  //     return key + '=' + '['+encodeURI(data.payload[key]) + ']';
  //   })
  //   .join('&'); 
  // url += `?${queryString}`;
  url += `?roleID=${data.data}`;
  
  return await axiosInstance('get',url, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};
export const priviledgeList = async () => {
  
  return await axiosInstance('get', `${PRIVILEDGE_LIST}`, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const nftSingleList = async (data) => {
  
  let url = `${NFT_SINGLE}`;

  // url += `${data.data}`;

  return await axiosInstance('get',url, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};


export const banner = async (bannerData) => {
  return await axiosInstance('post', `${BANNER}`, bannerData, {
        headers: {
      'content-type': 'multipart/form-data',
      Accept: 'application/json',
    },
    server: microServices.GLOBAL_ADMIN_URL,
  });
};


export const bannerList = async () => {
  return await axiosInstance('get', `${BANNER_LIST}`, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const bannerupdate = async (bannerData) => {
  return await axiosInstance('post', `${BANNER}`, bannerData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};
export const collectionSingleList = async (data) => {

  let url = `${COLLECTION_LIST}`;

  url += `/${data.data}`;

  return await axiosInstance('get',url, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const createUserRequest = async (createData) => {
  return await axiosInstance('post', `${CREATE_USER}`, createData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
}
export const campainList = async () => {
  
  return await axiosInstance('get', `${CAMPAIN_GET}`, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};
export const usersList = async () => {
  
  return await axiosInstance('get', `${GET_USERS}`, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const editUserList = async (editUserData,editValue) => {
  
  let url = `${EDIT_USER}`;
 
  url += `/${editValue.userId}`;
 
  return await axiosInstance('put', url, editUserData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const createRoleRequest = async (createRoleData) => {
  return await axiosInstance('post', `${CREATE_ROLE}`, createRoleData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
}

export const editBanner = async (editBannerData,editValue) => {
  let url = `${BANNER}`;
 
  url += `/${editValue.bannerID}`;
 
  return await axiosInstance('put', url, editBannerData, {
        headers: {
      'content-type': 'multipart/form-data',
      Accept: 'application/json',
    },
    server: microServices.GLOBAL_ADMIN_URL,
  });
};
export const aLLTagList = async () => {
  return await axiosInstance('get', `${ALL_TAG_LIST}`, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};
export const createCampainRequest = async (campainData) => {
  return await axiosInstance('post', `${CAMPAIGN}`, campainData, {
    headers: {
      'content-type': 'multipart/form-data',
      Accept: 'application/json',
    },
    server: microServices.GLOBAL_ADMIN_URL,
  });
}
export const editCampainRequest = async (campainData,editValue) => {

  let url = `${CAMPAIGN}`;
 
  url += `/${editValue.campainId}`;
 
  return await axiosInstance('put', url, campainData, {
         headers: {
      'content-type': 'multipart/form-data',
       Accept: 'application/json',
     },
    server: microServices.GLOBAL_ADMIN_URL,
  });
}
export const excelRequest = async (excelData) => {
  return await axiosInstance('post', `${Excel}`, excelData, {
    headers: {
      'content-type': 'multipart/form-data',
      Accept: 'application/json',
    },
    server: microServices.GLOBAL_ADMIN_URL,
  });
}
export const batchMintDataNew= async (batchMintData) => {
  return await axiosInstance('post', `${BATCH_MINT}`, batchMintData, {
    // headers: {
    //   'content-type': 'multipart/form-data',
    //   Accept: 'application/json',
    // },
   
    server: microServices.GLOBAL_ADMIN_URL,
  });
}
export const reportList = async (data) => {

  let url = `${Reports}`;

  url += `/${data.data}`;
 
  
  return await axiosInstance('get', url, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};
// export const reportSingleList = async () => {
  
 
  
//   return await axiosInstance('get', `${REPORTS}`, {
//     server: microServices.GLOBAL_ADMIN_URL,
//   });
// };
export const reportDownload = async (data) => {

  let url = `${Reports}`;

  url += `/${data.data}`;

 
  
  return await axiosInstance('get', url, {
    headers: {
      'Content-Type': 'text/csv',
    },
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const shortinglist = async (data) => {

  let url = `${Reports}`;
  
  url += `/${data.data.shortingData}=${data.data.newIndex}`;

  return await axiosInstance('get',url, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const nftListApi = async () => {
  return await axiosInstance('get', `${NFTLIST}`, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const resetPasswordReq = async (data,resetData) => {
  let url = `${RESETPASSWORD}`;
 

  //  const queryString = Object.keys(updateData.payload)
  //   .map(function (key) {
  //     return key + '=' + encodeURIComponent(updateData.payload[key]);
  //   })
  //   .join('&');
   url += `/${data.userId}?email=${resetData.email}`;
 
  return await axiosInstance('post', url,  {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};
export const changePassword = async (passwordData) => {
  return await axiosInstance('post', `${CHANGEPASSWORD}`, passwordData, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const couponDelete = async (Id) => {
  let url = `${DELETE_COUPON}`;
 url += `/${Id}`;
 
  return await axiosInstance('put', url,  {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const discountDelete = async (Id) => {
  console.log(Id)
  let url = `${DELETE_DISCOUNT}`;
 url += `/${Id}`;
 console.log(url)
 
  return await axiosInstance('put', url,  {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};
export const editRoleDataApi = async (data) => {
  let url = `${ROLE_LIST}`;
 

  //  const queryString = Object.keys(updateData.payload)
  //   .map(function (key) {
  //     return key + '=' + encodeURIComponent(updateData.payload[key]);
  //   })
  //   .join('&');
   url += `?roleID=${data.data}`;
 
  return await axiosInstance('get', url,  {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};
export const roleUserDelete = async (Id) => {
  console.log(Id)
  let url = `${ROLE_USER_DISCOUNT}`;
 url += `/${Id}`;
 console.log(url)
 
  return await axiosInstance('put', url,  {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const walletList = async () => {
  return await axiosInstance('get', `${WALLET_LIST}`, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};

export const nftlistcount = async (walletID) => {
  return await axiosInstance('post', `${NFT_LIST_COUNT}`, walletID, {
    server: microServices.GLOBAL_ADMIN_URL,
  });
};