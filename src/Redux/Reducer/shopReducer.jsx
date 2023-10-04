import { Add_Shop, Delete_Shop, Get_all_Shop, Shop_Loading_Attempt, Shop_Loading_False, Shop_Loading_True, Single_Shop, User_Shop } from "../Types";


const initialState = {
    usershoplist: [],
    addshop: {},
    loading: false,
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case Shop_Loading_Attempt:
            return {
                ...state,
                loading: true
            }
        case Shop_Loading_False:
            return {
                ...state,
                loading: false
            }
        case Shop_Loading_True:
            return {
                ...state,
                loading: false
            }
        case User_Shop:
            return {
                ...state,
                usershoplist:action.payload
            }
        case Add_Shop:
            return {
                
                usershoplist:[...state.usershoplist,action.payload]
            }
            case Delete_Shop:
                return {
                    ...state,
                    usershoplist: state.usershoplist.filter((stor)=>stor._id !== action.payload)
                }
            case Get_all_Shop:
                return {
                    ...state,
                    usershoplist: action.payload
                }
            case Single_Shop:
                return {
                    ...state,
                    addshop: action.payload
                }


        default:
            return{
                ...state,
            }
    }
}
export default shopReducer;