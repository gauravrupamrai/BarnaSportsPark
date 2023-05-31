import React from 'react';
import { Link } from 'react-router-dom';
import { facilities } from '../../static/data';

const Courts = () => {
  
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Facilities Available</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              {facilities.map((facilities) => (
                <div key={facilities.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={facilities.imageSrc}
                      alt={facilities.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <Link to={facilities.url}>
                      <span className="absolute inset-0" />
                      {facilities.name}
                    </Link>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{facilities.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )  
}

export default Courts
