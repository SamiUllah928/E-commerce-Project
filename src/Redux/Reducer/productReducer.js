import { Add_Product, Product_Loading_Attempt, Product_Loading_False, Product_Loading_True } from "../Types";

const initialstate={
    allproducts: [],
    userproducts:[],
    singleproduct :{},
    loading: false
}

const productReducer = ( state=initialstate,action)=>{
switch (action.type) {
    case Product_Loading_Attempt:
        return{
            ...state,
            loading:true
        }
        case Product_Loading_True:
            return{
                 ...state,
                 loading: true
            }
            case Product_Loading_False:
                return{
                 ...state,
                 loading:false
                }
                case Add_Product:
                    return{
                         ...state,
                         loading: true,
                         addproducts:action.payload
                    }
        
       

    default:
        return{
            ...state,
        }
}
}
export default productReducer;