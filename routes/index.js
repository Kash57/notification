var express = require('express');
var router = express.Router();
const ip = require('ip')
const geoip = require('geoip-lite');
// const maxmind = require('maxmind');
// const app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const useragent = require('useragent');
const ipinfo = require('ipinfo');
const nodemailer = require('nodemailer');
// const geoLite2CityDb = maxmind.openSync('/path/to/GeoLite2-City.mmdb');

// router.get('/login', async (req, res) => {

//   const userAgent = req.headers['user-agent'];
//             const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

//             const deviceInfo = extractDeviceInfo(userAgent);
//             try {
//             const loginDetails = {
//               device: deviceInfo.device,
//               operatingSystem: deviceInfo.operatingSystem,
//               browser: deviceInfo.browser,
//               ip: ipAddress
//             };

//             // Store the device information in your database
//             // ...

//             console.log(loginDetails);


 

//     res.json({loginDetails});
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// function extractDeviceInfo(userAgent) {
//   const agent = useragent.parse(userAgent);
//   return {
//     device: agent.device.toString(),
//     operatingSystem: agent.os.toString(),
//     browser: agent.toAgent()
//   };
// }

// Function to extract device information from user agent


// function extractDeviceInfo(userAgent) {
//   const parser = new UAParser(userAgent);
//   const device = parser.getDevice();
//   const deviceName = device.model || device.type || 'Unknown Device';
//   return {
//     device: deviceName,
//     operatingSystem: parser.getOS().name || 'Unknown OS',
//     browser: parser.getBrowser().name || 'Unknown Browser',
//   };
// }
const DeviceDetector = require('device-detector-js');





// Function to extract device information from user agent
// const platform = require('platform');

// function extractDeviceInfo(userAgent) {
//   const info = platform.parse(userAgent);
//   const deviceName = info.product || 'Unknown Device';
//   const modelName = info.model || 'Unknown Model';
//   const deviceFullName = `${deviceName} ${modelName}`;
//   return {
//     device: deviceFullName,
//     operatingSystem: info.os.toString() || 'Unknown OS',
//     browser: info.name || 'Unknown Browser',
//   };
// }

// // Rest of your code


// router.get('/login', async (req, res) => {
//   const userAgent = req.headers['user-agent'];
//   const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

//   const deviceInfo = extractDeviceInfo(userAgent);
  
//   try {
//     const loginDetails = {
//       device: deviceInfo.device,
//       operatingSystem: deviceInfo.operatingSystem,
//       browser: deviceInfo.browser,
//       ip: ipAddress
//     };

//     // Store the device information in your database
//     // ...

//     console.log(loginDetails);

//     res.json({ loginDetails });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });



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

// const device = require('express-device');

// // Middleware for device detection
// app.use(device.capture());

// // Function to extract device information from request
// function extractDeviceInfo(req) {
//   const deviceType = req.device.type || 'Unknown Device';
//   const deviceName = req.device.name || 'Unknown Device';
//   const deviceFullName = `${deviceType} - ${deviceName}`;
//   return {
//     device: deviceFullName,
//     operatingSystem: req.device.os || 'Unknown OS',
//     browser: req.device.browser || 'Unknown Browser',
//   };
// }

// // API endpoint for handling login
// router.get('/login', async (req, res) => {
//   // Extract user agent from request
//   const userAgent = req.headers['user-agent'];

//   try {
//     // Capture device information using the middleware
//     device.capture(req, res, function() {
//       // Extract device information
//       const deviceInfo = extractDeviceInfo(req);

//       // Store the device information in your database
//       // ...

//       console.log(deviceInfo);
//       // res.json({ loginDetails });
//       // Rest of your code
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// function extractDeviceInfo(userAgent) {
//   const agent = useragent.parse(userAgent);
//   const deviceName = agent.device.family || 'Unknown Device';
//   return {
//     device: deviceName,
//     operatingSystem: agent.os.toString(),
//     browser: agent.toAgent(),
//   };
// }
// async function extractDeviceInfo(userAgent) {
//   try {
//     const agent = useragent.parse(userAgent);
//     const deviceName = agent.device.family || 'Unknown Device';
//     const deviceModel = await deviceDetector.lookupUserAgent(userAgent);
//     const fullDeviceName = deviceModel?.complete_device_name || deviceName;
//     return {
//       device: fullDeviceName,
//       operatingSystem: agent.os.toString(),
//       browser: agent.toAgent(),
//     };
//   } catch (error) {
//     console.error('Error extracting device info:', error);
//     return {
//       device: 'Unknown Device',
//       operatingSystem: 'Unknown OS',
//       browser: 'Unknown Browser',
//     };
//   }
// }

// API endpoint for handling login
// router.get('/login', async (req, res) => {
//   // Extract user agent from request headers
//   const userAgent = req.headers['user-agent'];

//   try {
//     // Extract device information
//     const deviceInfo = extractDeviceInfo(userAgent);

//     // Store the device information in your database
//     // ...

//     console.log(deviceInfo);
//     res.json({ deviceInfo });
//     // Rest of your code
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });




// const UAParser = require('ua-parser-js');
// const dns = require('dns');

// // Function to perform reverse DNS lookup
// async function getHostName(ipAddress) {
//   return new Promise((resolve, reject) => {
//     // Exclude loopback address for reverse DNS lookup
//     if (ipAddress === '::1' || ipAddress === '::ffff:127.0.0.1') {
     
//     } else {
//       dns.reverse(ipAddress, (err, hostnames) => {
//         if (err) {
//           reject(err);
//         } else {
//           const hostname = hostnames.length > 0 ? hostnames[0] : 'Unknown Hostname';
//           resolve(hostname);
//         }
//       });
//     }
//   });
// }

// // API endpoint for handling login
// router.get('/login', async (req, res) => {
//   // Extract user agent from request headers
//   const userAgent = req.headers['user-agent'];

//   // Extract IP address of the user
//   const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

//   try {
//     // Parse user agent
//     const parser = new UAParser();
//     const uaResult = parser.setUA(userAgent).getResult();

//     // Extract device information
//     const deviceName = uaResult.device.model || 'Unknown Device';

//     // Perform reverse DNS lookup for the provided IP address
//     const hostName = await getHostName(ipAddress);

//     // Construct device info object
//     const deviceInfo = {
//       device: deviceName,
//       operatingSystem: uaResult.os.name,
//       browser: uaResult.browser.name,
//       hostName: hostName,
//     };

//     // Store the device information in your database
//     // ...

//     console.log(deviceInfo);
//     res.json({ deviceInfo });
//     // Rest of your code
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Function to fetch user IP address
// async function getUserIPAddress() {
//   const response = await fetch('https://api.ipify.org?format=json');
//   const data = await response.json();
//   return data.ip;
// }

// // Function to fetch user device details
// function getUserDeviceDetails() {
//   const userAgent = navigator.userAgent;
//   const deviceName = navigator.deviceMemory || 'Unknown Device';
//   const deviceLocation = navigator.language || 'Unknown Location';
  
//   return {
//     deviceName,
//     deviceLocation,
//     userAgent
//   };
// }
const dns = require('dns');
// Function to perform the login action
// Function to fetch user IP address
async function getUserIPAddress() {
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  return data.ip;
}

// Function to fetch user device details
function getUserDeviceDetails() {
  const userAgent = navigator.userAgent;
  const deviceName = navigator.deviceMemory || 'Unknown Device';
  const deviceLocation = navigator.language || 'Unknown Location';
  
  return {
    deviceName,
    deviceLocation,
    userAgent
  };
}

// Function to perform the login action
async function login() {
  const ipAddress = await getUserIPAddress();
  const deviceDetails = getUserDeviceDetails();

  const body = {
    ipAddress,
    ...deviceDetails
  };

  const response = await fetch('/login', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();
  console.log('Server response:', data);
}

// Function to perform reverse DNS lookup
async function getHostName(ipAddress) {
  return new Promise((resolve, reject) => {
    dns.reverse(ipAddress, (err, hostnames) => {
      if (err) {
        reject(err);
      } else {
        const hostname = hostnames.length > 0 ? hostnames[0] : 'Unknown Hostname';
        resolve(hostname);
      }
    });
  });
}

const os = require('os');
// /login route
// router.get('/login', (req, res) => {
//   const { ipAddress, deviceName, deviceLocation, userAgent } = req.body;
//   const hostName = os.hostname() || 'Unknown Hostname';

//   // Construct the user info object
//   const userInfo = {
//     ipAddress,
//     deviceName,
//     deviceLocation,
//     userAgent,
//     hostName
//   };

//   // Store the user info in your database or perform other operations
//   // ...

//   console.log('User Info:', userInfo);
//   res.json( userInfo)
//   res.json({ message: 'User info received successfully' });
// });


// Function to extract device name from user agent
function extractDeviceName(userAgent) {
  const agent = useragent.parse(userAgent);
  return agent.device.family || 'Unknown Device';
}

// /login route
router.get('/login', (req, res) => {
  const { ipAddress, deviceLocation, userAgent } = req.body;
  const hostName = os.hostname() || 'Unknown Hostname';
  const deviceName = extractDeviceName(userAgent);

  // Construct the user info object
  const userInfo = {
    ipAddress,
    deviceName,
    deviceLocation,
    userAgent,
    hostName
  };

  // Store the user info in your database or perform other operations
  // ...

  console.log('User Info:', userInfo);
  res.json(userInfo);
});
 




module.exports = router;
