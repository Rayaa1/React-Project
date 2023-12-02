import { Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer.jsx'
import SignIn from "./components/signIn/SignIn.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Story from "./components/story/story.jsx";

import SignUp from "./components/signUp/signUp.jsx";
import Products from "./components/products/Products.jsx";
import ProductDetails from "./components/productDetails/ProductDetails.jsx";
import ProductCreate from "./components/productCreate/ProductCreate.jsx";
import Contact from "./components/contact/Contact.jsx";
import Edit from "./components/editProduct/Edit.jsx";
import { AuthProvider } from './contexts/authContext';
import Home from "./components/home/Home.jsx";
import NotFound from "./components/not-found/NotFound.jsx";







function App() {

  return (
    <AuthProvider>
<div>
  
<Navigation/>


<Routes>
<Route path='/home' element={<Home />}/>
<Route path='/products' element={<Products />}/>
<Route path="/products/create" element={<ProductCreate />} />
<Route path='/signIn' element={<SignIn />}/>
<Route path='/signUp' element={<SignUp />} />
<Route path='/products/:productId/edit' element={<Edit />} />
<Route path='/story' element={<Story />} />


<Route path='/contact' element={<Contact />} />


<Route path="/products/:productId/details" element={<ProductDetails />} />

<Route path="*" element={<NotFound />} />
</Routes>

<Footer/>
</div>
</AuthProvider>

  )
}

export default App
