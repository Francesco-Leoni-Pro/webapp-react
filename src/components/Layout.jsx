import { Link, Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/movies">Film</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}