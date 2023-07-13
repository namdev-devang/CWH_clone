import { Route, Routes } from "react-router-dom"
import Footer from "./Footer"
import Home from "./Component/Page/Home"
import Header from "./Header"
import Course from "./Component/Page/Course"
import Blog from "./Component/Page/Blog"
import Contact from "./Component/Page/Contact"
import Login from "./Component/Page/Login"
import Signup from "./Component/Page/Signup"

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/course" Component={Course} />
        <Route path="/blog" Component={Blog} />
        <Route path="/contact" Component={Contact} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
