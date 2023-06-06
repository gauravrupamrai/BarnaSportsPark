import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MembershipSuccessPage = () => {
  const location = useLocation();

  useEffect(() => {
    // This function parses the query parameters from the URL.
    function getQueryParams(params, url) {
      let href = url;
      let reg = new RegExp( '[?&]' + params + '=([^&#]*)', 'i' );
      let queryString = reg.exec(href);
      return queryString ? queryString[1] : null;
    }

    // Retrieve the session_id parameter from the URL
    let sessionId = getQueryParams('session_id', location.search);

    if (sessionId) {
      // You have the session_id. You can use it to retrieve the payment status and details from your server.
      console.log("Stripe Session ID: ", sessionId);

      // If you have an API endpoint that can fetch the details of the session from the server, you can call it here.
      // fetchDetails(sessionId);
    }
  }, [location]);

  return (
    <div>
      <h1>Membership Purchase Successful!</h1>
      <p>Thank you for your purchase. Your membership is now active.</p>
    </div>
  );
};

export default MembershipSuccessPage;
