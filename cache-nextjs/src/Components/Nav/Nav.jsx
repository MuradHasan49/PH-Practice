import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="p-4 bg-gray-100 ">
      <ul className="flex items-center justify-center gap-6 list-none ">
        <li>
          <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/prodect" className="text-gray-800 hover:text-blue-600 transition-colors">
           Product
          </Link>
        </li>
        <li>
          <Link href="/user" className="text-gray-800 hover:text-blue-600 transition-colors">
            User
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;