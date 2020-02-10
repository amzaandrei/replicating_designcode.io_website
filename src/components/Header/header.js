import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.css"
import StripeCheckout from "react-stripe-checkout"
// import logo from "../images/logo-designcode.svg"

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if(scrollTop > 50){
      this.setState({ hasScrolled: true})
    }else{
      this.setState({ hasScrolled: false})
    }
  }

  handlePurchase = (token) => {
    const amount = 5000
    const description = "My awesome product"

    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      amount
    }

    fetch('http://localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject)
    })
  }

  render() {
    return(
      // <div className="Header">
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../../images/logo-designcode.svg')} width="30" /></Link>
          <Link to="/">Courses</Link>
          <Link to="/">Downloads</Link>
          <Link to="/">Workshops</Link>
          <StripeCheckout
            amount={5000}
            image="https://cdn.auth0.com/blog/react-js/react.png"
            token={this.handlePurchase}
            stripeKey={'pk_test_wdlUwKqfXAjgw71S6vWv6uJC00HizMlnfh'}
            >
          <button>Buy</button>
          </StripeCheckout>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
