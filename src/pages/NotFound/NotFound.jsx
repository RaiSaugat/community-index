import React from 'react'
import Meta from './../../components/Meta/Meta'
import astronaut from './astronaut.png'
import './style.scss'

export default function index() {
  return (
    <div className="not-found-page">
      <Meta title="404" />
      <div className="not-found-page__content">
        <div className="not-found-page__content__astronaut">
          <figure>
            <img src={astronaut} alt="astronaut" />
          </figure>
        </div>
        <div className="not-found-page__content__phrase">
          <h2 className="not-found-page__content__phrase__status">404</h2>
          <h3 className="not-found-page__content__phrase__text">NOT FOUND</h3>
          <a href="/" className="not-found-page__content__phrase__button">
            Back to the world
          </a>
        </div>
      </div>
      <div className="not-found-page__footer">
        <p>You are in the void bro.</p>
      </div>
    </div>
  )
}
