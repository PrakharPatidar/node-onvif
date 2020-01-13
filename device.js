const onvif = require('node-onvif');
const fs = require('fs')

// Create an OnvifDevice object
let device = new onvif.OnvifDevice({
  xaddr: 'http://192.168.1.25:80/onvif/device_service',
  user: 'admin',
  pass: 'admin'
});

// Initialize the OnvifDevice object
device.init().then((info) => {
  // // Show the detailed information of the device.
  // let url = device.getUdpStreamUrl();
  // console.log('URL : ', url);
  // console.log(JSON.stringify(info, null, '  '));

  // // console.log('fetching the data of the snapshot...');
  // // return device.fetchSnapshot();

  // // Move the camera
  // //  return device.ptzMove({
  // //   'speed': {
  // //     x: 0.0, // Speed of pan (in the range of -1.0 to 1.0)
  // //     y: 1.0, // Speed of tilt (in the range of -1.0 to 1.0)
  // //     z: 0.0  // Speed of zoom (in the range of -1.0 to 1.0)
  // //   },
  // //   'timeout': 1 // seconds
  // // });
  // console.log('Profiles')

  // let profile = device.getProfileList();
  // // let profile = device.getCurrentProfile();
  // console.log(JSON.stringify(profile, null, '  '));

  // Get the current profile
// let profile = device.getCurrentProfile();
// // Show the video resolution of the current profile
// let reso = profile['video']['encoder']['framerate'];
// console.log('- Before: ' + reso);
 
// // Get a list of the profiles set in the device
// let profile_list = device.getProfileList();
 
// // Find the profile whose video resolution is the smallest
// let min_square = 4000 * 2000;
// let min_index = 0;
// for(let i=0; i<profile_list.length; i++) {
//   let resolution = profile_list[i]['video']['encoder']['resolution'];
//   let square = resolution['width'] * resolution['height'];
//   if(square < min_square) {
//     min_square = square;
//     min_index = i;
//   }
// }
// // Change the current profile
// profile = device.changeProfile(min_index);
// // Show the video resolution
// reso = profile['video']['encoder']['resolution'];
// console.log('- After: ' + reso['width'] + ' x ' + reso['height']);

let ptz = device.services.ptz;
  if(!ptz) {
    throw new Error('Your ONVIF network camera does not support the PTZ service.');
  }

}).then((res) => {
  // fs.writeFileSync('snapshot.jpg', res.body, {encoding: 'binary'});
  // console.log('Done!');
  console.log('Done!');
}).catch((error) => {
  console.error(error);
});

// let info = device.getInformation();
// console.log(JSON.stringify(info, null, '  '));
