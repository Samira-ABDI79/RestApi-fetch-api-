import { useState } from "react";

function AddProduct({onAdd}){
    const [title,setTitle]=useState()
const formHandler=(event)=>{
event.preventDefault()
onAdd({title})
setTitle("")
}

    return (
        <>
      <div className="container">
      <form onSubmit={formHandler}>
            <input 
            type="text" 
            placeholder=" enter product name..."
            value={title}
            onChange={(e)=>setTitle(e.target.value)} 
            />
            <button type="submit" >Add</button>
        </form>
      </div>
        </>
    )
}


export default AddProduct;