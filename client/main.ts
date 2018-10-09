var socket = new WebSocket('ws://localhost:3000');

socket.onmessage = function (message) {
    let payload = message.data;
    // TODO: show pong
    console.log(payload);
};
setInterval(() => {
    let ping = `Ping >>> ${new Date().toISOString()}`;
    // TODO: show ping
    socket.send(ping);
}, 1000);