/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    alert("On your gps and Press Ok");
  var onSuccess = function(position) {
    alert("2");
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');

          
          alert("alert");
          showCountry(position.coords.latitude,position.coords.longitude);
};

// onError Callback receives a PositionError object
//
function onError(error) {
  alert("1");
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);


function showCountry(lat, lon) {
  alert("sohw");
  $.getJSON('http://nominatim.openstreetmap.org/reverse?json_callback=?&format=json', {lat: lat, lon: lon}, function(data) {
    if(data.address.city!=undefined){
      city=data.address.city;
    }
    if(data.address.country!=undefined){
      country=data.address.country;
    }
    if(data.address.country_code!=undefined){
      country_code=data.address.country_code;
    }
    if(data.address.county!=undefined){
      county=data.address.county;
    }
    if(data.address.postcode!=undefined){
      postcode=data.address.postcode;
    }
    if(data.address.road!=undefined){
      road=data.address.road;
    }
    if(data.address.shop!=undefined){
      shop=data.address.shop;
    }
    if(data.address.state!=undefined){
      state=data.address.state;
    }
    if(data.address.state_district!=undefined){
      district=data.address.state_district;
    }
    if(data.address.suburb!=undefined){
      suburb=data.address.suburb;
    }

    
    var address=shop+" "+road+" "+suburb+" "+district+" "+city+" "+state+" "+country;

    console.log(address);
    document.getElementById('address').value=address;
    console.log(data.address);
     alert(data.address.shop);
 });
}
}
