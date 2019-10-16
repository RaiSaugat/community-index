import React, { useEffect, useState } from 'react'
import './App.css'
import ProfilePreview from './components/ProfilePreview/ProfilePreview'
import Layout from './components/Layout/Layout'
import Meta from './components/Meta/Meta'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const FETCH_USERS = gql`
  query fetchUsers {
    user_tbl {
      full_name
      username
    }
  }
`

function App() {
  const { data: usersData, error: usersDataError } = useQuery(FETCH_USERS)
  const [userProfiles, setUserProfiles] = useState([])

  useEffect(() => {
    if (usersData && usersData.user_tbl) {
      setUserProfiles(usersData.user_tbl)
    }
  }, [usersData])

  if (usersDataError) alert('Error when loading users data.')

  return (
    <Layout>
      <Meta title="Home" />
      <div className="profile__preview__container" style={{ height: '150vh' }}>
        {userProfiles &&
          userProfiles.map(userData => (
            <ProfilePreview
              full_name={userData.full_name}
              username={userData.username}
            />
          ))}
      </div>
    </Layout>
  )
}

export default App
