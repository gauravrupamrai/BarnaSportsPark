import React, { useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { toast } from "react-toastify";
import { GooeyCircleLoader } from "react-loaders-kit";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);
const membershipURL = `${process.env.REACT_APP_APP_URL}/user-new-membership`;
const apiKey = process.env.REACT_APP_API_KEY;

// Helper function to calculate the age
const calculateAge = (dob) => {
  const dobDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - dobDate.getFullYear();
  const m = today.getMonth() - dobDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
    age--;
  }
  return age;
};

// Component for Child Membership
const ChildMembership = ({ childName, setChildName }) => (
  <div>
    <h2 className="text-base font-semibold leading-7 text-gray-900">
      Enter details of the child
    </h2>
    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label
          htmlFor="childName"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Child's Name:
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="childName"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter child's name"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          htmlFor="childDOB"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Child's Date of Birth:
        </label>
        <div className="mt-2">
          <input
            type="date"
            id="childDOB"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>
    </div>
  </div>
);

// Component for Adult Membership
const AdultMembership = ({
  adultName,
  setAdultName,
  adultDOB,
  setAdultDOB,
}) => {
  const currentDate = new Date();
  const minAdultDate = `${currentDate.getFullYear() - 18}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;

  return (
    <div>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Enter details of the Adult
      </h2>
      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="adultName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Adult's Name:
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="adultName"
              value={adultName}
              onChange={(e) => setAdultName(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter adult's name"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="adultDOB"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Adult's Date of Birth:
          </label>
          <div className="mt-2">
            <input
              type="date"
              id="adultDOB"
              value={adultDOB}
              onChange={(e) => setAdultDOB(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              max={minAdultDate}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for Family Membership
const FamilyMembership = ({ familyMembers, handleInputChange }) => (
  <div>
    <h2 className="text-base font-semibold leading-7 text-gray-900">
      Enter details of Family Members
    </h2>
    {familyMembers.map((x, i) => (
      <div
        className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
        key={i}
      >
        <div className="sm:col-span-3">
          <label
            htmlFor={`memberName${i}`}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Family Member {i + 1} Name :
          </label>
          <div className="mt-2">
            <input
              type="text"
              id={`memberName${i}`}
              name="name"
              value={x.name}
              onChange={(e) => handleInputChange(e, i)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter family member's name"
              required={i < 2}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor={`memberDOB${i}`}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Family Member {i + 1} Date of Birth:
          </label>
          <div className="mt-2">
            <input
              type="date"
              id={`memberDOB${i}`}
              name="dob"
              value={x.dob}
              onChange={(e) => handleInputChange(e, i)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required={i < 2}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
);

const BuyMembershipPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [childName, setChildName] = useState("");
  const [adultName, setAdultName] = useState("");
  const [adultDOB, setAdultDOB] = useState("");
  const [familyMembers, setFamilyMembers] = useState([
    { name: "", dob: "" },
    { name: "", dob: "" },
    { name: "", dob: "" },
    { name: "", dob: "" },
    { name: "", dob: "" },
    { name: "", dob: "" },
  ]);
  const { user_token } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const loaderProps = {
    loading,
    size: 80,
    colors: ["#f6b93b", "#5e22f0", "#ef5777"],
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...familyMembers];
    list[index][name] = value;
    setFamilyMembers(list);
  };

  // Handle the submit, using the helper function to calculate the age
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate for adult
    if (selectedOption === "adult") {
      const age = calculateAge(adultDOB);
      if (age < 18) {
        alert("You must be at least 18 years old to proceed.");
        return;
      }
    }

    // Process the form

    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    const newMemberData = {};

    if (selectedOption === "child") {
      newMemberData.member1Name = childName;
      newMemberData.member1DateOfBirth =
        document.getElementById("childDOB").value;
    } else if (selectedOption === "adult") {
      newMemberData.member1Name = adultName;
      newMemberData.member1DateOfBirth = adultDOB;
    } else if (selectedOption === "family") {
      familyMembers.forEach((member, index) => {
        newMemberData[`member${index + 1}Name`] = member.name;
        newMemberData[`member${index + 1}DateOfBirth`] =
          document.getElementById(`memberDOB${index}`).value;
      });
    }

    const requestBody = {
      token: user_token,
      newMemberData: {
        membershipType: selectedOption,
        ...newMemberData,
      },
    };

    console.log("requestBody: ", requestBody);
    console.log("requestConfig: ", requestConfig);

    axios
      .post(membershipURL, requestBody, requestConfig)
      .then((response) => {
        setLoading(false);
        const { checkoutSessionId } = response.data.body;
        stripePromise.then((stripe) => {
          stripe
            .redirectToCheckout({
              sessionId: checkoutSessionId,
            })
            .then((res) => {
              if (res.error) {
                setLoading(false);
                console.log(res.error.message);
              }
            });
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log("error: ", error);
        if (error.response.status === 401 || error.response.status === 403) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      });
  };

  return (
    <>
      <header className="bg-sky-50 shadow">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Memberships
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <form
            className="bg-white px-10 py-6 rounded-xl"
            onSubmit={handleSubmit}
          >
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-5">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Membership Form
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Please enter your details below to buy new membership.
                </p>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="membershipType"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Select Membership Type:
                    </label>
                    <div className="mt-2">
                      <select
                        id="membershipType"
                        value={selectedOption}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      >
                        <option value="">Select...</option>
                        <option value="child">Child</option>
                        <option value="adult">Adult</option>
                        <option value="family">Family</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                {selectedOption === "child" && (
                  <ChildMembership
                    childName={childName}
                    setChildName={setChildName}
                  />
                )}
                {selectedOption === "adult" && (
                  <AdultMembership
                    adultName={adultName}
                    setAdultName={setAdultName}
                    adultDOB={adultDOB}
                    setAdultDOB={setAdultDOB}
                  />
                )}
                {selectedOption === "family" && (
                  <FamilyMembership
                    familyMembers={familyMembers}
                    handleInputChange={handleInputChange}
                  />
                )}
              </div>
            </div>

            <div className="mt-12">
              {loading ? (
                <div className="flex justify-center mt-4">
                  <GooeyCircleLoader {...loaderProps} />
                </div>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default BuyMembershipPage;
