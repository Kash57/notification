var express = require('express');
var router = express.Router();
const ip = require('ip')
const geoip = require('geoip-lite');
const DeviceDetector = require('device-detector-js');

// const maxmind = require('maxmind');
// const app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// const useragent = require('useragent');
const ipinfo = require('ipinfo');
const nodemailer = require('nodemailer');


const os = require('os');
const dns = require('dns');

const device = require('express-device');

// Function to perform reverse DNS lookup
// async function getHostName(ipAddress) {
//   try {
//     const hostNames = await dns.promises.reverse(ipAddress);
//     return hostNames.length > 0 ? hostNames[0] : 'Unknown Hostname';
//   } catch (error) {
//     if (error.code === 'ENOTFOUND' && error.hostname === '::1') {
//       // Handle the case when the hostname is not found for '::1'
//       return 'Localhost';
//     } else {
//       throw error;
//     }
//   }
// }

// // Function to fetch location based on IP address using ipinfo package
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
router.use(device.capture());




// // Create a new instance of DeviceDetector
// const deviceDetector = new DeviceDetector();

// // Function to extract device information from request using device-detector-js
// function extractDeviceInfo(req) {
//   const userAgent = req.get('User-Agent');
//   const result = deviceDetector.parse(userAgent);

//   return {
//     device: result.device?.model || 'Unknown Device',
//     operatingSystem: result.os?.name || 'Unknown OS',
//     browser: result.client?.name || 'Unknown Browser',
//   };
// }

// router.get('/login', async (req, res) => {
//   const ipAddress = req.ip;

//   try {
//     const hostNames = await dns.promises.reverse(ipAddress);
//     const hostName = hostNames.length > 0 ? hostNames[0] : 'Unknown Hostname';
//     const deviceInfo = extractDeviceInfo(req);

//     const responseData = {
//       ipAddress,
//       hostName,
//       ...deviceInfo
//     };

//     res.json(responseData);
//   } catch (error) {
//     console.error('Reverse DNS lookup error:', error);
//     res.status(500).json({ error: 'Reverse DNS lookup error' });
//   }
// });



// Function to extract device information from user agent
function extractDeviceInfo(userAgent) {
  try {
    const agent = useragent.parse(userAgent);
    const deviceName = agent.device.family || 'Unknown Device';
    return {
      device: deviceName,
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
const useragent = require('express-useragent');
router.use(useragent.express());
// API endpoint for handling login
router.get('/login', async (req, res) => {
  try {
    // Your login logic here
    // ...

    const userAgent = req.useragent;
    const deviceName = userAgent.source || 'Unknown Device';
    const operatingSystem = userAgent.os || 'Unknown OS';
    const browser = userAgent.browser || 'Unknown Browser';

    const deviceInfo = {
      device: deviceName,
      operatingSystem,
      browser,
    };

    // Store the device information in your database
    // ...

    console.log(deviceInfo);

    // Send login notification
    // ...

    // Generate token
    // ...

    res.status(200).json({deviceInfo});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});





// router.get('/login', async (req, res) => {
//   const ipAddress = req.ip;

//   try {
//     const hostNames = await dns.promises.reverse(ipAddress);
//     const hostName = hostNames.length > 0 ? hostNames[0] : 'Unknown Hostname';

//     res.json({ ipAddress, hostName });
//   } catch (error) {
//     if (error.code === 'ENOTFOUND' && error.hostname === '::1') {
//       // Handle the case when the hostname is not found for '::1'
//       res.json({ ipAddress, hostName: 'Localhost' });
//     } else {
//       console.error('Reverse DNS lookup error:', error);
//       res.status(500).json({ error: 'Error occurred during reverse DNS lookup' });
//     }
//   }
// });


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

// // Function to extract device information from user agent


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
function getGeolocation(ipAddress) {
  const geo = geoip.lookup(ipAddress);
  if (geo) {
    const { city, country } = geo;
    return `${city}, ${country}`;
  } else {
    return 'Unknown Location';
  }
}



// Function to extract device information from request
function extractDeviceInfo(req) {
  const deviceType = req.device.type || 'Unknown Device';
  const deviceName = req.device.name || 'Unknown Device';
  const deviceFullName = `${deviceType} - ${deviceName}`;
  return {
    device: deviceFullName,
    operatingSystem: req.device.os || 'Unknown OS',
    browser: req.device.browser || 'Unknown Browser',
  };
}

// Function to perform reverse DNS lookup
async function getHostName(ipAddress) {
  return new Promise((resolve) => {
    dns.reverse(ipAddress, (err, hostnames) => {
      if (err || hostnames.length === 0) {
        resolve('Unknown Hostname');
      } else {
        resolve(hostnames[0]);
      }
    });
  });
}

// API endpoint for handling login
router.get('/loginfordevice', async (req, res) => {
  // Extract user agent from request
  const userAgent = req.headers['user-agent'];

  try {
    // Capture device information using the middleware
    device.capture(req, res, function() {
      // Extract device information
      const deviceInfo = extractDeviceInfo(req);
      hostName =  getHostName(ipAddress)

      // Store the device information in your database
      // ...

      console.log(deviceInfo);
      res.json({ loginDetails });
      // Rest of your code
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});






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
router.get('/loginforhostname', (req, res) => {
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
