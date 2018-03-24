import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
      <header>
          <h1>Online Shop</h1>
          <p>The safest place to shop</p>
          <div>
            <button type="button">Pre-Sign Now</button>
          </div>
          <img  src="./assets/online-shop.png" />
          
      </header>
    );
  }
}

export default Header;
