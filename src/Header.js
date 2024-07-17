import React from "react";
import { Outlet, Link, useNavigate, Navigate } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
      <h1>
        <Link to="/">홈</Link>
      </h1>
    </header>
  );
};

export default Header;
