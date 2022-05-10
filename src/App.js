import './App.css';
import { useState } from 'react';

import Nav from './componants/Nav'
import Header from './componants/Header'
import Products from './componants/Products'
import Cart from './componants/Cart'
import Footer from './componants/Footer'

function App() {

  const [category, setCategory] = useState('cat150006')
  const [cartAmount, setCartAmount] = useState(0)
  const [showCart, setShowCart] = useState(false)

  const getCategory = function (category) {
    setCategory(category)

  }


  const show = function () {
    setShowCart(true)
  }

  const hide = function () {
    setShowCart(false)
  }





  return (
    <div className="App">
      <header>
        <Header unhideCart={show} count={cartAmount} />
      </header>

      <main>
        {
          showCart
            ?
            <Cart hideCart={hide} />
            : null
        }
        <div className="wrapper">
          <Nav updateProducts={getCategory} />
          <Products productType={category} />
        </div>
      </main >

      <footer>
        <Footer />
      </footer>
    </div >
  );
}

export default App;
