import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1 className="bg-emerald-200">Header입니다.</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        <Link to="/">Main으로 이동</Link>
        <Link to="/SelectPage1">선택화면 1로 이동</Link>
        <Link to="/FinalScreen">채팅방으로 이동</Link>
        <Link to="/FinalSelectedScreen">최종 선택 화면으로 이동</Link>
      </div>
    </div>
  );
};

export default Header;
