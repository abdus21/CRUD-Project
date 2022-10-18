import axios from 'axios';

export function Create(ProductName,ProductCode,Img,UnitPrice,Qty,TotalPrice){


    let url = "https://m-crudproject.herokuapp.com/product/createproduct";
   return axios.post(url,{
        ProductName,
        ProductCode,
        Img,
        UnitPrice,
        Qty,
        TotalPrice
    }).then((res)=>{
        if(res.status === 200){
            return true;
        }else{
            return false
        }

    }).catch((error)=>{
        console.log(error);
        return false;
    })
}

export function GetAll(){
    let url = "https://m-crudproject.herokuapp.com/product/allproduct";
   return axios.get(url).then((res)=>{
        if(res.status === 200){
            return res.data
            //console.log(res.data);
        }else{
            return false
        }
    }).catch((error)=>{
        console.log(error);
        return false;
    })
}

export function getSingle(id){
    let url = `https://m-crudproject.herokuapp.com/product/singleproduct/${id}`;
   return axios.get(url).then((res)=>{
        if(res.status === 200){
            return res.data
        }else{
            return false
        }
    }).catch((error)=>{
        console.log(error);
        return false;
    })
}
export function Delete(id){
    let url = `https://m-crudproject.herokuapp.com/product/deleteproduct/${id}`;
   return axios.delete(url).then((res)=>{
        if(res.status === 200){
            return true
        }else{
            return false
        }
    }).catch((error)=>{
        console.log(error);
        return false;
    })
}

export function Update(id,ProductName,ProductCode,Img,UnitPrice,Qty,TotalPrice){
    let url = `https://m-crudproject.herokuapp.com/product/updateproduct/${id}`;
    axios.patch(url,{
        id,
        ProductName,
        ProductCode,
        Img,
        UnitPrice,
        Qty,
        TotalPrice
    }).then((res)=>{
        if(res.status === 200){
            return true;
        }else{
            return false
        }
    }).catch((error)=>{
        console.log(error);
        return false;
    })
}