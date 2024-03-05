import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div>
      {/* Sidebar */}
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon rotate-n-15"></div>
          <p className="fst-italic">Home Care</p>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <Link to="/Home" className="nav-link">
            <i className="fa-solid fa-house"></i>
            <span>Acceuil</span>
          </Link>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}

        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#"  aria-expanded="true" aria-controls="collapseTwo">
            <i class="fa-regular fa-user"></i>
            <span class="fst-italic">Mon profile</span>
          </a>
          
        </li>
        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item">
          <Link to="/Annonce" className="nav-link">
            <i className="fa-solid fa-bullhorn"></i>
            <span className="fst-italic"> Annonces</span>
          </Link>
        </li>
        {/* Divider */}



        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#"   aria-expanded="true" aria-controls="collapsePages">
            <i class="fa-sharp fa-solid fa-bell"></i>
            <span class="fst-italic">Notifications</span>
          </a>
         
        </li>
        {/* Nav Item - Charts */}
        <li className="nav-item">
          <Link to="/Message" className="nav-link">
            <i className="fa-sharp fa-regular fa-envelope"></i>
            <span className="fst-italic">Messages</span>
          </Link>
        </li>
        {/* Nav Item - Tables */}
        <li className="nav-item">
          <Link to="/Contacte" className="nav-link">
            <i className="fa-regular fa-address-book"></i>
            <span className="fst-italic">Nous Contacter</span>
          </Link>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
        {/* Sidebar Toggler (Sidebar) 
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
         Sidebar Message */}

      </ul>
      {/* End of Sidebar */}
      &lt;
    </div>
  );
}

export default Sidebar;