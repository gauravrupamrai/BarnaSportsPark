import React, { useState } from "react";

const BuyMembershipPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Membership Form</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="membershipType" className="block font-bold mb-1">
            Select Membership Type:
          </label>
          <select
            id="membershipType"
            value={selectedOption}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          >
            <option value="">Select...</option>
            <option value="child">Child</option>
            <option value="adult">Adult</option>
            <option value="family">Family</option>
          </select>
        </div>

        <div className="sm:col-span-3 mb-4">
          <label
            htmlFor="membershipType"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Select Membership Type:
          </label>
          <div className="mt-2">
            <select
              id="membershipType"
              name="membershipType"
              autoComplete="membershipType"
              value={selectedOption}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option value="">Select...</option>
              <option value="child">Child</option>
              <option value="adult">Adult</option>
              <option value="family">Family</option>
            </select>
          </div>
        </div>

        {selectedOption === "child" && (
          <div className="mb-4">
            <label htmlFor="childName" className="block font-bold mb-1">
              Child's Name:
            </label>
            <input
              type="text"
              id="childName"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              placeholder="Enter child's name"
            />
          </div>
        )}

        {selectedOption === "adult" && (
          <div className="mb-4">
            <label htmlFor="adultName" className="block font-bold mb-1">
              Adult's Name:
            </label>
            <input
              type="text"
              id="adultName"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              placeholder="Enter adult's name"
            />
          </div>
        )}

        {selectedOption === "family" && (
          <div className="mb-4">
            <label htmlFor="familyName" className="block font-bold mb-1">
              Family Name:
            </label>
            <input
              type="text"
              id="familyName"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              placeholder="Enter family name"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default BuyMembershipPage;
