import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export function Nav() {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <nav className="w-full bg-blue-900 relative z-10">
      <div className="  flex justify-between items-center mx-4 lg:container lg:m-auto">
    <Logo/>
        <ul className={`absolute top-12 left-0 w-full bg-blue-500 text-center md:relative md:w-auto md:bg-transparent md:flex gap-4 md:border-b-0 md:top-0 ${isNavOpen ? 'hidden': ''}`} >
          <li>
            <Link
              to="/"
              className="capitalize text-blue-100 hover:text-white hover:bg-blue-400 block md:inline text-xl border-b-2 border-blue-400 md:border-none md:hover:bg-transparent"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="capitalize text-blue-100 hover:text-white hover:bg-blue-400 block md:inline text-xl border-b-2 border-blue-400 md:border-none md:hover:bg-transparent"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/card"
              className="capitalize text-blue-100 hover:text-white hover:bg-blue-400 block md:inline text-xl border-b-2 border-blue-400 md:border-none md:hover:bg-transparent"
            >
              Card
            </Link>
          </li>
        
        </ul>
        <div
          className="text-blue-300 hover:text-white cursor-pointer md:hidden lg:hidden"
          onClick={() => setNavOpen(isNavOpen => !isNavOpen)}
        >
          icon
        </div>
      </div>
    </nav>
  );
}
