import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import MovieShow from "./pages/MovieShow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieShow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
