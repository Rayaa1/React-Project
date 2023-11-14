import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer.jsx'
import SignIn from "./components/signIn/SignIn.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Story from "./components/story/story.jsx";
import Header from "./components/header/Header.jsx";
import SignUp from "./components/signUp/signUp.jsx";
import Products from "./components/products/Products.jsx";



function App() {

  return (
<div>
<Navigation/>


<Routes>
<Route path='/home' element={<Header />}></Route>
<Route path='/products' element={<Products />}></Route>
<Route path='/signIn' element={<SignIn />}></Route>
<Route path='/signUp' element={<SignUp />}></Route>
<Route path='/story' element={<Story />}></Route>
  
</Routes>

<Footer/>
</div>
    
     
   
    


  )
}

export default App
