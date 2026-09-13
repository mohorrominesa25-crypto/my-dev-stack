import { Suspense } from 'react'
import HeroBanner from './components/HeroBanner'
import Navbar from './components/Navbar'
import Technologies from './components/Technologies'
import './index.css'
import type { Itechnology } from './types/technology'

  
  const technology=async():Promise<Itechnology[]>=>{
    const response=await fetch('/technology');
    const data= await response.json();
    return data;
  }

function App() {
   const technologyPromise=technology();
  return (
    <>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies technologyPromise={technologyPromise}></Technologies>
        </Suspense>
    </>
  )
}

export default App
