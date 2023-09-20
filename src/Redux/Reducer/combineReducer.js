import {combineReducers} from 'redux'
import authReducer from './authReducer'
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
const rootReducer= combineReducers({
    Auth:authReducer,
    Category:categoryReducer,
    Product:productReducer
})
export default rootReducer;