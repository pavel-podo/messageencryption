import {THEME_NUMBER} from '../types'
export const themeNumberActuion  = (number)=>{
    return{
        type :THEME_NUMBER,
        payload:number
    }
} 
