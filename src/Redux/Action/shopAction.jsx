import axios from 'axios'
import {  Add_Shop, Delete_Shop, Get_all_Shop, Shop_Loading_Attempt, Shop_Loading_False, Shop_Loading_True, Single_Shop, Update_Shop, User_Shop } from '../Types'



//Function of Get user shop
export let getusershop = () => async (dispatch) => {
try {
    dispatch({type: Shop_Loading_Attempt})
     let mylog = await axios.get('http://localhost:5000/shop/usershops')
     console.log(mylog)
     dispatch({type:User_Shop,payload:mylog.data.data})
     dispatch({type:Shop_Loading_True})
} catch (error) {
    console.log(error)
    dispatch({type:Shop_Loading_False})
}
}

// function add Shop
export let addshop = (option) => async (dispatch) => {
try {
    dispatch({type: Shop_Loading_Attempt})
     const shop = await axios.post('http://localhost:5000/shop/add-shop', option)
     console.log(shop)
     dispatch({type:Add_Shop,payload:shop.data.data})
     dispatch({type:Shop_Loading_True})
} catch (error) {
    console.log(error)
    dispatch({type:Shop_Loading_False})
}
}
//get all shops
export let getallshops = () => async (dispatch) => {
try {
    dispatch({type: Shop_Loading_Attempt})
     const shop = await axios.post('http://localhost:5000/shop')
     console.log(shop)
     dispatch({type:Get_all_Shop,payload:shop.data.data})
     dispatch({type:Shop_Loading_True})
} catch (error) {
    console.log(error)
    dispatch({type:Shop_Loading_False})
}
}
// function single Shop
export let singleshop = (id) => async (dispatch) => {
try {
    dispatch({type: Shop_Loading_Attempt})
     const shop = await axios.get('http://localhost:5000/shop'+ id)
     console.log(shop)
     dispatch({type:Single_Shop,payload:shop.data.data})
     dispatch({type:Shop_Loading_True})
} catch (error) {
    console.log(error)
    dispatch({type:Shop_Loading_False})
}
}
// function delete Shop
export let deleteshop = (id) => async (dispatch) => {
try {
    dispatch({type: Shop_Loading_Attempt})
     const shop = await axios.delete('http://localhost:5000/shop/delete-shop/'+ id)
     console.log(shop)
     dispatch({type:Delete_Shop,payload:id})
     dispatch({type:Shop_Loading_True})
} catch (error) {
    console.log(error)
    dispatch({type:Shop_Loading_False})
}
}

// Update Shop Function
export let updatecategory = (id,option) => async (dispatch) => {
    try {
        dispatch({type: Shop_Loading_Attempt})
        
        let mylog= await axios.put('http://localhost:5000/shop/update-shop/'+id,option)
        console.log(mylog)
        dispatch({type:Update_Shop})
        dispatch({type:Shop_Loading_True})
    } catch (error) {
        console.log(error)
        dispatch({type:Shop_Loading_False})
    }
    }

