import React from 'react'
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './Layout.scss'

export default function index(props) {
  return (
    <div className="page">
      <NavBar />
      <Header />
      <div className="container">{props.children}</div>
      <Footer
        links={[
          {
            to: 'https://google.com',
            title: 'Google',
          },
          {
            to: 'https://youtube.com',
            title: 'Youtube',
          },
          {
            to: 'https://facebook.com',
            title: 'Facebook',
          },
          {
            to: 'https://twitter.com',
            title: 'twitter',
          },
        ]}
      />
    </div>
  )
}
