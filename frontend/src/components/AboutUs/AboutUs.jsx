import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8 ">
          <div className=" md:mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Building Community through Sports and Recreation
            </h3>
            <p className="mt-3 text-gray-600">
              At Barna Sports Park, we are committed to providing high-quality
              facilities and programs that meet the needs of our community. Our
              park is owned by the people of Barna and is run by a dedicated
              management committee known as Barna Co-Op. We rely on the support
              of our community to keep our facilities in top condition and to
              continue to develop new offerings that serve the needs of our
              residents.
            </p>
          </div>
          <div className="flex gap-3 items-center mt-4 md:justify-center">
            <a
              href="#history"
              className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
            >
              History of Barna Sports Park
            </a>
            <a
              href="#owners"
              className="inline-block py-2 px-4 text-gray-800 font-medium duration-150 border hover:bg-gray-50 active:bg-gray-100 rounded-lg"
            >
              Who Owns Barna Sports Park?
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white" id="history">
        <div className="max-w-screen-xl mx-auto px-4 py-10 md:text-center md:px-8">
          <div className=" space-y-3 md:mx-auto">
            <h3 className="text-indigo-600 font-semibold">
              Building a Community Legacy at Barna Sports Park
            </h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              The History of Barna Sports Park and the Founding Visionaries
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="md:max-w-lg sm:rounded-lg"
                alt=""
              />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <p className="mt-3 text-gray-600">
                In 1976, Comharchumann Bearna Teo, also known as Barna Co-Op,
                was established through the efforts of five local men: Jimmy
                Cunningham, Liam Geraghty, Tommy Kavanagh, Bosco McDermott, and
                Gearoid Mac Eoin. Their collective vision and foresight led them
                to invest in two acres of land at Troscai Thiar, dedicated to
                serving the community's needs.
                <br />
                <br />
                The impact of these founding members of Barna Co-Op cannot be
                overstated. Their selfless act has provided countless benefits
                to the community, especially to numerous individuals and
                children who have cherished this remarkable space throughout the
                years. Today, Barna Sports Park stands as a testament to their
                enduring legacy, captivating community members as they embrace
                the wonders of the great outdoors within its picturesque and
                sheltered surroundings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14" id="owners">
        <div className="max-w-screen-xl mx-auto px-4 py-10 md:text-center md:px-8">
          <div className=" space-y-3 md:mx-auto">
            <h3 className="text-indigo-600 font-semibold">
            Empowering the Community: Barna Sports Park, Owned and Managed by Barna Co-Op
            </h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Ownership and Management: A Collective Effort at Barna Sports Park
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <p className="mt-3 text-gray-600">
              Barna Sports Park stands as a testament to community empowerment, as it is owned by the people of Barna and managed by the dedicated committee known as Barna Co-Op or Comharchumann Bearna Teo, who act on behalf of the community. The development of the park's facilities has been made possible through a combination of local fundraising initiatives, as well as support from various grant programs provided by the Government and the European Union.
<br /> <br />
This collective effort has transformed Barna Sports Park into a vibrant hub, driven by the shared vision and determination of the community. Through the commitment and stewardship of Barna Co-Op, the park continues to thrive, providing an exceptional recreational space for residents and visitors alike.
              </p>
            </div>
            <div className="flex-1 sm:hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="md:max-w-lg sm:rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
