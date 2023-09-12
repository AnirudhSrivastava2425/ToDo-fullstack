import React from "react";

function Nav() {
  return (
    <div>
        {/* Navbar code */}
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <a
            className='navbar-brand'
            href='/'>
            To-Do List
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse'
            id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a
                  className='nav-link disabled'
                  href="/"
                  aria-disabled='true'>
                    
                  Enable Dark Mode🌙
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
