import express from 'express';
import socket from 'socket.io';

// Create express server
const app = express();

// If app is running on Herocu or other cloud
let port = process.env.PORT || 8080;

// Initialize socket.io object
let io = socket.listen(app.listen(port));

// Make the files in the public folder available to the world
app.use(express.static(__dirname + '/public'));

// This is a secret key that prevents others from opening your presentation
let secret = '1';

// Initialize a new socket.io application
let presentation = io.on('connection', function(socket) {
  // Clients send the 'slide-changed' message whenever they navigate to a new slide.
  socket.on('slide-changed', data => {
    if (data.key === secret) {
      presentation.emit('navigate', {
        id: data.id
      });
    }
  });

  socket.on('action', function(action) {
    switch (action.type) {
      // A new client has come online. Check the secret key and emit a "granted" or "denied" message.
      case 'LOGIN':
        socket.emit('action', {
          type: 'LOGIN_RESULT',
          meta: { remote: true },
          access: action.secret === secret ? 'granted' : 'denied'
        });

        break;
      default:
    }
  });
});

console.log('Your presentation is running on ' + port);
