import React from 'react'
import "./App.css"
import  Header  from "./components/header.jsx";
import  Body from "./components/body.jsx";
import  Footer  from "./components/footer.jsx";

 const App = () => {
  return (
    <div className='App'>
        <Header />
        <Body />
        <Footer />
    </div>
  )
}
export default App;