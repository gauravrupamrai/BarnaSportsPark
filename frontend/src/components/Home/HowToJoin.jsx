import React from 'react';
import { joiningProcess } from '../../static/data';

const HowToJoin = () => {
    
        return (
            <section className="py-16">
                <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            How our Membership Works
                        </h3>
                        <p className="mt-3">
                        Kick your feet up towards a healthy journey! With a Park designed for you and by you. Discover a range of flexible membership plans, participate in different sport events and get a chance to meet the community.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-2">
                            {
                                joiningProcess.map((item, idx) => (
                                    <li key={idx} className="bg-white space-y-3 p-4 border rounded-lg">
                                        <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p>
                                            {item.desc}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        )
}

export default HowToJoin
