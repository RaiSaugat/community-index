import React from 'react'
import { Link } from 'react-router-dom'

import './ProfileIcon.scss'

export default function index() {
  const image = 'https://i.pravatar.cc/150'
  return (
    <Link className="profile-icon" to="/profile">
      <div
        className="profile-icon__image"
        style={{ backgroundImage: `url(${image})` }}
      />
    </Link>
  )
}
