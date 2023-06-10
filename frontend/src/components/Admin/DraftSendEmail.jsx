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
    <div className="min-h-screen bg-gray-200 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl mx-auto text-center">
        <span className="text-2xl font-light">Email Draft</span>
        <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
          <div className="h-2 bg-indigo-400 rounded-t-md"></div>
          <form className="py-6 px-8" onSubmit={handleSubmit}>
            <label className="block text-sm font-medium leading-tight" htmlFor="subject">Subject</label>
            <input 
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" 
              id="subject" 
              type="text" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
            />
            <label className="block mt-3 text-sm font-medium leading-tight" htmlFor="toAddresses">To Addresses</label>
            <input 
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" 
              id="toAddresses" 
              type="text" 
              value={toAddresses} 
              onChange={(e) => setToAddresses(e.target.value)} 
            />
            <label className="block mt-3 text-sm font-medium leading-tight">Content</label>
            <CKEditor 
              editor={ClassicEditor} 
              data={content} 
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }} 
              ref={editorRef} 
            />
            <div className="mt-6">
              <button 
                className="py-2 px-4 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white text-sm focus:outline-none" 
                type="submit"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DraftSendEmail;