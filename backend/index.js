import express from "express";
import mongo from 'mongoose';
import 'dotenv/config';
import bookRouter from './routes/bookRoutes.js'
import cors from 'cors'


const app = express()
app.use(express.json());  

app.use(cors());


app.use('/book', bookRouter )

mongo.connect(process.env.MERNdb)
.then(() => {
    console.log('Connected to the Database')
    app.listen(process.env.PORT, ()=> {
        console.log(`Im listening at port ${process.env.PORT}`);
    })
})
.catch((err) => { console.log(err) })

export default app 