import React from 'react'

const Courts = () => {
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
    {
      name: 'The Courts',
      description: 'Barna Sports Park boasts five high-quality tennis courts, including three polymeric surfaced courts with integrated basketball courts and two brand new textile surfaced courts. Our state-of-the-art facilities provide an excellent environment for tennis enthusiasts of all levels.',
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/59406328d482e90beeb3d1fb/1497908603447-0XLR686HVBYCUD1LGSXM/image-asset.jpeg?format=750w',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'The Playground',
      description: 'Barna Sports Park is home to Lios na NnÓg playground, which was officially opened in January 2015. This childrens playground was made possible through four years of fundraising, hard work, and community support. The playground is a testament to community spirit and brings joy to families in the Barna area.',
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/59406328d482e90beeb3d1fb/1497908708881-VX6K9JVBUSRIFQOHED0F/image-asset.jpeg?format=750w',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    // {
    //   name: 'Travel',
    //   description: 'Daily commute essentials',
    //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    //   imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    //   href: '#',
    // },
  ]
  
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Facilities Available</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )  
}

export default Courts
