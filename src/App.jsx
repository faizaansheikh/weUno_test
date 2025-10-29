import HeroSection from "./components/layout/HeroSection"
import Section2 from "./components/layout/Section2"

function App() {

  return (
   <div className=''>
      <HeroSection/>

      <div className="bg-linear-to-l from-[#111700] via-[#1B2503] to-[#243005] w-full h-auto">    
        <Section2/>
      </div>
   </div>
  )
}

export default App
