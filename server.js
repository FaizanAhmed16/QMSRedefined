const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const userRoute = require('./routes/User');
const examQuestionsRoute = require('./routes/ExamQuestions')
const userExamsRoute = require('./routes/UserExams')
const examRoute = require('./routes/Exam')
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())

const connectionString = "mongodb+srv://faizan16ahmed:Unhealthynerd69@myclass.iyagwdi.mongodb.net/test"
const PORT = 3000

app.use('/users', userRoute)
app.use('/examquestions', examQuestionsRoute)
app.use('/exam', examRoute)
app.use('/userexams', userExamsRoute)


mongoose.connect(connectionString).then(() => {
    console.log('connection is succesful')
    app.listen(PORT, () => {
        console.log("Server is Connected");
    })
}).catch((e) => {
    console.log(e.message)
})

// mongoose.connect(process.env.DATABASE_ACCESS).then(data => {
//     console.log("connected to DB")
// }).catch(error => {
//     console.log(error)
// })



// app.listen(5000, () => {
//     console.log('Server started on 3000')
// })