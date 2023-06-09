import {createStore,combineReducers} from 'redux'
import{themeReducer} from './reducers/themeReducer'
import{intLangReducer} from './reducers/intLangReducer'
import{alphabetReducer} from './reducers/alphabetReducer'
const rootReducer = combineReducers({
    themeReducer:themeReducer,
    intLangReducer:intLangReducer,
    alphabetReducer:alphabetReducer,
})
export default createStore(rootReducer)