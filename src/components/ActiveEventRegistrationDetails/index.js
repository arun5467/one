// Write your code here
import {Component} from 'react'

import './index.css'

const apiStatusConstants = {
  initial: '',
  success: 'YET_TO_REGISTER',
  failure: 'REGISTERED',
  inProgress: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
  }

  renderPrimeDealsList = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      className="yet to register"
    />
  )

  renderPrimeDealsFailureView = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      alt="registered"
      className="register-prime-image"
    />
  )

  renderLoadingView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="register-prime-image"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )
  renderInitial = () => (
    <p>Click on an event, to view its registration details</p>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPrimeDealsList()
      case apiStatusConstants.failure:
        return this.renderPrimeDealsFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.initial:
        return this.renderInitial()

      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
