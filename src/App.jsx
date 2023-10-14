import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import './App.css';
const App = () => {

  return (
    <div>
      <BrowserRouter>
        <div className='Background'>
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar></Navbar>
            <Hero></Hero>
          </div>
          <About></About>
          <Experience></Experience>
          <Tech></Tech>
          <Works></Works>
          <div style={{ position: 'relative', zIndex: 0 }}>
            <Contact></Contact>
            <StarsCanvas></StarsCanvas>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
