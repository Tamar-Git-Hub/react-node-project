const express = require("express")
require('dotenv').config();
const userRouter = require('./routes/users')
const lostRouter = require('./routes/losts')
const foundRouter = require('./routes/founds')
const connectDB=require("./config/dbConn")
const PORT = process.env.PORT || 5000
const app = express()
connectDB()
const  mongoose = require("mongoose")
const connectDB = require("./config/dbConn")

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
app.use('/users', userRouter)
app.use('/losts', lostRouter)
app.use('/founds', foundRouter)


mongoose.connect(process.env.CONECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => app.listen(PORT, () => {
        console.log(`server is runing on port ${PORT}`);
    })
).catch((error) => { console.log(error) })


