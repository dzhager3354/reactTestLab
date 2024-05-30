import { useParams } from "react-router-dom"
import products from "./ProductsArray";
import './Product.css'
import useProduct from "./useProduct";
import Head from "./Head";
import { Rate } from "antd";

export const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(item=>item.id==id)
    const productState = useProduct(Number.parseInt(id))
    return (
        <div>
            <Head></Head>
            <div className="mainContent">
                <img src={"/src/assets/"+product.name+".svg"}></img>
                <div>
                    {product.description}
                </div>
                <button onClick={productState.buy}>{productState.isBuy ? "В корзине" : "Купить"}</button>
            </div>
            <Rate className="rate"></Rate>
        </div>
    )
}