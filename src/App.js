import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Header from './components/Header'
import ProfilePreview from './components/ProfilePreview'
import Layout from './components/Layout'
import Meta from './components/Meta'

function App() {
  return (
    <Layout>
      <Meta title="Home" />
      <div className="profile__preview__container" style={{ height: "150vh" }}>
        <ProfilePreview></ProfilePreview>
      </div>
    </Layout>
  );
}

export default App;
