import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import PizzaList from "./components/PizzaList"



export default function App(){
    return(
      <>
      <Navbar /> 
      <div className='container'>
     
      <PizzaList />

      <Footer />

     
      </div>
   
      </>
    )
  }