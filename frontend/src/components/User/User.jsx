import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/reducers/user";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GooeyCircleLoader } from "react-loaders-kit";

const getProfileURL = `${process.env.REACT_APP_APP_URL}/user-profile-info`;
const apiKey = process.env.REACT_APP_API_KEY;
const profileUpdateURL = `${process.env.REACT_APP_APP_URL}/user-profile-update`;

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = useState([]);
  const { user_token } = useSelector((state) => state.user);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [eirCode, setEirCode] = useState("");
  const [country, setCountry] = useState("");
  const [emailPreferences, setEmailPreferences] = useState([]);

  const [updateMode, setUpdateMode] = useState(false);
  const [prevUserData, setPrevUserData] = useState({});

  const [loading, setLoading] = useState(false);
    const loaderProps = {
    loading: loading,
    size: 80,
    colors: ["#f6b93b", "#5e22f0", "#ef5777"],
  };

  const [infoLoading, setInfoLoading] = useState(true);
  const infoLoaderProps = {
    loading: infoLoading,
    size: 160,
    colors: ["#f6b93b", "#5e22f0", "#ef5777"],
  };

  useEffect(() => {
    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    console.log("User Token:", user_token);

    const finalURL = `${getProfileURL}?token=${user_token}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(finalURL, requestConfig);
        if (response.status === 200) {
          setInfoLoading(false);
        }
        const userData = response.data.body;

        setUserName(userData.name);
        setEmail(userData.email);
        setPhoneNumber(userData.phoneNumber);
        setAddress1(userData.addresses[0].address1);
        setAddress2(userData.addresses[0].address2);
        setCity(userData.addresses[0].city);
        setCounty(userData.addresses[0].county);
        setEirCode(userData.addresses[0].eirCode);
        setCountry(userData.addresses[0].country);
        setEmailPreferences(userData.emailPreferences);

        setPrevUserData(userData);

        console.log(response);
        console.log(response.data.body);
        console.log(response.status);

        setUserProfile(response.data.body);
        // Log removed here, won't give updated state immediately

        console.log(response.data.body);
      } catch (error) {
        setInfoLoading(false);
        console.log(error);
        // If the request was made and the server responded with a status code
        // that falls out of the range of 2xx, error.response can be used to get the error details.
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // If the request was made but no response was received, error.request can be used to get the error details.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.log("Error", error.message);
        }

        if (error.response.status === 401) {
          navigate("/");
          dispatch(setUser(null));
        }
      }
    };

    fetchData();
  }, [user_token]);

  const handleUpdate = () => {
    setUpdateMode(true);
  };

  const handleCancel = () => {
    setUserName(prevUserData.name);
    setEmail(prevUserData.email);
    setPhoneNumber(prevUserData.phoneNumber);
    setAddress1(prevUserData.addresses[0].address1);
    setAddress2(prevUserData.addresses[0].address2);
    setCity(prevUserData.addresses[0].city);
    setCounty(prevUserData.addresses[0].county);
    setEirCode(prevUserData.addresses[0].eirCode);
    setCountry(prevUserData.addresses[0].country);

    setUpdateMode(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    const requestBody = {
      token: user_token,
      userUpdate: {
        phoneNumber: phoneNumber,
        addresses: {
          address1: address1,
          address2: address2,
          city: city,
          county: county,
          eirCode: eirCode,
          country: country,
        },
        emailPreferences: emailPreferences,
      },
    };

    axios
      .post(profileUpdateURL, requestBody, requestConfig)
      .then((response) => {
        setLoading(false);
        toast.success("Profile Updated Successfully.");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 409 || error.response.status === 401) {
          console.log(error.response.data.message);
          toast.error(error.response.data.message);
        } else {
          if (error.response.data.message) {
            toast.error(error.response.data.message);
          } else {
            toast.error("Something went wrong. Please try again later.");
          }
        }
      });
  };

  // useEffect hook to log the userProfile state whenever it changes
  useEffect(() => {
    console.log(userProfile);
  }, [userProfile]);

  return (
    
    <>

      <header className="bg-sky-50 shadow">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Hello User!
          </h1>
        </div>
      </header>

      { infoLoading ? (
      <div className="flex justify-center items-center mt-4">
            <GooeyCircleLoader {...infoLoaderProps} />
          </div>
    ) :(
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <form
            className="bg-white px-10 py-6 rounded-xl"
            onSubmit={handleSubmit}
          >
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-5 flex justify-between items-center">
                <div>
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Profile
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    This page displays your profile information.
                  </p>
                </div>
                <div className="flex items-center gap-x-6">
                  {!updateMode && (
                    <button
                      type="button"
                      className="group relative w-full h-[40px] flex justify-center py-2 px-4 text-sm text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
                      onClick={handleUpdate}
                    >
                      Edit profile
                    </button>
                  )}
                  {updateMode && (
                    <>
                      {loading ? (
                        <div className="flex justify-center mt-4">
                          <GooeyCircleLoader {...loaderProps} />
                        </div>
                      ) : (
                        <button
                          type="submit"
                          className="rounded-md bg-indigo-600 px-4 py-2 w-full text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Update Profile
                        </button>
                      )}

                      <button
                        type="button"
                        className="group relative w-full h-[40px] flex justify-center py-2 px-4 text-sm text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Personal Information
                </h2>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={userName}
                        readOnly={!updateMode || loading}
                        disabled={!updateMode || loading}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={email}
                        readOnly={!updateMode || loading}
                        disabled={!updateMode || loading}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phone-number"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="number"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={phoneNumber}
                        readOnly={!updateMode || loading}
                        disabled={!updateMode || loading}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="country"
                        id="country"
                        autoComplete="country"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={country}
                        readOnly={!updateMode || loading}
                        disabled={!updateMode || loading}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="street-address-1"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street address 1
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="street-address-1"
                        id="street-address-1"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={address1}
                        readOnly={!updateMode || loading}
                        disabled={!updateMode || loading}
                        onChange={(e) => setAddress1(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="street-address-2"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street address 2
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="street-address-2"
                        id="street-address-2"
                        autoComplete="street-address-2"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={address2}
                        readOnly={!updateMode || loading}
                        disabled={!updateMode || loading}
                        onChange={(e) => setAddress2(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={city}
                        readOnly={!updateMode || loading}
                        disabled={!updateMode || loading}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      County
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={county}
                        readOnly={!updateMode || loading}
                        disabled={!updateMode || loading}
                        onChange={(e) => setCounty(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      EIR Code
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={eirCode}
                        readOnly={!updateMode || loading}
                        disabled={!updateMode || loading}
                        onChange={(e) => setEirCode(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Notifications
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  We'll always let you know about important changes, but you
                  pick what else you want to hear about.
                </p>

                <div className="mt-10 space-y-10">
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      By Email
                    </legend>
                    <div className="mt-6 space-y-6">
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="reminders"
                            name="reminders"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            checked={emailPreferences.includes("Reminders")}
                            readOnly={!updateMode || loading}
                        disabled={!updateMode || loading}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setEmailPreferences([
                                  ...emailPreferences,
                                  "Reminders",
                                ]);
                              } else {
                                setEmailPreferences(
                                  emailPreferences.filter(
                                    (pref) => pref !== "Reminders"
                                  )
                                );
                              }
                            }}
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="reminders"
                            className="font-medium text-gray-900"
                          >
                            Reminders
                          </label>
                          <p className="text-gray-500">
                            Get notified when someones posts a comment on a
                            posting.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="events"
                            name="events"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            checked={emailPreferences.includes("Events")}
                            readOnly={!updateMode || loading}
                        disabled={!updateMode || loading}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setEmailPreferences([
                                  ...emailPreferences,
                                  "Events",
                                ]);
                              } else {
                                setEmailPreferences(
                                  emailPreferences.filter(
                                    (pref) => pref !== "Events"
                                  )
                                );
                              }
                            }}
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="events"
                            className="font-medium text-gray-900"
                          >
                            Events
                          </label>
                          <p className="text-gray-500">
                            Get notified when a new event is listed.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="promotions"
                            name="promotions"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            checked={emailPreferences.includes("Promotions")}
                            readOnly={!updateMode || loading}
                        disabled={!updateMode || loading}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setEmailPreferences([
                                  ...emailPreferences,
                                  "Promotions",
                                ]);
                              } else {
                                setEmailPreferences(
                                  emailPreferences.filter(
                                    (pref) => pref !== "Promotions"
                                  )
                                );
                              }
                            }}
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="promotions"
                            className="font-medium text-gray-900"
                          >
                            Promotions
                          </label>
                          <p className="text-gray-500">
                            Get notified of new promotions we offer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      )}
    </>
    
  );
};

export default User;
