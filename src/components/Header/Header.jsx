import React from 'react'
import './Header.scss'
import ProgressiveImage from 'react-progressive-image'

export default function Header() {
  return (
    // replace value of placeholder attribute with the location of Low-res image and the value of src with location of high-res image
    //I purposely made the High-res image very large so that the effect can be observed
    <ProgressiveImage
      src="https://images.unsplash.com/flagged/photo-1568619612917-c112de048ebc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=10800&fit=max"
      placeholder="https://images.unsplash.com/flagged/photo-1568619612917-c112de048ebc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=108&fit=max"
    >
      {src => (
        <div
          className="header__wrapper"
          style={{ backgroundImage: "url('" + src + "')" }}
        ></div>
      )}
    </ProgressiveImage>
  )
}
