import React, { Component } from 'react';
import constants from '../../../data/constants';

class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      idProduct: this.props.idProduct,
      imageURL: this.props.imageURL,
      brand: this.props.brand,
      name: this.props.name,
      price: this.props.price,
      qty: 0
    };
    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.handleSubmitToCart = this.handleSubmitToCart.bind(this);
  }
  handleQtyChange(event){
    this.setState({
      qty: event.target.value
    });
  }
  handleSubmitToCart(event){
    event.preventDefault();
    if (this.state.qty !== 0) {
      this.props.handleAddToCart(
        this.state.idProduct,
        this.state.qty,
        this.state.price,
      );
      alert('Product has been added to your cart!');
    } else {
      alert('You must enter a quantity for the product!');
    }
  }
  render() {
    return (
      <div className="Product medium-3 columns">
        <form onSubmit={this.handleSubmitToCart}>
          <figure>
            <img src={this.state.imageURL} />
          </figure>
          <div className="Product-Description">
            <p className="Product-Brand">{this.state.brand}</p>
            <p className="Product-Name">{this.state.name}</p>
          </div>
          <div className="Product-Transaction">
            <p className="Product-Price">{`$ ${this.state.price}.00`}</p>
            <input type="number" placeholder="0" min="0" max={this.props.qty} onChange={this.handleQtyChange}/>
          </div>
          <div className="Product-Button">
            <input type="submit" value={constants.cart.ADD_TO_CART} />
          </div>
        </form>
      </div>
    );
  }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  brand: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  qty: React.PropTypes.number.isRequired,
  imageURL: React.PropTypes.string.isRequired,
  handleAddToCart: React.PropTypes.func.isRequired
};

export default Product;
