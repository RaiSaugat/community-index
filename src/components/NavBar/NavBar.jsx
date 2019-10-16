import React from 'react'
import './NavBar.scss'

import NavBarItem from '../NavBarItem/NavBarItem'
import ProfileIcon from '../ProfileIcon/ProfileIcon'

export default function NavBar() {
  return (
    <div className="navbar__wrapper">
      <div className="navbar__logo">Community Index</div>
      <label className="label navbar__entry" htmlFor="show">
        &#9776; Menu
      </label>
      <input className="navbar__show" id="show" type="checkbox" />
      <div className="navbar__entries">
        <NavBarItem to="/" title="Home" />
        <NavBarItem to="/overview" title="Overview" />
        <div className="navbar__entry">
          <ProfileIcon />
        </div>
      </div>
    </div>
  )
}
