import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
function Design({ children }) {
    return (
        <div id="wrapper" style={{ display: 'flex' }}>
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <Header />
          <div id="content">
            {children}
          </div>
        </div>
      </div>
      );
}

export default Design;