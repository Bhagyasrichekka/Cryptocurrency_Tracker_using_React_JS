// Write your JS code here
import './index.css'

const CryptoCurrencyItem = props => {
  const {eachItem} = props
  const {
    currencyLogo,
    currencyName,
    currencyValue,
    usdValue,
    euroValue,
  } = eachItem
  return (
    <li className="item">
      <div className="img-name">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p>{currencyName}</p>
      </div>
      <div className="usd-euro">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoCurrencyItem
