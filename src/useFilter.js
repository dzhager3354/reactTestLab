import { useState } from "react"

function useFilter(func, setText, min, max) {
    const [minPrice, setMinPrice] = useState(min)
    const [maxPrice, setMaxPrice] = useState(max)

    function updateState(event) {
        func(event.target.valueStart, event.target.valueEnd)
    }

    return {
        minPrice, 
        maxPrice,
        setMaxPrice, 
        setMinPrice,
        updateState,
        setText
    }
}

export default useFilter