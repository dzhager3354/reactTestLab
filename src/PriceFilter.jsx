import useFilter from "./useFilter"
import './PriceFilter.css'
import '@material/web/slider/slider'

function PriceFilter({funcFilter, textFilter, minValue, maxValue}) {
    const filter = useFilter(funcFilter, textFilter, minValue, maxValue);
    return (
        <>
            <md-slider 
                className='slider' 
                range
                onClick={filter.updateState} 
                min={filter.minPrice}
                max={filter.maxPrice}
                value-start={minValue}
                value-end={maxValue}
            ></md-slider>
            <input type="text" onInput={(event)=>filter.setText(event.target.value)}></input>
        </>
        
    )
}

export default PriceFilter