import React from 'react'
import { IoMdCreate } from 'react-icons/io';
import { MdIncompleteCircle } from 'react-icons/md';
import { GrSelect } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import DiffPlans from '../Home/DiffPlans';


const Membership = () => {

    const howToBecomeMember = [
        {
            icon: <IoMdCreate className='w-8 h-8' />,
            title: "Register your account",
            desc: <> <Link to = "/signup" className='text-indigo-600'> Please click on the link to register your account.</Link> </>
        },
        {
            icon: <MdIncompleteCircle className='w-8 h-8' />,
            title: "Complete your profile",
            desc: "Complete your profile with your information."
        },
        {
            icon: <GrSelect className='w-8 h-8' />,
            title: "Buy a membership plan",
            desc: "Choose from different plans and select the most suitable one for you."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>,
            title: "Look out for your FOB access",
            desc: "Once you have purchased a membership plan, you will receive an email with your FOB access."
        },
    ]


  return (
    <div>
          <section className="py-10">
        <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8 ">
          <div className=" md:mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Membership: Join Barna Sports Park Community
            </h3>
            <p className="mt-3 text-gray-600">
            Becoming a member of Barna Sports Park is more than just access to premium sports facilities - it's becoming part of a community that values health, fun, and camaraderie.
            </p>
          </div>
        </div>
      </section>
      <DiffPlans />
      <section className="relative py-28">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-900 justify-between gap-24 lg:flex md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-black text-3xl font-semibold sm:text-4xl">
                    How to Become a Member
                    </h3>
                    <p className="mt-3">
                    Joining Barna Sports Park is easy and done entirely online. Whether you're a new member or renewing your membership, just follow these steps
                    <br /> <br />
                    <span className='font-italic text-gray-900'>Please note: Membership is open throughout the year. However, to maintain the quality of our facilities and services, the membership fee remains the same regardless of when you join during the year.</span>
                    </p>
                </div>
                <div className="mt-12 lg:mt-0">
                    <ul className="grid gap-8 sm:grid-cols-2">
                        {
                            howToBecomeMember.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-900 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            
        </section>
        <section className="py-14 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 text-left text-gray-600 md:px-8">
          <div className="mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Accessing the Courts Using Your Membership Fob
            </h3>
            <p className="mt-3">
            Upon joining Barna Sports Park, you will receive an email within a week detailing how to book courts and collect your membership fob from Haven Pharmacy in Barna. Each family membership gets one fob, while individual adult members receive one fob per adult.
<br /> <br />
Your membership fob is your key to access our tennis courts. Simply hold it close to the access control entry system on the door of the tennis court and voila - the door opens!
<br /><br /><span className='font-semibold'>Important: Please take good care of your fob and avoid sharing it with non-members. In the unfortunate event of losing your fob, it will be deactivated, and a replacement will cost €25. Additionally, please ensure the court gates are securely closed after use</span>
            </p>
          </div>
        </div>
      </section>
      <section className="py-14 ">
        <div className="max-w-screen-xl mx-auto px-4 text-left text-gray-600 md:px-8">
          <div className="mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Safety First
            </h3>
            <p className="mt-3">
            We implore parents to instruct their children not to attempt climbing over the fences to access the tennis courts. Such actions are dangerous and may lead to being trapped within the courts. Our new access control system is in place to enhance security and deter anti-social behavior. Let's keep Barna Sports Park safe and enjoyable for everyone!ates are securely closed after use
            </p>
          </div>
        </div>
      </section>
        
    </div>
  )
}

export default Membership
