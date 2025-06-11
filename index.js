const express = require('express')
const socketIo = require('socket.io')
const http = require('http')
const path = require('path')

const app = express();
const server = http.createServer(app);
const io = socketIo(server)

app.use(express.static(path.join(__dirname, 'public')));

app.get('/chat/:room', (req,res) => {
    const room = req.params.room
    res.sendFile(path.join(__dirname, 'public', `${room}.html`))
})


io.on('connection', (socket) =>{
    console.log('Novo usuário conectado!')

    socket.on('join room',(room)=>{
        socket.join(room)
        console.log(`usuario entrou na sala:${room}`)
    })

    socket.on('chat message', (data) =>{
        console.log(data)
        io.to(data.room).emit('chat message', data);
        
    })

    socket.on('disconnect', () => {
        console.log('Usuário desconectado');
    })
})

server.listen(3000, () =>{
    console.log('Servidor rodando na porta 3000')
})