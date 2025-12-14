require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose')
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionModel } = require("./model/PositionModel");
const { OrdersModel } = require("./model/OrdersModel")
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const url = process.env.Mongo_url;



const app = express();
app.use(express.json());
app.use(
    cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
        credentials: true,
    })
); 
app.use(cookieParser());

app.use("/auth", authRoute);



app.get('/allholdings', async (req, res) => {
    let holdings = await HoldingsModel.find({});
    res.json(holdings);
})

app.get('/allpositions', async (req, res) => {
    let positions = await PositionModel.find({});
    res.json(positions);
})

app.post('/neworder', async (req, res) => {
    let neworder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    neworder.save();
    res.send("order save")
})

app.listen(PORT, () => {
    console.log("App started")

    mongoose.connect(url)
    console.log("DB connected")


})