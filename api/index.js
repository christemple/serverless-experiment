exports.hello = (event, context, callback) => {
    const body = { 
        message: 'Hello from the API',
        event: event,
        context: context
    };
    
    callback(null, {
        body: JSON.stringify(body)
    });
}

exports.get = (event, context, callback) => {
    callback(null, {
        body: JSON.stringify({ 
            message: 'Yay! GET',
        })
    });
}

exports.post = (event, context, callback) => {
    callback(null, {
        body: JSON.stringify({ 
            message: 'Yay! POST',
        })
    });
}