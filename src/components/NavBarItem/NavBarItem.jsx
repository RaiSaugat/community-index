import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBarItem.scss'

export default function index(props) {
  return (
    <div className="navbar__entry">
      {props.to && (
        <NavLink exact to={props.to}>
          {props.title}
        </NavLink>
      )}
    </div>
  )
}
