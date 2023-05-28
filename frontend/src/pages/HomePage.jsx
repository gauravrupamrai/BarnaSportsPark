import React from 'react'
import NotificationBar from '../components/Layout/NotificationBar.jsx'
import AboutUs from '../components/Layout/AboutUs.jsx'
import NavigationBar from '../components/Layout/NavigationBar.jsx'
import PricingPlans from '../components/Layout/PricingPlans.jsx'
import Hero from '../components/Layout/Hero.jsx'

const HomePage = () => {
  return (
    <div>
      <NotificationBar />
      <NavigationBar />
      <Hero />
      <AboutUs />
      <PricingPlans />
    </div>
  )
}

export default HomePage;
