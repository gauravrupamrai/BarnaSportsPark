const sendEmailService = require('../services/sendEmail');
const sendEmailPath = 'send-Email';

const util = require('../utils/util');

const healthPath = '/health';

exports.handler = async (event, context) => {
    console.log('Request event: ', event);
    let response;

    context.callbackWaitsForEmptyEventLoop = false;

    switch (true) {
        case event.httpMethod === 'GET' && event.path === healthPath:
            response = util.buildResponse(200);
            break;
        case event.httpMethod === 'POST' && event.path === sendEmailPath:
            const sendEmailBody = JSON.parse(event.body);
            response = await sendEmailService.sendEmail(sendEmailBody);
            break;
        default:
            response = util.buildResponse(404, '404 Not Found');
    }
    return response;
};