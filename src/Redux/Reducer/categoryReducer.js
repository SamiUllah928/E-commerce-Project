import { Category_Loading_Attempt, Category_Loading_False, Category_Loading_True, Get_All_Category } from "../Types";



const initialState ={
    categorylist: [],
    category:{},
    loading:false
}
const categoryReducer = (state = initialState , action) => {
    switch (action.type) {
        case Category_Loading_Attempt:
            return{
                ...state,
                loading:true
            }
            case Category_Loading_True:
                return{
                    ...state,
                    loading:false
                }
                case Category_Loading_False:
                    return{
                        ...state,
                        loading: false
                    }
                    case Get_All_Category:
                        return{
                            ...state,
                            categorylist:action.payload
                        }
        default:
          return{
            ...state,
          }
    }

}
export default categoryReducer;  