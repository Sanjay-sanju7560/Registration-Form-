import { SERVER_URL } from "./serverURL"
import { commonAPI } from './commonAPI'
// register api 
 export const registerAPI = async (student)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,student,"")
 }