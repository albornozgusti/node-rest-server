const express = require('express');
const cors = require('cors');



class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.usersRoute = '/api/users';

        //middlewares
        this.middlewares();
        //rutas de la app
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usersRoute, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening at http://localhost:${this.port}`);
        });
    }

}

module.exports = Server;