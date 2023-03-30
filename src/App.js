import { useState , useEffect } from "react";
import AddProduct from "./Components/AddProduct";

import ProductList from "./Components/ProductList";





function App(){

    const [products,setProducts]=useState([])
    const sendrequest=async ()=>{
        const response = await fetch ('http://localhost:3004/products')
        const responseData= await response.json()
        setProducts(responseData)
    }
useEffect(()=>{
   
    sendrequest()
},[])



    const deleteProduct=async (id)=>{
        await fetch (`http://localhost:3004/products/${id}`,{method:'DELETE'})
      setProducts(products.filter((item)=>item.id!== id))
    }


    const addProduct=async (title)=>{
        const response = await fetch('http://localhost:3004/products',
        {method:'POST',
        headers:{'Content-type':'application/json',},
        body:JSON.stringify(title)
    })
    const responseData2=await response.json()

     setProducts([...products,responseData2])
    }

    const onUpdate=(id , newtitle)=>{
        fetch(`http://localhost:3004/products/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
              title: newtitle,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
           
            sendrequest()
      }


    return(
        <>
  <AddProduct onAdd={addProduct}/>
  <div className="container">
  <ProductList products={products} onDelete={deleteProduct} onUpdate={onUpdate}/>

  </div>

        

        </>
    )
}


export default App;