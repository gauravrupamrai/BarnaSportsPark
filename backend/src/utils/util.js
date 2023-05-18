function buildResponse(statusCode, message, body) {
    return {
        statusCode: statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: message, body})
    }
}

module.exports.buildResponse = buildResponse;