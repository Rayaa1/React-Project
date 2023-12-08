import { Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
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
import Logout from "./components/logout/Logout.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import AuthGuard from "./guards/AuthGuard.jsx";

import CartPage from "./components/productDetails/Cart.jsx";







function App() {

  return (
    <ErrorBoundary>
    <AuthProvider>
    
<div>
  
<Navigation/>
<Suspense fallback={<h1>Loading...</h1>}>


<Routes>
<Route path='/home' element={<Home />}/>
<Route path='/products' element={<Products />}/>
<Route path='/signIn' element={<SignIn />}/>
<Route path='/signUp' element={<SignUp />} />
<Route path='/contact' element={<Contact />} />
<Route path="/products/:productId/details" element={<ProductDetails />} />
<Route path="*" element={<NotFound />} />
<Route path='/story' element={<Story />} />

<Route element={<AuthGuard />}>
<Route path="/products/create" element={<ProductCreate />} />
<Route path="/cart" element={<CartPage />} />
<Route path='/logout' element={<Logout />} />
<Route path='/products/:productId/edit' element={<Edit />} />
</Route>

</Routes>


<Footer/>
</Suspense>
</div>

</AuthProvider>
</ErrorBoundary>

  )
}

export default App
