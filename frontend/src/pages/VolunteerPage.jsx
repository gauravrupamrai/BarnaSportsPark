import React from 'react';
import NavigationBar from "../components/Layout/NavigationBar.jsx";
import VolunteerForm from "../components/Volunteer/VolunteerForm.jsx";
import Footer from "../components/Layout/Footer.jsx";

const VolunteerPage = () => {
  return (
<div>
        <NavigationBar />
<VolunteerForm />
<Footer />
</div>
  )
}

export default VolunteerPage
