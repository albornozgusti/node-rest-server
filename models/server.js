const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config');



class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.usersRoute = '/api/users';

        //conectar a la base de datos
        this.connectDB();

        //middlewares
        this.middlewares();
        //rutas de la app
        this.routes();
    }
    async connectDB() {
        await dbConnection();
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