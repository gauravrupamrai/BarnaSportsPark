const connectDatabase = require('../database/db');
const User = require('../models/user');
const healthPath = '/health';
const userPath = '/user';
const usersPath = '/users';

exports.handler = async function (event) {
    console.log('Request event: ', event);
    let response;

    switch (true) {
        case event.httpMethod === 'GET' && event.path === healthPath:
            response = buildResponse(200);
            break;
        case event.httpMethod === 'GET' && event.path === userPath:
            response = await getProduct(event.queryStringParameters.email);
            break;
        case event.httpMethod === 'GET' && event.path === usersPath:
            response = await getProducts();
            break;
        case event.httpMethod === 'POST' && event.path === userPath:
            response = await createUser(JSON.parse(event.body));
            break;
        case event.httpMethod === 'PATCH' && event.path === userPath:
            const requestBody = JSON.parse(event.body);
            response = await updateUser(requestBody.email, requestBody.updateKey, requestBody.updateValue);
            break;
        case event.httpMethod === 'DELETE' && event.path === userPath:
            response = await deleteUser(JSON.parse(event.body).email);
            break;
        default:
            response = buildResponse(404, '404 Not Found');
    }
    return response;
};

function buildResponse(statusCode, body) {
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}