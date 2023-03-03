import React from 'react'
import { HiX, HiMenu } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useState } from 'react'
import logo from '../../assets/logo-large.png'
import banner from '../../assets/epic_seven.jpeg'
import './Header.scss'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="header">
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="horizontal-banner-main">
        <img src={null} alt='banner' />
      </div>
      <div className="nav-menu">
        <div className="nav-menu-display">
        <HiMenu onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0]}}
              transition={{ duration: 0.85, ease: 'easeOut'}}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {['Home', 'Calculator', 'Inventory', 'Login'].map((link) => (
                    <li key={link}>
                      <a href={`#${link}`} onClick={() => setToggle(false)}>{link}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header