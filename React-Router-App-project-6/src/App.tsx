import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { Route ,Routes } from "react-router-dom"
import Home from "./Pages/Home/HomePage"
import About from "./Pages/About/AboutPage"
import Contact from "./Pages/Contact/ContactPage"
import Error from "./Pages/Error/ErrorPage"
import Services from "./Pages/Services/Servicespage"
import Shop from "./Pages/Shop/ShopPage"
import Cart from "./cart/cartpage"
function App() {

  return (
    <div className="h-screen w-full flex flex-col">
      <Header />
      <main className="flex-grow flex justify-center items-center">
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/services" element={<Services/>}></Route>
              <Route path="/shop" element={<Shop/>}></Route>
              <Route path="/cart" element={<Cart/>}></Route>
              <Route path="*" element={<Error/>}></Route>
          </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
