import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar';
import CodeForInterview from './Components/Codeforinterview';
import AllUsers from './Components/AllUsers';
import EditUser from './Components/EditUser';
import AddUser from './Components/AddUser';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<CodeForInterview />} />
          <Route path='/AllUsers' element={<AllUsers />} />
          <Route path='/AddUser' element={<AddUser />} />
          <Route path='//posts/18' element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

);
// If you want to start measuring performance in your app, pass a function

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
