import React, { Component } from 'react';
import Header from './../Header';
import Cart from './../Cart';
import ProductList from './../Products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      cartItems: []
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  handleAddToCart(idProduct, qty, price) {
    let items = this.state.cartItems;
    let total = 0;
    items.push({
      idProduct,
      qty,
      price
    })
    const totalHelper = items.map((item) => (
      total += Number(item.qty) * item.price
    ));
    this.setState({
      cartItems: items,
      total: total
    });
  }
  render() {
    return (
      <main>
        <Header />
        <Cart
          items={this.state.cartItems}
          total={this.state.total}
        />
        <ProductList handleAddToCart={this.handleAddToCart}/>
      </main>
    );
  }
}

export default App;
