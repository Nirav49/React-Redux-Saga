import { actionFetchUserList } from "./actions";
import * as actionTypes from "./constants";

export const getUserList = async () => {

    const request = await fetch('https://jsonplaceholder.typicode.com/users')
    const response =await request.json();
    return response;
  };



export default getUserList;
