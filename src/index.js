const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded());
app.use(express.json());


app.get("/", (req,res) =>{
    res.status(200).send("Hello world!")
})

app.post("/add", (req,res)=>{
    const {num1 , num2} = req.body;
    if(typeof num1 === "string" || typeof num2 === "string"){
        res.status(200).json({
            "status" : "error",
            "message" : "Invalid data types"
        })
    }
    const sum = num1 + num2;
    if(sum < -1*(10e5) || num1 < -1*(10e5) || num2 < -1*(10e5)){
        res.status(200).json({
            "status" : "failure",
            "message" : "Underflow"
        })
    }
    else if(sum > 1*(10e5) || num1 > 1*(10e5) || num2 > 1*(10e5)){
        res.status(200).json({
            "status" : "failure",
            "message" : "Overflow"
        })
    }
    else{
        res.status(200).json({
            "status" : "success",
            "message" : "the sum of given two numbers",
            sum
        })
    }
})
app.post("/sub", (req,res)=>{
    const {num1 , num2} = req.body;
    if(typeof num1 === "string" || typeof num2 === "string"){
        res.status(200).json({
            "status" : "error",
            "message" : "Invalid data types"
        })
    }
    const difference = num1 - num2;
    if(difference < -1*(10e5) || num1 < -1*(10e5) || num2 < -1*(10e5)){
        res.status(200).json({
            "status" : "failure",
            "message" : "Underflow"
        })
    }
    else if(difference > 1*(10e5) || num1 > 1*(10e5) || num2 > 1*(10e5)){
        res.status(200).json({
            "status" : "failure",
            "message" : "Overflow"
        })
    }
    else{
        res.status(200).json({
            "status" : "success",
            "message" : "the difference of given two numbers",
            difference
        })
    }
})
app.post("/multiply", (req,res)=>{
    const {num1 , num2} = req.body;
    if(typeof num1 === "string" || typeof num2 === "string"){
        res.status(200).json({
            "status" : "error",
            "message" : "Invalid data types"
        })
    }
    const result = num1 * num2;
    if(result < -1*(10e5) || num1 < -1*(10e5) || num2 < -1*(10e5)){
        res.status(200).json({
            "status" : "failure",
            "message" : "Underflow"
        })
    }
    else if(result > 1*(10e5) || num1 > 1*(10e5) || num2 > 1*(10e5)){
        res.status(200).json({
            "status" : "failure",
            "message" : "Overflow"
        })
    }
    else{
        res.status(200).json({
            "status" : "success",
            "message" : "The product of given numbers",
            result
        })
    }
})
app.post("/divide", (req,res)=>{
    const {num1 , num2} = req.body;
    if(typeof num1 === "string" || typeof num2 === "string"){
        res.status(200).json({
            "status" : "error",
            "message" : "Invalid data types"
        })
    }
    if(num2 === 0){
        res.status(200).json({
            "status" : "error",
            "message" : "Cannot divide by zero"
        })
    }
    const result = num1 / num2;
    if(result < -1*(10e5) || num1 < -1*(10e5) || num2 < -1*(10e5)){
        res.status(200).json({
            "status" : "failure",
            "message" : "Underflow"
        })
    }
    else if(result > 1*(10e5) || num1 > 1*(10e5) || num2 > 1*(10e5)){
        res.status(200).json({
            "status" : "failure",
            "message" : "Overflow"
        })
    }
    else{
        res.status(200).json({
            "status" : "success",
            "message" : "The division of given numbers",
            result
        })
    }
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
