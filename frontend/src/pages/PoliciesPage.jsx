import React from "react";
import NavigationBar from '../components/Layout/NavigationBar.jsx'
import Footer from '../components/Layout/Footer.jsx'
import Policies from '../components/Policies/Policies.jsx'

const PoliciesPage = () => {
  return (
    <div>
      <NavigationBar />
      <Policies />
      <Footer />
    </div>
  );
};

export default PoliciesPage;
