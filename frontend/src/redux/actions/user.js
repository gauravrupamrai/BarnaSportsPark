import axios from "axios";
import {
  getUser,
  getToken,
  setUserSession,
  resetUserSession,
} from "../../services/AuthService";

const APP_URL = process.env.REACT_APP_APP_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const loadUser = () => async (dispatch) => {
  try {
    console.log("Load User Action");
    dispatch({
        type: "LoadUserRequest",
      });

    const token = getToken();
    if (
      token === undefined ||
      token === "undefined" ||
      token === null ||
      !token
    ) {
      return;
    }

    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    const requestBody = {
      user: getUser(),
      token: token,
    };
    
    const { data } = await axios.post(`${APP_URL}/verify`, requestBody, requestConfig);
    setUserSession(data.body.user, data.body.token);
    dispatch({
        type: "LoadUserSuccess",
        payload: data.body,
    });
  } catch (error) {
    resetUserSession();
    dispatch({
      type: "LoadUserFailure",
      payload: error.response.data.message,
    });
  }
};
