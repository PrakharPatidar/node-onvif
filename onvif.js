var
    http = require('http'),
    Cam = require('onvif').Cam;

new Cam({
    hostname: '192.168.1.41',
    username: 'admin',
    password: 'admin'
}, function (err) {
    this.absoluteMove({ x: 1, y: 1, zoom: 1 });
    this.getStreamUri({ protocol: 'RTSP' }, function (err, stream) {
        //   console.log(stream)
        // http.createServer(function (req, res) {
        //   res.writeHead(200, {'Content-Type': 'text/html'});
        //   res.end('<html><body>' +
        //     '<embed type="application/x-vlc-plugin" target="' + stream.uri + '"></embed>' +
        //     '</body></html>');
        // }).listen(3030);
    });

    this.getProfiles((err, res) => {
          console.log(JSON.stringify(res));
    })
    this.getSystemDateAndTime((err, res) => {
        // console.log(res)
    })
    this.getDeviceInformation((err, res) => {
        // console.log(res)
    })
    this.getServices((err, res) => {
        // console.log(res)
    })
    this.getPresets((err, res) => {
        // console.log(res)
    })
    this.getVideoSources((err, res) => {
        // console.log(res)
    })
    this.getImagingSettings((err, res) => {
        // console.log(res)
    })
});