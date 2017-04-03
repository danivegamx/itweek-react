import React, { Component } from 'react';
import constants from '../../../data/constants';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items.length,
    };
  }
  render() {
    return (
      <section className="Cart">
        <div className="Cart-Wrapper row">
          <strong>{`${constants.cart.TOTAL}:`}</strong>{`$ ${this.props.total}.00`}
          <div className="Cart-Button">
            <img src="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/png/512/bag.png" alt="Basket"/>
            <span className="Cart-Indicator">{this.props.items.length}</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
