import Footer from "./components/Footer"
import Greeting from "./components/Greeting"
import Header from "./components/Header"
import JSXRules from "./components/JSXRules"
import MainContent from "./components/MainContent"
import Product from "./components/Product"
import ProductInfo from "./components/ProductInfo"
import ProductList from "./components/ProductList"
import User from "./components/User"
import UserList from "./components/UserList"
import WelcomeMessage from "./components/WelcomeMessage"

function App() {


  return (
    <>
     {/* <WelcomeMessage/> */}
    {/* <JSXRules/> */}
    {/* <Header/> */}
    {/* <MainContent/> */}
    {/* <Footer/> */}
    {/* <Greeting/>
    <ProductInfo/> */}
    <UserList/>
    <ProductList/>
    <User name={"DEV BHai"} age={20}/>
    <Product name={"MACBOOK PRO M4"} price={"$2000"}/>
    </>
  )
}

export default App
