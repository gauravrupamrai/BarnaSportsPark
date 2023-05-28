const jwt = require("jsonwebtoken");

function generateToken(param, secretKey, expiryTime) {
  if (!param || !secretKey || !expiryTime) {
    return null;
  }

  const token = jwt.sign(param, secretKey, { expiresIn: expiryTime });
  return token;
}

function verifyToken(token, secretKey) {
  try {
    const decoded = jwt.verify(token, secretKey);
    const response = {
      verified: true,
      message: "Valid Token, Verified",
      decoded: decoded,
    };
    return response;
  } catch (error) {
    const response = {
      verified: false,
      message: "Invalid Token: " + error.message,
      decoded: null,
    };
    return response;
  }
}

function createCookie(param, secretKey) {
  const token = jwt.sign(param, secretKey);

  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    sameSite: "none",
  };

  const serializedOptions = Object.entries(options)
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  const cookie = `token=${token}; ${serializedOptions}`;

  return cookie;
}

function decodeCookie(cookie, secretKey) {
  const token = cookie.match(/token=([^;]+)/);
  
  const decoded = jwt.verify(token, secretKey);
  return decoded;
}

module.exports.generateToken = generateToken;
module.exports.verifyToken = verifyToken;
module.exports.createCookie = createCookie;
module.exports.decodeCookie = decodeCookie;
