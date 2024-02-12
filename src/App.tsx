
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import { Container } from 'react-bootstrap'
import { Home } from './components/Home'
import { About } from './components/About'
import { Store } from './components/Store'
import { NavBar } from './components/NavBar'
import { ShoppingCartContext, CartItem } from './context/ShoppingCartContext'
import { useState } from 'react'
import { ShoppingCart } from './components/ShoppingCart'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { useAppSelector } from './hooks/hooks'

function App() {

  // const [isOpen, setIsOpen] = useState(false);
  // const [cartItems, setCartItems] = useState<CartItem[]>([]);
  // const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  // function getItemQuantity(id: number) {
  //   return cartItems.find(item => item.id === id)?.quantity || 0;
  // }

  // function openCart() {
  //   setIsOpen(true);
  // }

  // function closeCart() {
  //   setIsOpen(false);
  // }

  // function increaseItemQuantity(id: number) {
  //   setCartItems(currItems => {
  //     const isFound = currItems.find(item => item.id === id);
  //     if (!isFound) {
  //       return [...currItems, { id, quantity: 1 }]
  //     }
  //     else
  //       return currItems.map(item => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity + 1 }
  //         }
  //         else return item
  //       })
  //   })
  // }

  // function decreaseItemQuantity(id: number) {
  //   setCartItems(items => {
  //     if (items.find(item => item.id === id)?.quantity === 1) {
  //       return items.filter(item => item.id !== id);
  //     }
  //     else {
  //       return items.map(item => {
  //         if (item.id === id) return { ...item, quantity: item.quantity - 1 };
  //         else return item
  //       })
  //     }
  //   })
  // }

  // function removeFromCart(id: number) {
  //   setCartItems(items => items.filter(item => item.id !== id))
  // }


  let currentState;
  return (
    <Provider store={store}>
      <div style={{ width: '100%', height: '100vh' }}>
        <Container>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/store" element={<Store />}></Route>
            <Route path="/about" element={<About />}>
              {/* <Route path="/about/test" element={<About2 />}></Route>
              <Route path="/about/test1" element={<About1 />}></Route> */}
            </Route>
            <Route path='*' element={<Navigate to="/" />}></Route>

          </Routes>
          <ShoppingCart></ShoppingCart>
        </Container>
      </div>
    </Provider>



  )
}

export default App
