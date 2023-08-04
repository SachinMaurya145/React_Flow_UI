
/**
 * Service to check authentication for user and to signOut
 */

 import jwt_decode from "jwt-decode";
const Auth = {
  isAuth() {
    return localStorage.getItem('authToken');
  },
  getToken() {
    const token = {};
    token.authToken = localStorage.getItem('authToken');
    token.refreshToken = localStorage.getItem('refreshToken');
    
  
    return token;
  },
  signIn(data) {

    const {token} = data;
    const decode = jwt_decode(token);

    localStorage.setItem('decode', JSON.stringify(decode))
    localStorage.setItem('authToken', token);
    localStorage.setItem('refreshToken', token);
  },
    responseData(data) {
      const {token} = data;
      const decoded = jwt_decode(token);
    
    localStorage.setItem('refresh', decoded);
    },
  refreshToken(data) {
    localStorage.setItem('authToken', data);
    localStorage.setItem('refreshToken', data);
   
  },
  getRoles() {
    const user = JSON.parse(localStorage.getItem('userData'));
    return user?.roles?.length ? user?.roles : [];
  },
  getLanguage() {
    const user = localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData'));
    return user?.language?.code;
  },
  signOut() {
    localStorage.clear();
  },
  getLoggedInUser() {
    return localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData'));
  },
  getExpiryTime() {
    return localStorage.getItem('expiryTime');
  },
  getRefreshToken() {
    return localStorage.getItem('refreshToken');
  },
  setUserData(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
  },
  getUnitWelcomeStatus() {
    const userData =
      localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData'));
    return userData.is_unit_welcome_view;
  },
  setUnitWelcomeStatus() {
    const userData =
      localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData'));
    userData.is_unit_welcome_view = 1;
    localStorage.setItem('userData', JSON.stringify(userData));
  },
};
export default Auth;
