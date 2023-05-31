import React from 'react'
import NotificationBar from '../components/Home/NotificationBar.jsx'
import NavigationBar from '../components/Layout/NavigationBar.jsx'
import Hero from '../components/Home/Hero.jsx'
import AboutUs from '../components/Home/AboutUs.jsx'
import Stats from '../components/Home/Stats.jsx'
import WhyBarna from '../components/Home/WhyBarna.jsx'
import DiffPlans from '../components/Home/DiffPlans.jsx'
import HowToJoin from '../components/Home/HowToJoin.jsx'
import Courts from '../components/Home/Courts.jsx'
import CTA from '../components/Home/CTA.jsx'
import Events from '../components/Home/Events.jsx'
import Footer from '../components/Layout/Footer.jsx'



const HomePage = () => {
  return (
    <div>
      <NotificationBar />
      <NavigationBar />
      <Hero />
      <AboutUs />
      <Stats />
      <WhyBarna />
      <DiffPlans />
      <HowToJoin />
      <Courts />
      <CTA />
      <Events />
      <Footer />
    </div>
  )
}

export default HomePage;
