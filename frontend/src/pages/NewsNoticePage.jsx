
import React from 'react';
import NewsNotice from '../components/NewsNotice/NewsNotice.jsx';
import NavigationBar from '../components/Layout/NavigationBar.jsx';
import Footer from '../components/Layout/Footer.jsx';



const NewsNoticePage = () => {

    
  return (
    <div>
    <NavigationBar />
      <NewsNotice />
      <Footer />
    </div>
  )
}

export default NewsNoticePage
