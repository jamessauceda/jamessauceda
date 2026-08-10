import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

export function Layout() {
  const { pathname } = useLocation();
  const wide = pathname.startsWith("/presentations");

  return (
    <div className={wide ? "shell shell--wide" : "shell"}>
      <header className="topbar">
        <Link to="/" className="topbar__mark">
          James Sauceda
        </Link>
        <nav className="topbar__nav" aria-label="Primary">
          <NavLink to="/" end>
            About
          </NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/presentations">Presentations</NavLink>
        </nav>
      </header>
      <main className="shell__main">
        <Outlet />
      </main>
    </div>
  );
}
