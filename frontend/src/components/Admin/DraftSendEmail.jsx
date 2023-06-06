import React, { useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { toast } from "react-toastify";

const sendEmailURL = `${process.env.REACT_APP_APP_URL}/sendCustomEmail`;
const apiKey = process.env.REACT_APP_API_KEY;

const DraftSendEmail = () => {
  const [subject, setSubject] = useState("");
  const [toAddresses, setToAddresses] = useState("");
  const [content, setContent] = useState("");
  const editorRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("URL:", sendEmailURL);
    console.log("API Key:", apiKey);
    console.log("Content:", content);

    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    const requestBody = {
      to_addresses: toAddresses,
      subject: subject,
      body: content,
    };

    console.log("Request Body:", requestBody);

    axios
      .post(sendEmailURL, requestBody, requestConfig)
      .then((response) => {
        toast.success("Content Created");
      })
      .catch((error) => {
        if (error.response.status === 409 || error.response.status === 401) {
          console.log(error.response.data.message);
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="subject">
              Subject
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none bg-gray-200 text-gray-700 rounded py-3 px-4 md:mr-3 leading-tight focus:outline-none focus:bg-white"
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="toAddresses">
            toAddresses
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none bg-gray-200 text-gray-700 rounded py-3 px-4 md:mr-3 leading-tight focus:outline-none focus:bg-white"
              id="toAddresses"
              type="text"
              value={toAddresses}
              onChange={(e) => setToAddresses(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Content
            </label>
          </div>
          <div className="md:w-2/3">
            <CKEditor
              editor={ClassicEditor}
              data={content}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
              ref={editorRef}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Log Content
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DraftSendEmail;