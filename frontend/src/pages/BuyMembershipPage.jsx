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
    <h2 className="text-base font-bold text-gray-900">
      Enter details of the child
    </h2>
    <div className="mt-5 space-y-5">
      <div>
        <label
          htmlFor="childName"
          className="font-semibold text-sm text-gray-600 pb-1 block"
        >
          Child's Name:
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="childName"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            className="w-full border bg-white rounded-md py-3 px-4 text-gray-900 outline-none text-sm transition duration-150 ease-in-out mb-4"
            placeholder="Enter child's name"
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="childDOB"
          className="font-semibold text-sm text-gray-600 pb-1 block"
        >
          Child's Date of Birth:
        </label>
        <div className="mt-1">
          <input
            type="date"
            id="childDOB"
            className="w-full border bg-white rounded-md py-3 px-4 text-gray-900 outline-none text-sm transition duration-150 ease-in-out mb-4"
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
      <h2 className="text-base font-bold text-gray-900">
        Enter details of the Adult
      </h2>
      <div className="mt-5 space-y-5">
        <div>
          <label
            htmlFor="adultName"
            className="font-semibold text-sm text-gray-600 pb-1 block"
          >
            Adult's Name:
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="adultName"
              value={adultName}
              onChange={(e) => setAdultName(e.target.value)}
              className="w-full border bg-white rounded-md py-3 px-4 text-gray-900 outline-none text-sm transition duration-150 ease-in-out mb-4"
              placeholder="Enter adult's name"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="adultDOB"
            className="font-semibold text-sm text-gray-600 pb-1 block"
          >
            Adult's Date of Birth:
          </label>
          <div className="mt-1">
            <input
              type="date"
              id="adultDOB"
              value={adultDOB}
              onChange={(e) => setAdultDOB(e.target.value)}
              className="w-full border bg-white rounded-md py-3 px-4 text-gray-900 outline-none text-sm transition duration-150 ease-in-out mb-4"
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
    <h2 className="text-base font-bold text-gray-900">
      Enter details of Family Members
    </h2>
    {familyMembers.map((x, i) => (
      <div className="mt-5 space-y-5" key={i}>
        <div>
          <label
            htmlFor={`memberName${i}`}
            className="font-semibold text-sm text-gray-600 pb-1 block"
          >
            Family Member {i + 1} Name :
          </label>
          <div className="mt-1">
            <input
              type="text"
              id={`memberName${i}`}
              name="name"
              value={x.name}
              onChange={(e) => handleInputChange(e, i)}
              className="w-full border bg-white rounded-md py-3 px-4 text-gray-900 outline-none text-sm transition duration-150 ease-in-out mb-4"
              placeholder="Enter family member's name"
              required={i < 2}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor={`memberDOB${i}`}
            className="font-semibold text-sm text-gray-600 pb-1 block"
          >
            Family Member {i + 1} Date of Birth:
          </label>
          <div className="mt-1">
            <input
              type="date"
              id={`memberDOB${i}`}
              name="dob"
              value={x.dob}
              onChange={(e) => handleInputChange(e, i)}
              className="w-full border bg-white rounded-md py-3 px-4 text-gray-900 outline-none text-sm transition duration-150 ease-in-out mb-4"
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
            Membership form for new membership
          </h1>
        </div>
      </header>

      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <header className="text-center">
                {/* <h1 className="text-2xl font-bold text-gray-900">Memberships</h1> */}
                <p className="mt-1 text-sm text-gray-600">
                  Please enter your details below to buy new membership.
                </p>
              </header>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="membershipType"
                    className="font-semibold text-sm text-gray-600 pb-1 block"
                  >
                    Select Membership Type:
                  </label>
                  <select
                    id="membershipType"
                    value={selectedOption}
                    onChange={handleChange}
                    className="w-full border bg-white rounded-md py-3 px-4 outline-none text-sm transition duration-150 ease-in-out mb-4"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="child">Child</option>
                    <option value="adult">Adult</option>
                    <option value="family">Family</option>
                  </select>
                </div>

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

                <div>
                  {loading ? (
                    <div className="flex justify-center mt-4">
                      <GooeyCircleLoader {...loaderProps} />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold text-sm shadow-lg hover:bg-blue-700 focus:outline-none transition duration-500 transform hover:-translate-y-1 hover:scale-110"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyMembershipPage;
