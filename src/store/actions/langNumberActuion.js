import {LANG_NUMBER} from '../types'
export const langNumberActuion  = (number)=>{
    return{
        type :LANG_NUMBER,
        payload:number
    }
} 
