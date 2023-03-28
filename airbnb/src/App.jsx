import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './components/Data'
import './index.css'

function App()
{
  let d=Data.map(dm =>{
return(<Card key={dm.id}dm={dm}/>)
  })
  return(<>
    
    <Navbar/>
    <Hero/>
    <section className='onething'>{d}</section>
    
    

  </>)
}
export default App