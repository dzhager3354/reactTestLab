import { useState } from "react"
import { Link } from "react-router-dom"

export default function Head() {
    return (
        <header>
            <Link to={`/cart`}>
                <button>cart</button>
            </Link>
        </header>
    )
}