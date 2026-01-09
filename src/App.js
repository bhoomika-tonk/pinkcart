import React, { useState } from 'react';

import Header from './components/Header';
import Banner from './components/Banner';
import Home from './components/Home';
import Footer from './components/Footer';
import CartSection from './components/CartSection';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <>
      <BackgroundAnimation />

      <Header
        onCartClick={() => setShowCart(true)}
        onSearch={setSearch}
      />

      {showCart && <CartSection onClose={() => setShowCart(false)} />}

      <Banner />
      <Home search={search} />
      <Footer />
    </>
  );
}

export default App;
