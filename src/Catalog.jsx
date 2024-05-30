import PriceFilter from './PriceFilter'
import useApp from './useApp'
import CardMini from './CardMini'
import products from './ProductsArray'
import './Catalog.css'
import Head from './Head'

export const Catalog = () => {
  const arr = products

  const appState = useApp(arr)

  return (
    <>
      <Head></Head>
      <div className='catalog-container'>
        
        <div className='cards'>
          {arr.filter(item=>item.cost >= appState.minn)
          .filter(item=>item.cost <= appState.maxn)
          .filter(item=>item.name.indexOf(appState.text) != -1)
          .map((item, index)=><CardMini key={index} product={item} func={appState.buy}></CardMini>)}
        </div>
        <div className='filters'>
          <PriceFilter funcFilter={appState.setMinMax}
          textFilter={appState.setText}
           minValue={appState.minn}
           maxValue={appState.maxn}
            ></PriceFilter>
        </div>
      </div>
    </>
  )
}