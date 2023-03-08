import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2bae66ff] text-white border-b-4 border-black'>
      <div className='text-2xl'><Link to='/'>Investing 101</Link></div>
      <div>
      <ul className='flex gap-4'>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/history">
              History
            </Link>
          </li>
          <li>
            <Link to="/benefits">
              Benefits
            </Link>
          </li>
          <li>
            <Link to="/invest">
              Invest
            </Link>
          </li>
          <li>
            <Link to="/resources">
              Resources
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar