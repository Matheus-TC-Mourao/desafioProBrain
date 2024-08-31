import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Spells from "../pages/Spells"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/spells/:index" Component={Spells} />
      </Routes>
    </BrowserRouter>
  )
}
