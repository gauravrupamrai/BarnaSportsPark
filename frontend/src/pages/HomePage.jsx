import React from 'react'
import NotificationBar from '../components/Layout/NotificationBar.jsx'
import AboutUs from '../components/Layout/AboutUs.jsx'
import NavigationBar from '../components/Layout/NavigationBar.jsx'
import PricingPlans from '../components/Layout/PricingPlans.jsx'
import Hero from '../components/Layout/Hero.jsx'
import Footer from '../components/Layout/Footer.jsx'
import HowToJoin from '../components/Layout/HowToJoin.jsx'
import WhyBarna from '../components/Layout/WhyBarna.jsx'
import Stats from '../components/Layout/Stats.jsx'
import DiffPlans from '../components/Layout/DiffPlans.jsx'
import Courts from '../components/Layout/Courts.jsx'
import CTA from '../components/Layout/CTA.jsx'
import Events from '../components/Layout/Events.jsx'

const HomePage = () => {
  return (
    <div>
      <NotificationBar />
      {/* <NavigationBar /> */}
      <Hero />
      <AboutUs />
      <Stats />
      <WhyBarna />
      <DiffPlans />
      <HowToJoin />
      <Courts />
      <CTA />
      <Events />
      {/* <PricingPlans /> */}
      <Footer />
    </div>
  )
}

export default HomePage;
