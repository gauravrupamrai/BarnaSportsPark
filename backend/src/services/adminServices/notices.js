const connectDatabase = require("../../database/db");
const notice = require("../../models/notice");
const util = require("../../utils/util");

async function createNotice(noticeBody) {
  try {
    await connectDatabase();
    const { contentType, contentTitle, content, displayOnHome } = noticeBody;
    if (!contentType || !contentTitle || !content) {
      return util.buildResponse(401, "Missing Fields");
    }

    // Find and update existing notice with displayOnHome=true to set it as false
    if (displayOnHome) {
      await notice.updateOne({ displayOnHome: true }, { $set: { displayOnHome: false } });
    }

    const newNoticeObj = {
      contentType: contentType,
      contentTitle: contentTitle,
      content: content,
      displayOnHome: displayOnHome,
    };

    const newNotice = await notice.create(newNoticeObj);

    return util.buildResponse(201, "Notice Created", newNotice);
  } catch (error) {
    console.log(error);
    if (error.statusCode) {
      return util.buildResponse(error.statusCode, error.message);
    } else {
      return util.buildResponse(500, "Internal Server Error");
    }
  }
}


async function getNotices() {
  try {
    await connectDatabase();
    const notices = await notice.find();
    return util.buildResponse(200, "Notices Found", notices);
  } catch (error) {
    console.log(error);
    if (error.statusCode) {
      return util.buildResponse(error.statusCode, error.message);
    } else {
      return util.buildResponse(500, "Internal Server Error");
    }
  }
}

async function getNoticeForHome() {
  try {
    await connectDatabase();
    const notices = await notice.find({displayOnHome: true});
    return util.buildResponse(200, "Notices Found", notices);
  } catch (error) {
    console.log(error);
    if (error.statusCode) {
      return util.buildResponse(error.statusCode, error.message);
    } else {
      return util.buildResponse(500, "Internal Server Error");
    }
  }
}

module.exports.createNotice = createNotice;
module.exports.getNotices = getNotices;
module.exports.getNoticeForHome = getNoticeForHome;
