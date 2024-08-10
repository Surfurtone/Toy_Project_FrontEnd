import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1 className="bg-emerald-200">Header입니다.</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        <Link to="/">Main으로 이동</Link>
        <Link to="/PageA">Page A로 이동</Link>
        <Link to="/pageB">Page B로 이동</Link>
        <Link to="/pageC">Page C로 이동</Link>
      </div>
    </div>
  );
};

export default Header;
