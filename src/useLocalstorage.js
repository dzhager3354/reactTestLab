import { useState, useEffect } from "react"

function useLocalstorage() {
    
    function init() {
        return JSON.parse(localStorage.getItem('items')) ?? []
    }

    const [items, setItems] = useState(init())

    
    function buyItem(itemID) {
        console.log(items)
        let index = items.map(item=>item.id).find((item)=>item == itemID)
        if (index != itemID) {
            setItems([...items, {id: itemID, count: 1}])
        } 
    }

    function add(itemId, count) {
        let arr = [...items]
        let index = arr.find((item)=>item.id == itemId)
        if (index) {
            index.count += count
        }
        if (index.count <= 0) {
            arr = arr.filter(item=>item != index)
        }
        setItems(arr)
    }

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    })

    return {
        buyItem,
        items, add
    }
}

export default useLocalstorage