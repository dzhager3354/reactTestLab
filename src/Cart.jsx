import CartProduct from "./CartProduct"
import useCart from "./useCart"
import './Cart.css'
import products from "./ProductsArray"

function Cart() {
    const {
        sum,
        add,
        storage
    } = useCart()
    const arr = products
    return (
        <div id="cart">
            <div className="products">
                Предметы:
                {storage.items.map((item)=> 
                    <div>
                        <span>{arr.find((elem)=>elem.id==item.id).name}({arr.find((elem)=>elem.id==item.id).cost}): {item.count}</span>  
                        <button onClick={()=>add(item.id, -1)}>-</button>
                        <button onClick={()=>add(item.id, 1)}>+</button>  
                    </div>
                )}
            </div>
            
            <div className="cartsInfo">
                <span>{sum}</span>
            </div>
        </div>
    )
}

export default Cart