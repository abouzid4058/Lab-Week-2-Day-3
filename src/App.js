import React, { Component } from "react";
import { ProductsData } from "./products";
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ProductsData,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
  }

  handleAdd(product) {
    const updatedProducts = this.state.products.map((p) =>
      p.id === product.id ? { ...p, qty: p.qty + 1 } : p
    );
    this.setState({ products: updatedProducts });
  }

  handleSubtract(product) {
    const updatedProducts = this.state.products.map((p) =>
      p.id === product.id && p.qty > 0 ? { ...p, qty: p.qty - 1 } : p
    );
    this.setState({ products: updatedProducts });
  }

  render() {
    return (
      <div className="App">
        <Navbar
          products={this.state.products}
          handleAdd={this.handleAdd}
          handleSubtract={this.handleSubtract}
        />
      </div>
    );
  }
}

export default App;
