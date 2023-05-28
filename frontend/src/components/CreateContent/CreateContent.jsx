import React, { useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { toast } from "react-toastify";

const createContentURL = `${process.env.REACT_APP_APP_URL}/create-notice`;
const apiKey = process.env.REACT_APP_API_KEY;

const CreateContent = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [homeVisible, setHomeVisible] = useState(false);
  const editorRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("URL:", createContentURL);
    console.log("API Key:", apiKey);
    console.log("Content:", content);

    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    const requestBody = {
      contentType: type,
      contentTitle: title,
      content: content,
      displayOnHome: homeVisible,
    };

    console.log("Request Body:", requestBody);

    axios
      .post(createContentURL, requestBody, requestConfig)
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
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="title">
              Title
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none bg-gray-200 text-gray-700 rounded py-3 px-4 md:mr-3 leading-tight focus:outline-none focus:bg-white"
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="type">
              Type
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none bg-gray-200 text-gray-700 rounded py-3 px-4 md:mr-3 leading-tight focus:outline-none focus:bg-white"
              id="type"
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" id="homeVisible" checked={homeVisible} onChange={(e) => setHomeVisible(e.target.checked)} />
            <span className="text-sm">Display on Home</span>
          </label>
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

export default CreateContent;
