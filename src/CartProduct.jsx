import useProduct from "./useProduct"

function CartProduct({product}) {
    const prod = useProduct()
    product = prod.get(product.id)
    console.log(product)
    return (
        <>
        <div className="cartproduct">
            <img className="cartproduct__img" src={"/src/assets/"+product.name+".svg"}></img>
            <span>{product.cost}</span>
            <span>{product.name}</span>
        </div>
        <div>
           <span>{prod}</span> 
        </div>
        </>
    )
}

export default CartProduct