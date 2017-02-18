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
const secret = '1';

// Initialize a new socket.io application
let presentation = io.on('connection', function(socket) {
  socket.on('action', function(action) {
    switch (action.type) {
      case 'LOGIN':
        if (action.secret && action.secret === secret) {
          socket.emit('action', {
            type: 'LOGIN_SUCCESS',
            meta: { remote: true }
          });
        }

      case 'SLIDE_CHANGED':
        presentation.emit('action', {
          type: 'SLIDE_CHANGED_FROM_SERVER',
          meta: { remote: true },
          data: action.data
        });

        break;
      default:
    }
  });
});

console.log('Your presentation is running on ' + port);
