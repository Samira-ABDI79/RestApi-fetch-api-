import { useState } from "react";

function Product({product,onDelete,title ,onUpdate}){
 const [newTitle,setNewTitle]=useState(product.title)
 const [showEdit,setShowEdit]=useState(false);
    return (
        <>
      
        <div className="product">
  {showEdit ?      <div className="edit-box">
       <input className="newTitle"
        onChange={(e)=>setNewTitle(e.target.value)} 
        type="text" 
          placeholder="enter new title " />
        
            <button className="btn"onClick={()=>{
                onUpdate(product.id , newTitle)
                setShowEdit(false)
            }} 
                
                >Update</button>
       </div>

:<></>  
}
          <div>  {title}</div>
          <div className="product-button">
          <button className="btn"onClick={()=>onDelete(product.id)} >Delete</button>
            <button className="btn"onClick={()=>setShowEdit(true)} >Edit</button>
          </div>

            </div>
        </>
    )
}


export default Product;