import React from "react";

const VolunteerForm = () => {
  return (
    <main className="py-14 ">
      <div className="max-w-screen-xl bg-white rounded-xl py-10 mx-auto px-4 text-gray-600 md:px-8">
        <div className=" mx-auto space-y-3 sm:text-center">
          <h3 className="text-indigo-600 font-semibold">Volunteer Form</h3>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Join Our Committee and Make a Difference!
          </p>
          <p>
            Be a part of something great! Join the Barna Sports Park committee
            and help keep our sports park and playground thriving. Volunteer
            your time and assist in the general administration of the park. Your
            dedication and support will make a lasting impact on our community
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium">First name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Last name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Phone number</label>
              <div className="relative mt-2">
                <input
                  type="number"
                  placeholder="0891234567"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                required
                placeholder="Enter any additional information here..."
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              ></textarea>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default VolunteerForm;
