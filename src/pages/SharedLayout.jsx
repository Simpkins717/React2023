import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';
import { Sidebar } from '../components';
import { Footer } from '../components';
const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
