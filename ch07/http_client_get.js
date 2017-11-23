var http = require('http');
var options = {
  hostname:'localhost',
  port:'8080'
};
function handleResponse(response) {
    var serverDate = '';
    response.on('data',function (chunk) {
        serverDate += chunk;
    });
    response.on('end',function () {
        console.log("Response Status:",response.statusCode);
        console.log("Response Headers:",response.headers);
        console.log(serverDate);
    })
}
http.request(options,function (response) {
   handleResponse(response)
}).end();