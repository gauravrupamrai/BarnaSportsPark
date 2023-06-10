import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const FAQs = () => {
  const faqsList = [
    {
      q: "How do I get to the Park?",
      a: <>We encourage patrons to walk from City Centre where possible (30 minutes) or to use public transport (Galway City Bus service). Please go to the <Link to = "/contactUs" className="text-indigo-600"> Contact Us </Link> page to find the most efficient way via Google Maps Pinned Location.</>,
    },
    {
      q: "Are there any Park Tours available to the general public?",
      a: "Yes, fortunately there are Park Tours available. Barna Sports Park is available for the locals to visit  from 5 a.m. to 11 p.m. One can simply drop in and enjoy the facilities within the time limits.",
    },
    {
      q: "Can I use a cloakroom or locker?",
      a: "Yes, members of the barna sport park community can access a locker. They can opt in for the facility as required with a minimum charge and similar they can even opt out while the money is refunded back to the source.",
    },
    {
      q: "What events are on at the park?",
      a: <>Check the <Link to = "/events" className="text-indigo-600">Events page</Link> for up to date information on the upcoming events at the park. Alternatively, you can also see the notice or news flash on the Home Page.</>
    },
    {
      q: "How do I report any theft or lost property?",
      a: <>For information on lost property please contact <a href="mailto:barnasportspark@gmail.com" className="text-indigo-600">barnasportspark@gmail.com</a>, You can even make a call at +1 (555) 000-000 or report an incident to the community head.</>,
    },
    {
      q: "Are there any toilets facilities available?",
      a: "Yes. There are 3 accessible toilets in the park- for females, males and specially abled people. The usage charge is 0.20 cents per person. The toilets are located adjacent to the main gates",
    },
    {
      q: "Are there any facilities for disabled/ specially abled people?",
      a: <>In order to assist special people the community has a group of members who volunteer and can get in touch with. 
      For more information you can call at +1 (555) 000-000 or send an email to contact <a href="mailto:barnasportspark@gmail.com" className="text-indigo-600">barnasportspark@gmail.com</a>.
      </>,
    },
  ];

  return (
    <div className="py-10">
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 pb-20 pt-10 bg-white rounded-3xl">
    
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to <Link to="/contactus" className="text-indigo-600"> contact us.</Link>
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
      
    </section>
    </div>
  );
};

export default FAQs;
