import { Link } from 'react-router-dom'
import './Card.css'

function CardMini({product, func}) {
    return (
        <div className="card">
            <Link className='link' to={`/product/${product.id}`}>
            <img className='card-image' src={"src/assets/"+product.name+".svg"}></img>
            <div className="card__info">
                <span>{product.name}</span>
                <span>{product.cost}</span>
            </div></Link>
            <button className='card__button' onClick={()=>func(product.id)}>Купить</button>
        </div>
    )
}

export default CardMini