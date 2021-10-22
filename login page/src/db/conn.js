const mongoose =require ("mongoose");


mongoose.connect("mongodb://localhost:27017/projhack",{
useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true
}).then(()=>{
    console.log('connnection successfull')
}).catch((e)=>{
    console.log('try again');
})