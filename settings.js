const fs = require('fs');

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID "hRxTgSwT#UwL5JCys-uHrP_LpcbVaXO9Jhzpi2bbbkFDDcMm317c",
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN  "true",   // true or fals
ALIVE_IMG: process.env.ALIVE_IMG " ",
ALIVE_MSG: process.env.ALIVE_MSG " "

};

