const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected to MongoDB Coffeee!')
    }catch(e){
        console.log(e);
        throw new Error('Error al inicializar la base de datos');
    }
}

module.exports = {
    dbConnection,
}