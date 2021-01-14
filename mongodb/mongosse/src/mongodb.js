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
            name: "Shohanuzzaman",
            University: "Islamic University, Bangladesh",
            Department:"ICT",
            Roll:1718021,
            active:true
        })

        const firstData = new againModel({
            name: "Sajid",
            University: "Islamic University, Bangladesh",
            Department:"ICT",
            Roll:1718022,
            active:true
        })

        const secondData = new againModel({
            name: "Tareq",
            University: "Islamic University, Bangladesh",
            Department:"ICT",
            Roll:1718016,
            active:true
        })

        const thirdData = new againModel({
            name: "Riad",
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


//CRAD operation using nodejs

const againGet = async () =>{
    const again_result = await againModel
    .find({Department: "ICT"})
    .select({name:1})
    // .find({Roll : {$lte: 1718020}})
    // .select({name:1})
    // .limit(1)
    // .count()
    .sort({name: 1});

    
    console.log(again_result);
}

// againGet();


const updateDocumnet = async (_id) =>{
    try{
        // const result = await againModel.updateOne({_id},{
        const result = await againModel.findByIdAndUpdate({_id},{

            $set : {
                name: "Md Shohanuzzaman"
            }
            },{
                use: true,
                useFindAndModify: false
            });

        console.log(result);

    }catch(err){
        console.log(err);
    }
    

}


updateDocumnet("60001d415bc42538a2d291bb");

