var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const useragent = require('useragent');
const ipinfo = require('ipinfo');
const nodemailer = require('nodemailer');


router.post('/login', async (req, res) => {

  const userAgent = req.headers['user-agent'];
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  const deviceInfo = extractDeviceInfo(userAgent);

  try {
    const loginDetails = {
      device: deviceInfo.device,
      operatingSystem: deviceInfo.operatingSystem,
      browser: deviceInfo.browser,
      ip: ipAddress,
      location: await getLocation(ipAddress)
    };

    console.log(loginDetails);

 

    res.send('Login details sent via email.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

function extractDeviceInfo(userAgent) {
  const agent = useragent.parse(userAgent);
  return {
    device: agent.device.toString(),
    operatingSystem: agent.os.toString(),
    browser: agent.toAgent()
  };
}

function getLocation(ipAddress) {
  return new Promise((resolve, reject) => {
    ipinfo(ipAddress, (error, data) => {
      if (error) {
        reject(error);
      } else {
        const location = data ? `${data.city}, ${data.region}, ${data.country}` : 'Unknown Location';
        resolve(location);
      }
    });
  });
}



 




module.exports = router;
