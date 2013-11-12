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
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
		
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // `load`, `deviceready`, `offline`, and `online`.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of `this` is the event. In order to call the `receivedEvent`
    // function, we must explicity call `app.receivedEvent(...);`
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		
		var canvas = document.getElementById("canvas1");
		var cx = canvas.getContext("2d");
		var centerX = centerY = 150;		
		var angle = 0;

		var previousReading = {
			x: null,
			y: null,
			z: null	
		}
		
		navigator.accelerometer.watchAcceleration( function(reading) {
			
			var changes = {};
			var bound = 2;
			
			console.log("x("+reading.x+"), Y("+reading.y+"), z("+reading.z+")" );
			
			if( previousReading.x != null ) {
				changes.x = Math.abs(previousReading.x, reading.x);
				changes.y = Math.abs(previousReading.y, reading.y);
				changes.z = Math.abs(previousReading.z, reading.z);	
			}
			
			if( changes.x > bound && changes.y > bound && changes.z > bound ) {
				console.log('shake detected');	
			}
			
			previousReading = {
				x: reading.x,
				y: reading.y,
				z: reading.z
			}
			

			angle = Math.floor( 360 / 18 * ( reading.x + 9 ) );
	
			
			canvas.width = canvas.width;
			
			cx.beginPath();
			cx.arc( centerX, centerY, 100, 0, 2 * Math.PI, true );			
			cx.translate( centerX, centerY );									
			cx.rotate( angle * Math.PI / 180 ); 
			cx.moveTo(0, 0);
			cx.lineTo(0, 0 - 80 );
			cx.stroke();
			cx.closePath();
			
			
			// -10 ~ 10 
			
			var x = reading.x * -1 / 5;
			var y = reading.y * -1 / 5;
			var z = reading.z * -1 / 5;
			
			var str = x + ":" + y + ":" + z;
			NetWork.doSend( str );
				
		}, null, { frequency:200 } );
	
	},
	
};


var NetWork = {
	
	initialize: function()
	{
		console.log("NetWork initialize" );
		this.init();
	},

	init: function() 
	{
		console.log("NetWork init" );
		this.testWebSocket(); 
	},

	testWebSocket: function()
	{
		// 請修正你的 ip
		var wsUri = "ws://192.168.1.143:8000";
		
		console.log("NetWork testWebSocket" );
		websocket = new WebSocket(wsUri);
		websocket.onopen = function(evt) { onOpen(evt) }; 
		websocket.onclose = function(evt) { onClose(evt) }; 
		websocket.onmessage = function(evt) { onMessage(evt) }; 
		websocket.onerror = function(evt) { onError(evt) }; 
	},

	onOpen: function(evt)
	{ 
		console.log("NetWork Connected" );
	},

	onClose: function(evt)
	{ 
		console.log("NetWork Disconnected" );
	},
	
	onMessage: function(evt)
	{ 
		//console.log("NetWork onMessage(" + evt + ")" );
		//websocket.close();
	},

	onError: function(evt)
	{ 
		console.log('ERROR:' + evt.data); 
		websocket.close();
	}, 

	doSend: function(message)
	{ 
		//console.log("SENT: " + message);
		websocket.send(message); 
	},
};