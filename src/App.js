import React from 'react';



import Navbar from './components/pages/Nav';
import Section from './components/pages/Sectio';
import Article from './components/pages/Article';
import Product from './components/pages/Products';
import Jewelry from './components/pages/Jewelry';
import Footer from './components/pages/Footer';


function App() {
  return (
    <div>
       <Navbar/>
       <Section/>
       <Article/>
       <Product/>
       <Jewelry/>
       <Footer/>
    </div>
  );
}

export default App;
