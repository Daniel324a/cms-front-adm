import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => (
  <>
    <div className='grain-image' />
    <ul
      className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
      id='accordionSidebar'>
      <a
        href='#!'
        className='sidebar-brand d-flex align-items-center justify-content-center'>
        <div className='sidebar-brand-icon rotate-n-15'>
          <i className='fas fa-laugh-wink'></i>
        </div>
        <div className='sidebar-brand-text mx-3'>CMS ADM</div>
      </a>

      <hr className='sidebar-divider my-0' />

      <li className='nav-item active'>
        <a href='#!' className='nav-link'>
          <i className='fas fa-fw fa-tachometer-alt'></i>
          <span>Dashboard</span>
        </a>
      </li>

      <hr className='sidebar-divider' />

      <div className='sidebar-heading'>Recursos</div>

      <li className='nav-item'>
        <a
          href='#!'
          className='nav-link collapsed'
          data-toggle='collapse'
          data-target='#collapseTwo'
          aria-expanded='true'
          aria-controls='collapseTwo'>
          <i className='fas fa-fw fa-layer-group'></i>
          <span>Componentes</span>
        </a>
        <div
          id='collapseTwo'
          className='collapse'
          aria-labelledby='headingTwo'
          data-parent='#accordionSidebar'>
          <div className='bg-white py-2 collapse-inner rounded'>
            {/* <h6 className="collapse-header">Custom Components:</h6> */}

            <Link to='/resources' className='collapse-item'>
              Administrar Recursos
            </Link>
            <Link to='/uploads' className='collapse-item'>
              Subir Recursos
            </Link>
          </div>
        </div>
      </li>

      <li className='nav-item'>
        <a
          href='#!'
          className='nav-link collapsed'
          data-toggle='collapse'
          data-target='#collapseUtilities'
          aria-expanded='true'
          aria-controls='collapseUtilities'>
          <i className='fas fa-fw fa-store'></i>
          <span>Mercado</span>
        </a>
        <div
          id='collapseUtilities'
          className='collapse'
          aria-labelledby='headingUtilities'
          data-parent='#accordionSidebar'>
          <div className='bg-white py-2 collapse-inner rounded'>
            <Link to='/products' className='collapse-item'>
              Productos
            </Link>
            <Link to='clasifications' className='collapse-item'>
              Clasificaciones
            </Link>
            <Link to='categories' className='collapse-item'>
              Categorias
            </Link>
            <Link to='subcategories' className='collapse-item'>
              Subcategorias
            </Link>
          </div>
        </div>
      </li>

      <hr className='sidebar-divider' />

      <div className='sidebar-heading'>Extras</div>

      <li className='nav-item'>
        <a href='#!' className='nav-link'>
          <i className='fas fa-fw fa-chart-area'></i>
          <span>Graficos</span>
        </a>
      </li>

      <li className='nav-item'>
        <a href='#!' className='nav-link'>
          <i className='fas fa-fw fa-table'></i>
          <span>Reportes</span>
        </a>
      </li>

      <hr className='sidebar-divider d-none d-md-block' />

      <div className='text-center d-none d-md-inline'>
        <button className='rounded-circle border-0' id='sidebarToggle'></button>
      </div>
    </ul>
  </>
);
