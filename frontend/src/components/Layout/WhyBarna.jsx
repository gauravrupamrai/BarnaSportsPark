import React from 'react'

const WhyBarna = () => {

        const posts = [
            {
                title: "Community-owned and operated",
                desc: "By visiting or becoming a member of Barna Sports Park, you're supporting a community-owned and operated organization that's dedicated to providing top-notch sports and recreation facilities and programs. As a member, you'll have a say in park decisions and be part of a community that's committed to creating a healthy and active place to live.",
                img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            },

            {
                title: "Beautiful, sheltered setting",
                desc: "Barna Sports Park is located in a beautiful, sheltered setting that provides a peaceful and scenic backdrop for all your activities. Surrounded by nature and away from the hustle and bustle of the city, the park offers a tranquil escape where you can relax, recharge, and connect with the world around you.",
                img: "https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=860&q=80",
            },

            {
                title: "Wide range of activities and facilities",
                desc: "Barna Sports Park offers a variety of activities and facilities for people of all ages and interests, including tennis courts, playgrounds, walking trails, and more. With well-maintained and updated facilities, you can feel safe and comfortable while enjoying the great outdoors.",
                img: "https://images.unsplash.com/photo-1553108715-308e8537ce55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
            },
        ]
        
        return (
            <section className=" mx-auto px-4 max-w-screen-xl md:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-3xl text-gray-800 font-semibold">
                        Why Barna Sports Park?
                    </h1>
                    <p className="mt-3 text-gray-500">
                        Few reasons for you to choose us
                    </p>
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        posts.map((items, key) => (
                            <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                                <a href={items.href}>
                                    <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-60 rounded-t-md object-cover object-center" />
                                    <div className="pt-3 ml-4 mr-2 mb-3">
                                        <h3 className="text-xl text-gray-900">
                                            {items.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                                    </div>
                                </a>
                            </article>
                        ))
                    }
                </div>
            </section>
        )    
}

export default WhyBarna
