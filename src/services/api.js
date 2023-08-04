import axios from 'axios';


//  NOTE : - USE Fake api As A JSON Server and build this project -
//  - its work fine without using any db or external data base 

// const usersUrl2 = 'http://localhost:3000/posts';
// const usersUrl3 = 'http://localhost:3000/posts/12';
const usersUrl = 'http://localhost:3000/posts';


export const addUser = async (data) => {
   
    // Use try catch for Error handling and show Error as a output so we use it 
    try {
        return await axios.post(`${usersUrl}`, data);
    }
    catch (Error) {
        console.log(' Error while calling add User Api ', Error);
    } 
}

export const getUser = async () => {
   
    try {   
        return await axios.get(`${usersUrl}`);
    }
    catch (Error) {
        console.log(' Error while calling add User Api ', Error);
    } 
}
 
export const getUserOne = async (id) => {
   
    try {   
        return await axios.get(`${usersUrl}/${id}`);
    }
    catch (Error) {
        console.log(' Error while calling add User Api ', Error);
    } 
}
 
export const editUser = async (user, id ) => {
   
    try {   
        return await axios.put(`${usersUrl}/${id}`);
    }
    catch (Error) {
        console.log(' Error while calling editUser  Api ', Error);
    } 
}

export const deleteUser = async ( id ) => {
   
    try {   
        return await axios.delete(`${usersUrl}/${id}`);
    }
    catch (Error) {
        console.log(' Error while calling editUser  Api ', Error);
    } 
}
