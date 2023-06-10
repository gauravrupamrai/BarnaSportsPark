import React from 'react';
import Events from '../components/Events/Events.jsx';
import NavigationBar from '../components/Layout/NavigationBar.jsx';
import Footer from '../components/Layout/Footer.jsx';

const EventsPage = () => {
  return (
    <div>
      <NavigationBar />
        <Events />
        <Footer />
    </div>
  )
}

export default EventsPage
