import React, { useState, useEffect } from 'react';
import Link from '../../utils/ActiveLink';

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  useEffect(() => {
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id='navbar' className='navbar-area'>
        <div className='raimo-responsive-nav'>
          <div className='container'>
            <div className='raimo-responsive-menu'>
              <div onClick={() => toggleMenu()} className='hamburger-menu'>
                {showMenu ? (
                  <i className='bx bx-x'></i>
                ) : (
                  <i className='bx bx-menu'></i>
                )}
              </div>
              <div className='logo'>
                <Link href='/'>
                  <a>
                    <img src='/images/logo.png' alt='logo' />
                  </a>
                </Link>
              </div>

              <div className='responsive-others-option'>
                <div className='d-flex align-items-center'>
                  <div className='option-item'>
                    <Link href='/authentication' activeClassName='active'>
                      <a className='login-btn'>
                        <i className='bx bx-log-in'></i>
                      </a>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          className={
            showMenu
              ? 'show navbar navbar-expand-md navbar-light'
              : 'navbar navbar-expand-md navbar-light hide-menu'
          }
        >
          <div className='container'>
            <Link href='/'>
              <a className='navbar-brand'>
                <img src='/images/logo.png' alt='logo' />
              </a>
            </Link>
            <div className='collapse navbar-collapse mean-menu'>
              <div className='others-option'>
                <div className='d-flex align-items-center'>
                  <div className='option-item'>
                    <Link href='/contact' activeClassName='active'>
                      <a className='default-btn'>
                      <i className='bx bxs-contact' ></i> Connect Wallet
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
