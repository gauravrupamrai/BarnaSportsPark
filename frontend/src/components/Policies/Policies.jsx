import React from "react";
import GDPR from "../../assets/documents/Barna_Sports_Park_GDPR_Policy.pdf"
import CP from "../../assets/documents/BSP_Child_Protection_Notice_June_2022.pdf"
import GR from "../../assets/documents/Rules_Comharchumann_Bearna_Teoranta.pdf"


const Policies = () => {

  const openPDF = (path) => {
    window.open(path, "_blank");
  };

  return (
    <div>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8 ">
          <div className=" md:mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Policies and Rules of Barna Sports Park
            </h3>
            <p className="mt-3 text-gray-600">
            Welcome to Barna Sports Park! We strive to provide a safe and enjoyable environment for all visitors. To ensure everyone's well-being and maintain a positive experience, we have established some policies and rules that we ask all visitors to follow. Please read through the following policies and rules carefully before visiting Barna Sports Park.
            <br /> <br />
            Please note that failure to comply with these policies and rules may result in the suspension of park privileges. We appreciate your cooperation in making Barna Sports Park a fun and safe place for everyone. Should you have any questions or concerns, please don't hesitate to contact our friendly staff. Enjoy your time at Barna Sports Park!
            </p>
          </div>
          <div className="flex gap-3 items-center mt-4 md:justify-center">
            <a
              href="#owners"
              className="inline-block py-2 px-4 text-gray-800 font-medium duration-150 border hover:bg-gray-50 active:bg-gray-100 rounded-lg"
              onClick={() => openPDF(GDPR)}
            >
              GDPR Policy - Barna Sports Park
            </a>

          </div>
          <div className="flex gap-3 items-center mt-4 md:justify-center">
            <a
              href="#owners"
              className="inline-block py-2 px-4 text-gray-800 font-medium duration-150 border hover:bg-gray-50 active:bg-gray-100 rounded-lg"
              onClick={() => openPDF(CP)}
            >
              Barna Sports Park Child Protection Policy
            </a>

          </div>
          <div className="flex gap-3 items-center mt-4 md:justify-center">
            <a
              href="#owners"
              className="inline-block py-2 px-4 text-gray-800 font-medium duration-150 border hover:bg-gray-50 active:bg-gray-100 rounded-lg"
              onClick={() => openPDF(GR)}
            >
              Barna Sports Park General Notice
            </a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;
