import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';


const Layout = () => {
  const location = useLocation();
  const from = location?.state?.from ?? '/';
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tweets" state={{ from: from }}>
                Tweets
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;