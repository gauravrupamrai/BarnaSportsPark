import React from 'react';
import CTAImage from "../../assets/images/CTA_Image.svg";
import { Link } from 'react-router-dom';

const CTA = () => {

    return (
      <section className=" bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
        <div className="max-w-screen-xl mx-auto px-4 gap-x-12 justify-between md:flex md:px-8">
          <div className="max-w-xl flex items-center"> {/* Add flex and items-center classes */}
            <div>
              <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                Join the Fun at Barna Sports Park
              </h3>
              <p className="mt-3 text-white">
                Join us today for a wide range of exciting activities and events at Barna Sports Park. From state-of-the-art facilities to diverse programs, we have something for everyone. Don't miss out on staying healthy and having fun!
              </p>
            </div>
          </div>
          <div className="flex items-center"> {/* Add flex and items-center classes */}
            <img src={CTAImage} alt="" style={{ margin: 'auto' }} className="h-60" /> {/* Apply margin: auto */}
          </div>
          <div className="flex justify-center mt-4 md:mt-0"> {/* Add flex and justify-center classes */}
            <Link to="/signup" className="inline-block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-md hover:shadow-none" style={{ margin: 'auto' }}> {/* Apply margin: auto */}
              Become a Member today!
            </Link>
          </div>
        </div>
      </section>
    )
  }
  
  

export default CTA
