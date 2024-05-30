import { useEffect, useState } from "react"
import useLocalstorage from "./useLocalstorage"

function useApp(arr) {
    const localst = useLocalstorage()
    
    function maxPrice() {
        let x = Math.max(...arr.map(item=>item.cost)) 
        return x
    }
    
    const [minn, setMin] = useState(0)
    const [maxn, setMax] = useState(maxPrice())    
    const [text, setText] = useState("")

    function setMinMax(newMin, newMax) {
        setMin(newMin)
        setMax(newMax)
    }

    function buy(id) {
        localst.buyItem(id)
    }

    return {
        minn,
        maxn,
        setMinMax,
        buy,
        setText,
        text
    }
}

export default useApp