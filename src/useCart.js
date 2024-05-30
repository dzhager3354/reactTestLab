import { useState } from "react";
import products from "./ProductsArray"
import useLocalstorage from "./useLocalstorage"

function useCart() {
    const storage = useLocalstorage()
    const allProducts = products;
    const [sum, setSum] = useState(recalc())
    
    function add(id, count) {
        storage.add(id, count)
        recalcSum()
    }

    function recalc() {
        let newSum = 0
        storage.items.forEach(element => {
            newSum += allProducts.find((i)=>i.id==element.id).cost * element.count
        });
        console.log(newSum)
        return newSum
    }

    function recalcSum() {
        
        setSum(recalc())
    }

    return {
        sum,
        add,
        storage
    }
}

export default useCart