
import ProductsModel from "../models/ProductsModel.js";


export const getAllProduct = async (req,res)=>{

        let data = await ProductsModel.find();
        res.status(200).json(data)

      
    
}

export const getSingleProduct = async (req,res)=>{
       
        let data = await ProductsModel.findById(req.params.id);
        res.status(200).json(data)


}

export const createProduct = async (req,res)=>{

    if(req.body){
        await ProductsModel.create(req.body);
        res.status(200).json({
            message : "data create success"
        })
    }else{
        res.status(400).json({
            message : "data create fail"
        })
    }
    
}
export const deleteProduct = async (req,res)=>{
    
    let data = await ProductsModel.findByIdAndDelete(req.params.id)
   
        res.status(400).json({
            message : "data delete success",
            data : data
        })
    
    
}
export const updateProduct = async (req,res)=>{

    let data = await ProductsModel.findByIdAndUpdate(req.params.id,req.body,{new : true})
   
        res.status(400).json({
            message : "data update success",
            data : data
        });
        //res.redirect('/allproduct')

}



