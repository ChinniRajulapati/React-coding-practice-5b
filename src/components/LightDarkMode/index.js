// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    backMode: 'dark-mode',
    buttonText: 'Light Mode',
  }

  onChange = () => {
    this.setState(prevValue => {
      if (prevValue.buttonText === 'Light Mode') {
        return {
          backMode: 'light-mode',
          buttonText: 'Dark Mode',
        }
      }
      return {
        backMode: 'dark-mode',
        buttonText: 'Light Mode',
      }
    })
  }

  render() {
    const {backMode, buttonText} = this.state
    return (
      <div className="container">
        <div className={`inner ${backMode}`}>
          <h1 className="heading">Click To Change Mode</h1>

          <button onClick={this.onChange} className="button-element">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
