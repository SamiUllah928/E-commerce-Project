import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getallcatageries } from '../../Redux/Action/categoryAction'
import MenuIcon from '@mui/icons-material/Menu';
import { getallcategory } from '../../Redux/Action/categoryAction';

export default function GetallCategory() {
    const dispatch = useDispatch()
const [isclicked, setisclicked] =useState(true)


const getalllist = (state=> state.Category.categorylist)
console.log(getalllist)

useEffect(()=>{
    dispatch(getallcategory())
},[dispatch])

    return(
   <div className='GetallCategory'>
    <MenuIcon sx={{cursor:'pointer'}} onclick={()=> setisclicked(!isclicked)} />
    <ul style={{listStyle:'none',display:isclicked ? 'block' : 'none'}}>
        {
              getalllist.map((cat)=> <li>{cat.name}</li>)
        }
    </ul>
   </div>

    )
}