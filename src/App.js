import './App.css';
import { useState } from 'react';

import Nav from './componants/Nav'
import Header from './componants/Header'
import Products from './componants/Products'

function App() {

  const [category, setCategory] = useState('cat150006')

  const getCategory = function (category) {
    setCategory(category)

  }



  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <div className="wrapper">
          <Nav updateProducts={getCategory} />
          <Products productType={category} />

        </div>
      </main >
    </div >
  );
}

export default App;
