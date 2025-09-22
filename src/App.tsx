import { BrowserRouter as Router, Route, Routes}  from "react-router-dom"
import SectionOne from "./components/SectionOne/SectionOne"
import SectionThree from "./components/SectionThree/SectionThree"
import SectionTwo from "./components/SectionTwo/SectionTwo"
import Navbar from "./components/Navbar/Navbar"
import Layout from "./Layout/Layout"

function App() {
  


  return (
    <>
  <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        </>}
        />
        

      </Route>
    </Routes>
  </Router>
      
    </>
  )
}

export default App
