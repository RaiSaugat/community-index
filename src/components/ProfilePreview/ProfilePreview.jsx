import React from 'react'
import './ProfilePreview.scss'

export default function ProfilePreview({ full_name, username }) {
  return (
    <div className="profile_preview__wrapper">
      <div className="profile_preview__header"></div>
      <div className="profile_preview__picture"></div>
      <div className="profile_preview__body">
        <h4 className="profile_preview_pilot_name">{full_name}</h4>
        <p>{username}</p>
      </div>
    </div>
  )
}
