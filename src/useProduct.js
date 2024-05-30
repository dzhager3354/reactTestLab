import { useState } from "react"
import useLocalstorage from "./useLocalstorage";
import products from "./ProductsArray";

function useProduct(id) {
    const storage = useLocalstorage()

    function getFromLocal() {
        if (JSON.parse(localStorage.getItem('items')).find((item)=>item.id == id)) {
            return true;
        }
        return false;
    }

    const [isBuy, setBuy] = useState(getFromLocal())
    
    function buy() {
        if (isBuy) return;
        storage.buyItem(id)
        setBuy(true)
    }

    function get(i) {
        return products.find(item=>item.id == i)
    }

    return {
        isBuy, buy, get
    }

}

export default useProduct