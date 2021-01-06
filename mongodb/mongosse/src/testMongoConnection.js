const mongoose = require('mongoose');

//create connection to the database
mongoose.connect("mongodb://localhost:127.0.0.1:27017/testdatabase" ,{useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log("connection Successfull...."))
.catch((err) => console.log(err));


//create database schema or documne model.

const databaseSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    Father_name:{
        type:String,
        required:true

    },
    Mother_name:{
        type: String,
        required: true
    },
    present_address: {
        type: String,
        required: true
    },
    permanent_address:{
        type:String,
        required:true
    },

    Mobile_no:Number,

    date:{
        type:Date,
        default:Date.now
    },
    active:Boolean

})

//creating data model class using mongoose for creation of collection

const DataModel = mongoose.model("Identity", databaseSchema);

//creating document and insert data

const createDocument = async () =>{
    try{
        const personalData = new DataModel({
            name: "Md Shohanuzzaman",
            Father_name: "Md Shafiul Islam",
            Mother_name: "Mst. Paira khatun",
            present_address: "Islamic University, Bangladesh",
            permanent_address: "Kushtia",
            Mobile_no: +8801878043119,
            active:true

        })

        const result = await personalData.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}


createDocument();

