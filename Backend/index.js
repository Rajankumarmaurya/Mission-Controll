import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import Taskrouter from './routes/Task.route.js'

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))


// routes 

app.use('/api/task', Taskrouter)

mongoose.connect( 'mongodb://localhost:27017/mission-control-two', {
 
})
.then(() => {
  console.log('connected');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});


app.listen(PORT, () => {
    console.log('Server running on port:', PORT)
})