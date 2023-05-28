
function buildResponse(statusCode, message, body) {
    if(body === null){
        const responseBody = {
            statusCode: statusCode,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                message: message
            }),
        }
        // console.log("response: ", responseBody);
        return responseBody;
    }else {
        const responseBody = {
            statusCode: statusCode,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                message: message, 
                body
            }),
        }
        // console.log("response: ", responseBody);
        return responseBody;
    }
}

function buildResponseWithCookie(statusCode, message, body, cookie, location) {
  const response = buildResponse(statusCode, message, body);
  if (cookie) {
    response.headers = {
      "Set-Cookie": cookie,
      ...response.headers,
    };
  }
  if (location) {
    response.headers = {
      Location: location,
      ...response.headers,
    };
  }

  // console.log("response: ", response);
  return response;
}

module.exports.buildResponse = buildResponse;
module.exports.buildResponseWithCookie = buildResponseWithCookie;
