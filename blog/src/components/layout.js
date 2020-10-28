import React from "react";
import '../styles/layout.js';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <main>{children}</main>
    </div>
  )
}