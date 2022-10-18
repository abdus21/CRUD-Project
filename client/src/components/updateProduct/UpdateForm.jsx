import React, { useRef } from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { getSingle, Update } from '../../apis/crud';
import { ErrorToast, isEmpty, SuccessToast } from '../../Helper/ValidationHelper';
import FullScreenLoader from '../common/FullScreenLoader';

const UpdateForm = () => {
  const {id} = useParams();
  let ProductName,ProductCode,Img,UnitPrice,Qty,TotalPrice,Loader = useRef();
    const updateData = ()=>{
        let Product_Name = ProductName.value
        let Product_Code = ProductCode.value
        let Image = Img.value
        let Unit_Price = UnitPrice.value
        let Qty_Price = Qty.value
        let Total_Price = TotalPrice.value

        
        if(isEmpty(Product_Name)){
            ErrorToast("Product Name Required");
        }else if(isEmpty(Product_Code)){
            ErrorToast("Product Code Required");
        }else if(isEmpty(Image)){
            ErrorToast("Product Image Required");
        }else if(isEmpty(Unit_Price)){
            ErrorToast("Product Unit Price Required");
        }else if(isEmpty(Qty_Price)){
            ErrorToast("Product Qty Price Required");
        }else if(isEmpty(Total_Price)){
            ErrorToast("Product Total Price Required");
        }else{
            Update(id,Product_Name,Product_Code,Image,Unit_Price,Qty_Price,Total_Price).then((result)=>{
                SuccessToast("Data Update Success");
                if(result===true){
                    SuccessToast("Data Update Success");
                    
                }else{
                    ErrorToast("Data Not Update");
                }
            });

        }
    };


    useEffect(()=>{

      getSingle(id).then((result)=>{
         ProductName.value = result.ProductName
         ProductCode.value = result.ProductCode
         Img.value = result.Img
         UnitPrice.value = result.UnitPrice
         Qty.value = result.Qty
         TotalPrice.value = result.TotalPrice
      });
    },[ProductName,ProductCode,Img,UnitPrice,Qty,TotalPrice]);

  return (
    <>
       <div>
        <Container> 
            <Row className='justify-content-center'>
                <Col md={10}>
                    <Card className='border-0 shadow'>
                        <Card.Body>
                        <h5 className='mb-4'>Update Product</h5>
                            <Row>
                        <Col className='mb-3' md={4}>
                            <label htmlFor="">Name</label>
                            <input ref={(input)=>ProductName=input} type="text" className='form-control' />
                        </Col>
                        <Col className='mb-3' md={4}>
                            <label htmlFor="">Product Code</label>
                            <input ref={(input)=>ProductCode=input} type="text" className='form-control' />
                        </Col>
                        <Col className='mb-3' md={4}>
                            <label htmlFor="">Image</label>
                            <input ref={(input)=>Img=input} type="text" className='form-control' />
                        </Col>
                        <Col className='mb-3' md={4}>
                            <label htmlFor="">Unit Price</label>
                            <input ref={(input)=>UnitPrice=input} type="text" className='form-control' />
                        </Col>
                        <Col className='mb-3' md={4}>
                            <label htmlFor="">Qty</label>
                            <input ref={(input)=>Qty=input} type="text" className='form-control' />
                        </Col>
                        <Col className='mb-3' md={4}>
                            <label htmlFor="">Total Price</label>
                            <input ref={(input)=>TotalPrice=input} type="text" className='form-control' />
                        </Col>
                </Row>
                        <Row>
                            <Col md={12} className='text-center mt-3'>
                                <Button onClick={updateData} className='w-25  btn' style={{backgroundColor:"#3a434c"}}><Link className='text-decoration-none text-light' to='/'>Update</Link> </Button>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    </div>
    <div className='d-none' ref={(div)=>Loader=div}>
        <FullScreenLoader />
    </div>
    </>
  )
}

export default UpdateForm