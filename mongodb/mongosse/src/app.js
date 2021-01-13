const mongoose = require("mongoose");

//connection creating with database 
mongoose.connect("mongodb://localhost:27017/newdb", {useNewUrlParser:true , useUnifiedTopology:true})
.then( () => console.log("connection successfull.."))
.catch((err) => console.log(err));


//schema:
// A mongoose schema defines the structure of the documents
// default valuse, validators etc...

const dataStoreSchema= new mongoose.Schema({
    name:{ 
        type: String,
        required: true
    
    },
    dept: String,
    session: Number,
    active: Boolean,
    date: {
        type:Date,
        default: Date.now
    }

    
})


// Model 
// A mongoose model is a wrapper on the Mongoose schema
// A mongoose schema defines the structure of the document, default values, validators etc
// Whereas a mongoose model provides an interface to the database for creating, querying, updating, deleting records etc


//creating class instance of mongoose model
//to collection create
const PersonalInfo = mongoose.model("Personalinfo",dataStoreSchema);



//create document or insert

// const studentData = new PersonalInfo({
//     name: "Raju",
//     dept: 'ICT',
//     session: 2014-15,
//     active: true
//     // date: 

// })

// studentData.save();


// convert save to asyn await



const createDocument = async () =>{

    try{
        const studentData = new PersonalInfo({
            name: "Tipu",
            dept: 'ICT',
            session: 2015-16,
            active: true
            // date: 
    
    
        
        })
        
        const result = await studentData.save();
        console.log(result);

    }catch(err){
        console.log(err);
    }
 
}

createDocument();




