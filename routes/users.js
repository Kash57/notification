var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

function extractDeviceInfo(userAgent) {
  const agent = useragent.parse(userAgent);
  const deviceName = agent.device.family || 'Unknown Device';
  return {
    device: deviceName,
    operatingSystem: agent.os.toString(),
    browser: agent.toAgent(),
  };
}
async function extractDeviceInfo(userAgent) {
  try {
    const agent = useragent.parse(userAgent);
    const deviceName = agent.device.family || 'Unknown Device';
    const deviceModel = await deviceDetector.lookupUserAgent(userAgent);
    const fullDeviceName = deviceModel?.complete_device_name || deviceName;
    return {
      device: fullDeviceName,
      operatingSystem: agent.os.toString(),
      browser: agent.toAgent(),
    };
  } catch (error) {
    console.error('Error extracting device info:', error);
    return {
      device: 'Unknown Device',
      operatingSystem: 'Unknown OS',
      browser: 'Unknown Browser',
    };
  }
}

// API endpoint for handling login
router.get('/loginfordevicedetails', async (req, res) => {
  // Extract user agent from request headers
  const userAgent = req.headers['user-agent'];

  try {
    // Extract device information
    const deviceInfo = extractDeviceInfo(userAgent);

    // Store the device information in your database
    // ...

    console.log(deviceInfo);
    res.json({ deviceInfo });
    // Rest of your code
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
