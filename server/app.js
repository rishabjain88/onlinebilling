const express=require('express')
const app= express()
const bodyParser= require ('body-parser')
const mongoose=require('mongoose')
const cors = require("cors")
require('./AdminUser')
require('./ProductSchema')
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

const AdminUser= mongoose.model("admin")
const AddProduct =mongoose.model("product")
const mongoUri="mongodb+srv://rishi:12345@cluster0.00f3y.mongodb.net/OnlineBilling";
mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
app.use("/", require("./noteRoute"))
mongoose.connection.on("connected",()=> {
    console.log("connected to mongo!!!")
})

app.get('/',(req,res)=>{
    AdminUser.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
})
app.get('/product',(req,res)=>{
    AddProduct.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
})


app.post('/send-data',(req,res)=> {
    console.log(req.body)

    const adminuser= new AdminUser({
        Name:req.body.Name,
        Password:req.body.Password,
        EmployeeId:req.body.EmployeeId,
        Role:req.body.Role

    })  
    adminuser.save()
    .then(data=>{
        console.log(data)
        
    }).catch(err=>{
        console.log(err)
    })

    res.send("posted")
})


app.post('/AddProduct',(req,res)=> {
    console.log(req.body)

    const addpro= new AddProduct({
        Barcode:req.body.Barcode,
        ProductName:req.body.ProductName,
        Quantity:req.body.Quantity,
        ReorderQuantity:req.body.ReorderQuantity,
        Price:req.body.Price

    })  
    addpro.save()
    .then(data=>{
        console.log(data)
        
    }).catch(err=>{
        console.log(err)
    })

    res.send("posted")
    
})

app.post('/delete',(req,res)=> {
AdminUser.findByIdAndRemove(req.body.id)
.then(data=>{

    console.log(data)
    res.send("Deleted")
})
.catch(err=>{
    console.log(err)
})



})
app.post('/update',(req,res)=> {
    AdminUser.findByIdAndUpdate(req.body.id,{
        Name:req.body.name,
        Password:req.body.password,
        EmployeeId:req.body.employeeid,
        Role:req.body.role

    })
    .then(data=>{
    
        console.log(data)
        res.send("Updated!")
    })
    .catch(err=>{
        console.log(err)
    })
    })
    
app.listen(3000,()=>{
    console.log("server running")
})





// "name":"Diffe234234rent",
// "password":"234324",
// "employeeid":"emp123",
// "role":"employee"