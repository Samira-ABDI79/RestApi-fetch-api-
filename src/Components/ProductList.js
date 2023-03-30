import Product from "./Product"



function ProductList({products , onDelete,onUpdate}){
    return(
        <>
       
        <div className="product-list">
            
            {products.map((item)=>{
return <Product key={item.id} title={item.title} product={item} onDelete={onDelete} onUpdate={onUpdate}/>
                })
            }
        </div>
        </>
    )
}


export default ProductList;