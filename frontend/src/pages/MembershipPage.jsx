import React from 'react';
import NavigationBar from '../components/Layout/NavigationBar.jsx';
import Footer from '../components/Layout/Footer.jsx';
import Membership from '../components/Membership/Membership.jsx';

const MembershipPage = () => {
  return (
    <div>
      <NavigationBar />
        <Membership />
        <Footer />
    </div>
  )
}

export default MembershipPage
