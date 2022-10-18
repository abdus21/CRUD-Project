import mongoose from "mongoose";


const ProducsSchema = mongoose.Schema({
    ProductName : {type : String},
    ProductCode : {type : String},
    Img : {type : String},
    UnitPrice : {type : String},
    Qty : {type : String},
    TotalPrice : {type:String}
},{
    versionKey : false,
    timestamps : true
});

export default mongoose.model('Products',ProducsSchema)