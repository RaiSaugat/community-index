import React from 'react'
import { Helmet } from 'react-helmet'

export default function Index(props) {
  return (
    <Helmet titleTemplate="%s | Community Index">
      <title>{props.title}</title>
      <html lang="en" />
      <meta name="description" content="Community Index" />
    </Helmet>
  )
}
