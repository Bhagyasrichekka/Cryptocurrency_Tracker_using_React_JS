// Write your code here
import {Component} from 'react'
import CryptoCurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptoCurrencyTracker extends Component {
  render() {
    return (
      <div className="container">
        <CryptoCurrenciesList />
      </div>
    )
  }
}

export default CryptoCurrencyTracker
