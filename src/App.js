import './App.css';
import CartList from './component/CartList';
import ProductList from './component/ProductList';
import Header from './component/header';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://th.bing.com/th/id/OIP.RtJ1T8-2ioSvgI--BKMPrwHaEX?pid=ImgDet&rs=1',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 5000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 4000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
  ])

  const [cart,setCart] = useState([]);
  let [showCart,setShowCart] = useState(false)

  function addToCart(item){
    setCart([...cart , {...item , quantity : 1}])
  }

  return (
    <div className="App">
      <Header setShowCart={setShowCart} count={cart.length}/>
      {
        showCart ? <CartList cart={cart} /> : <ProductList product={product} addToCart={addToCart} /> 
      }
      
    </div>
  );
}

export default App;
