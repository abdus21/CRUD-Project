import React, { useRef } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Create } from '../../apis/crud';
import { ErrorToast, isEmpty, SuccessToast } from '../../Helper/ValidationHelper';
import FullScreenLoader from '../common/FullScreenLoader';

const CreateForm = () => {
    let ProductName,ProductCode,Img,UnitPrice,Qty,TotalPrice,Loader = useRef();
    const SaveData = ()=>{
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
            Loader.classList.remove("d-none")
            Create(Product_Name,Product_Code,Image,Unit_Price,Qty_Price,Total_Price).then((result)=>{
                Loader.classList.add("d-none")
                if(result===true){
                   
                    SuccessToast("Data Create Success");
                      ProductName.value = '';
                      ProductCode.value  = '';
                      Img.value = '';
                      UnitPrice.value = '';
                      Qty.value = '';
                      TotalPrice.value = '';
                }else{
                    ErrorToast("Data Not Create");
                }
            });



        }
    }
  return (
    <>
       <div>
        <Container>
            <Row className='justify-content-center'>
                <Col md={10}>
                <Card className='border-0 shadow'>
                <Card.Body>
                <Row>
                    <h5 className='mb-4'>Create Product</h5>
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
                    <Button onClick={SaveData} className='w-25 btn' style={{backgroundColor:"#3a434c"}}>Save</Button>
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

export default CreateForm