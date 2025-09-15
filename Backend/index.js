require ("dotenv").config();

const express=require("express");
const mongoose=require("mongoose");
const bodyparser=require('body-parser');
const cors=require("cors");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const PORT=process.env.PORT || 3002;
const url=process.env.MONGO_URL;


const { HoldingModel } = require('./model/HoldingsModel'); 
const{PositionsModel} =require('./model/PositionsModel');
const { OrderModel } = require('./model/OrderModel');
const{newModel}=require("./model/newModel");

const auth=require("./middleware/auth");


const app= express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

// app.get('/addHoldings',async(req , res)=>{
//     let tempHoldings=[
//     {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];
// tempHoldings.forEach((item)=>{
//     let newHolding=new HoldingModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price:item.price,
//       net: item.net,
//       day: item.day,
//     })
//     newHolding.save();
// })
// res.send("Done!")
// });

// app.get('/addposition',(req , res)=>{
//   let tempposition=[
//       {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
//   ]
//     tempposition.forEach((item)=>{
//     let newposition=new PositionsModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day:item.day,
//     isLoss: item.isLoss,
//     })
//     newposition.save();
//     })
//     res.send("Done!");
// })


app.get('/allHoldings',async(req, res)=>{
    let allHoldings=await HoldingModel.find({});
    res.json(allHoldings);
})

app.get('/allpositions',async (req, res)=>{
  let allpositions=await PositionsModel.find({});
  res.json(allpositions);
})



app.post("/signup",async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        const existingUser=await newModel.findOne({email});
        if(existingUser){
            return res.status(400).json({error:"Email already registered"});
        }

        const hashpassword=await bcrypt.hash(password,10);

        const newUser=new newModel({
              username,
              email,
              password:hashpassword,
        });

        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });


        return res.json({
      message: "User registered successfully",
      token,
      user: { id: newUser._id, username: newUser.username, email: newUser.email },
    });
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
})

app.post("/signin",async(req, res)=>{
    try{
        const {email,password}=req.body;
        const user=await newModel.findOne({email});
        if(!user){
            return res.status(400).json({error:"User not found"});
        }

        const isMatch=await bcrypt.compare(password ,user.password);

        if(!isMatch){
            return res.status(400).json({error:"Invalid credentials"});
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return res.json({
        message: "Login successful",
        token,
        user: { id: user._id, username: user.username, email: user.email },
        });

    } catch(err){
        console.log(err);
        res.status(500).json({error:"Server error"});
    }
})

app.get("/me", auth, (req, res) => {

  res.json({ user: req.user });
});

app.post('/newOrder',auth,async(req,res)=>{
    let newOrder=new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price:req.body.price,
      mode:req.body.mode,
    });

    newOrder.save();
    res.json("Order is send !");
})


mongoose.connect(url)
.then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})
.catch((err) => {
    console.error("MongoDB connection failed:", err);
});