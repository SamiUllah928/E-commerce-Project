import axios from "axios"
import { Add_Category, Category_Loading_Attempt, Category_Loading_False, Category_Loading_True, Get_All_Category,  } from "../Types"

// Add Category Function
export let addcategory = (option) => async (dispatch) => {
    try {
        dispatch({ type: Category_Loading_Attempt})
        let mylog = await axios.post('http://localhost:5000/catagery/addcatagery', option)
        console.log(mylog)
       dispatch({type:Add_Category})
        dispatch({ type: Category_Loading_True })
    } catch (error) {
        console.log(error)
        dispatch({ type: Category_Loading_False })

    }
}

// Get all Category Function

export let getallcategory = () => async (dispatch) => {
try {
    dispatch({type: Category_Loading_Attempt})
    
    let mylog= await axios.get('http://localhost:5000/catagery/')
    console.log(mylog)
    dispatch({type:Get_All_Category,payload:mylog.data.categoryList})
    dispatch({type:Category_Loading_True})
} catch (error) {
    console.log(error)
    dispatch({type:Category_Loading_False})
}
}
