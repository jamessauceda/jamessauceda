import { Link, NavLink, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="shell">
      <header className="topbar">
        <Link to="/" className="topbar__mark">
          James Sauceda
        </Link>
        <nav className="topbar__nav" aria-label="Primary">
          <NavLink to="/" end>
            About
          </NavLink>
          <NavLink to="/work">Work</NavLink>
        </nav>
      </header>
      <main className="shell__main">
        <Outlet />
      </main>
    </div>
  );
}
