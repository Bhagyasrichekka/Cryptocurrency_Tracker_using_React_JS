// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptoCurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptoCurrenciesList extends Component {
  state = {dataList: [], isLoading: true}

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
      id: eachItem.id,
    }))
    this.setState({dataList: updatedData, isLoading: false})
  }

  componentDidMount = () => {
    this.getData()
  }

  render() {
    const {dataList, isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="list-container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <ul className="table">
              <li className="item-type">
                <p>Coin Type</p>
                <div className="usd-euro">
                  <p>USD</p>
                  <p>EURO</p>
                </div>
              </li>
              {dataList.map(eachItem => (
                <CryptoCurrencyItem eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptoCurrenciesList
