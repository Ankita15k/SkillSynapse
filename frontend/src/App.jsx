import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/home/Homepage"
import Login from "./Pages/auth/Login"
import Signup from "./Pages/auth/Signup"
import WelcomeSetup from "./Pages/dashboard/welcomesetup"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Auth Route */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>


        <Route path="/onboarding" element={<WelcomeSetup/>}/>

      </Routes>
    </>
  )
}

export default App
