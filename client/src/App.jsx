import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer.jsx'
import SignIn from "./components/signIn/SignIn.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Story from "./components/story/story.jsx";
import Header from "./components/home/Home.jsx";
import SignUp from "./components/signUp/signUp.jsx";
import Products from "./components/products/Products.jsx";
import ProductDetails from "./components/productDetails/ProductDetails.jsx";
import ProductCreate from "./components/productCreate/ProductCreate.jsx";



function App() {

  return (
<div>
<Navigation/>


<Routes>
<Route path='/home' element={<Header />}/>
<Route path='/products' element={<Products />}/>
<Route path="/products/create" element={<ProductCreate />} />
<Route path='/signIn' element={<SignIn />}/>
<Route path='/signUp' element={<SignUp />} />
<Route path='/story' element={<Story />} />
<Route path="/products/:productId" element={<ProductDetails />} />

  
</Routes>

<Footer/>
</div>
    
     
   
    


  )
}

export default App
