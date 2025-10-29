import HeroSection from "./components/layout/HeroSection"
import Section2 from "./components/layout/Section2"
import Section3 from "./components/layout/Section3"
import Section4 from "./components/layout/Section4"
import Section5 from "./components/layout/Section5"

function App() {

  return (
   <div className=''>
      <HeroSection/>

      <div className="bg-linear-to-l from-[#111700] via-[#1B2503] to-[#243005] w-full h-auto">    
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
      </div>
   </div>
  )
}

export default App
