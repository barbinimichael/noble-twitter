var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-2" });

exports.handler = async function (event) {
  var params = {
    Destination: {
      ToAddresses: [
        'brainmuncher123@gmail.com',
        'michaelbarbini@gmail.com'
      ],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `

          `
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: "Test Email"
      },
    },
    Source: "NoBullBriefing@nobulltwitter.com",
  };

  console.log('sending email');
  return ses.sendEmail(params).promise();
};
