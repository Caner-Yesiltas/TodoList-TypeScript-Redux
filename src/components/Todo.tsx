import React from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const Todo = () => {
  return (
    <div style={{display:"flex", flexDirection:'row', alignItems:'center', justifyContent:'space-between', 
    border:'1px solid lightgray', padding:'1rem', marginTop:'1.5625rem', borderRadius:'.3125rem'}}>
      <div>
        FIRST TODO 
      </div>
        <div>
        <IoMdRemoveCircleOutline  className='icons' style={{marginRight:'.5rem'}}/>
        <FaCheck/>
        </div>
    </div>
  )
}

export default Todo
