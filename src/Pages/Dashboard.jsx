import React from 'react';
import Sidebar from '../Components/Sidebar';
import Profile from '../Components/Profile';
import Features from '../Components/Features';

export default function Dashboard() {
  return (
    <div className="flex relative">
      <Sidebar />
      <Profile />
      <Features />
    </div>
  );
}
