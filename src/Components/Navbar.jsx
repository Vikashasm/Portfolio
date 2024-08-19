import React, { useState } from 'react'

export const Navbar = () => {
    const[open,setOpen]=useState(false)
  return (
    <>
      <nav>
        <div
          className={`myContainer fixed-top ff_Outfit bg_primar bg-dark ${
            open && `set_full mt-0 pb-5 pt-3 `
          } mob_nav py-2  ${!open && `rounded-5`}  mt-md-4 `}
        >
          <div className="d-flex">
            <div className="w_header d-flex justify-content-center align-items-center">
              <ul
                className={`set_mob_nav ${
                  open && `fix`
                }   d-md-flex justify-content-center align-items-center gap-5 text-white mb-0`}
              >
                <li className="cursor-pointer hover_effect">Home</li>
                <li className="cursor-pointer hover_effect">About me</li>
                <li className="cursor-pointer hover_effect">My Skills</li>
                <li className="cursor-pointer hover_effect">Projects</li>
                <li className="d-md-none cursor-pointer hover_effect">
                  Contact Me
                </li>
              </ul>
              <div
                onClick={() => setOpen(!open)}
                className={`hamburger d-md-none ${open && `mob_menu`}`}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="w_125 text-end d-none d-md-flex">
              <button className="header-btn ff_Outfit">Contact me</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
