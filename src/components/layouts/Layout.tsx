import { Outlet } from "react-router-dom"
import NavBar from "../navbar/NavBar"
import { Toaster } from "../ui/toaster";

const Layout = () => {
  return (
    <div className="App">
      <Toaster />
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout