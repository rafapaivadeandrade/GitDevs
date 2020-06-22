const socketio  = require('socket.io');
const parseStringAsArray = require('../models/utils/parseStringAsArrays');
const calculateDistance = require('../models/utils/calculateDistance');

let io;
const connections =[];

exports.setupWebsocket = (server) => {
    io = socketio(server);

    io.on('connection',socket => {
        const { latitude, longitude , techs} = socket.handshake.query;
        connections.push({
            id: socket.id,
            coordinates: {
                latitude:Number(latitude),
                longitude:Number(longitude)

            },
            techs:parseStringAsArray(techs)
        })
    })
}

exports.findConnections = (coordinates,techs) => {
    return connections.filter(connection => {
        //compare the new registered user with the rest ones
        return calculateDistance(coordinates, connection.coordinates) < 10 
        && connection.techs.some(item => techs.includes(item))
    })
    // setTimeout(() => {
    //     socket.emit('message','hello dev')
    // },3000)
}
exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message,data);
    })
}