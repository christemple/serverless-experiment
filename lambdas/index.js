const PayloadHelper = require('../lib/PayloadHelper');
const AWS = require('aws-sdk');

exports.first = (event, context, callback) => {
    const lambda = new AWS.Lambda();
    var params = {
        FunctionName: process.env.SECOND_FUNCTION,
        InvocationType: 'Event',
        Payload: JSON.stringify({data: ['hello', 'world']}),
    };
    lambda.invoke(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        
        console.log(data);
    });
};

exports.second = (event, context, callback) => {
    console.log('CALLING SECOND');
    console.log(event);
    console.log(context);
};