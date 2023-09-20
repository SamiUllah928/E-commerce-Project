import axios from "axios"
import { Add_Product, Product_Loading_Attempt, Product_Loading_False, Product_Loading_True } from "../Types"

export let addproduct =(option) =>async(dispatch)=>{
    try {
        dispatch({type:Product_Loading_Attempt})
        const data = await axios.post('http://localhost:5000/product/add-product',option)
        console.log(data)
        dispatch({type:Add_Product,payload:data.data.data})
        dispatch({type:Product_Loading_True})
    } catch (error) {
        console.log(error)
        dispatch({type:Product_Loading_False})
    }
} 