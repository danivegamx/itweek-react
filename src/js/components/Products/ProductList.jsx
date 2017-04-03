import React, { Component } from 'react';
import constants from '../../../data/constants';
import * as mock from '../../../data/mock.json';
import { connect } from 'react-redux';
import * as actions from '../../../data/productList/actions';
import Product from './Product.jsx';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: mock.catalog
    };
  }
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }
  render() {
    const list = (this.props.products) ?
      this.props.products.catalog :
      [];
    const items = list.map((item) => {
      return (
        <Product
          key={item.id}
          idProduct={item.id}
          name={item.name}
          brand={item.brand}
          price={item.price}
          qty={item.quantity}
          imageURL={item.imageURL}
          handleAddToCart={this.props.handleAddToCart}
      />);
    });
    return (
      <section className="Products row">
        <h1>Product List</h1>
        <article className="Products-List row">
          {items}
        </article>
      </section>
    );
  }
}

const mapStateToProps = state => ({ ...state.productList });

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(
    actions.fetchProducts()
  )
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);
