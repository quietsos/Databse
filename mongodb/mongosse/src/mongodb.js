const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:127.0.0.1:27017/again_test", {useNewUrlParser:true, useUnifiedTopology:true})
.then( () => console.log("Successfully connected...."))
.catch((err) => console.log(err));


const againSchema = new mongoose.Schema({
    name: String,
    University: String,
    Department: String,
    Roll:Number,
    active:Boolean
})

const againModel = mongoose.model("againCollection",againSchema);


const againDocument = async () =>{

    try{
        const againData = new againModel({
            name: "Md Shohanuzzaman",
            University: "Islamic University, Bangladesh",
            Department:"ICT",
            Roll:1718021,
            active:true
        })

        const firstData = new againModel({
            name: "Md Sajid",
            University: "Islamic University, Bangladesh",
            Department:"ICT",
            Roll:1718022,
            active:true
        })

        const secondData = new againModel({
            name: "Md Tareq",
            University: "Islamic University, Bangladesh",
            Department:"ICT",
            Roll:1718016,
            active:true
        })

        const thirdData = new againModel({
            name: "Md Riad",
            University: "Islamic University, Bangladesh",
            Department:"ICT",
            Roll:1718002,
            active:true
        })

        // const again_result = await againData.save();
        const again_result = await againModel.insertMany([againData, firstData, secondData,thirdData]);
        console.log(again_result);
    }
    catch(err){
        console.log(err);

    }

}

// againDocument();


const againGet = async () =>{
    const again_result = await againModel.find({Department: "ICT"})
    .select({name:1});
    console.log(again_result);
}

againGet();

