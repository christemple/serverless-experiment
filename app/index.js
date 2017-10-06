exports.get = (event, context, callback) => {
    response = {
        statusCode: 200,
        body: '<h1>App</1>',
        headers: {
            'Content-Type': 'text/html'
        }
    }
    callback(null, response);
}