var express = require('express');
var router = express.Router();
const ip = require('ip')
const geoip = require('geoip-lite');
// const maxmind = require('maxmind');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const useragent = require('useragent');
const ipinfo = require('ipinfo');
const nodemailer = require('nodemailer');
// const geoLite2CityDb = maxmind.openSync('/path/to/GeoLite2-City.mmdb');

router.get('/login', async (req, res) => {

  const userAgent = req.headers['user-agent'];
            const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

            const deviceInfo = extractDeviceInfo(userAgent);
            try {
            const loginDetails = {
              device: deviceInfo.device,
              operatingSystem: deviceInfo.operatingSystem,
              browser: deviceInfo.browser,
              ip: ipAddress
            };

            // Store the device information in your database
            // ...

            console.log(loginDetails);


 

    res.json({loginDetails});
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// function extractDeviceInfo(userAgent) {
//   const agent = useragent.parse(userAgent);
//   return {
//     device: agent.device.toString(),
//     operatingSystem: agent.os.toString(),
//     browser: agent.toAgent()
//   };
// }

// Function to extract device information from user agent
const UAParser = require('ua-parser-js');

function extractDeviceInfo(userAgent) {
  const parser = new UAParser(userAgent);
  const device = parser.getDevice();
  const deviceName = device.model || device.type || 'Unknown Device';
  return {
    device: deviceName,
    operatingSystem: parser.getOS().name || 'Unknown OS',
    browser: parser.getBrowser().name || 'Unknown Browser',
  };
}


// function getLocation(ipAddress) {
//   return new Promise((resolve, reject) => {
//     ipinfo(ipAddress, (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         const location = data ? `${data.city}, ${data.region}, ${data.country}` : 'Unknown Location';
//         resolve(location);
//       }
//     });
//   });
// }
// function getGeolocation(ipAddress) {
//   const geo = geoip.lookup(ipAddress);
//   if (geo) {
//     const { city, country } = geo;
//     return `${city}, ${country}`;
//   } else {
//     return 'Unknown Location';
//   }
// }












 




module.exports = router;
