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
    <div className="flex items-center rounded-2xl justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Type
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="type"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <input className="mr-2 leading-tight" type="checkbox" id="homeVisible" checked={homeVisible} onChange={(e) => setHomeVisible(e.target.checked)} />
            Display on Home
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <div className="w-full">
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
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log Content
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateContent;
