import React from 'react';
import {Button, Card, Col, Container, Row, Table} from 'react-bootstrap'
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { Delete, GetAll } from '../../apis/crud';
import FullScreenLoader from '../common/FullScreenLoader'
import { ErrorToast, SuccessToast } from '../../Helper/ValidationHelper';
import { unstable_HistoryRouter } from 'react-router-dom';

const GetAllData = () => {
  // state for get all data
  const [data,setData] = useState([])

      useEffect(()=>{

        GetAll().then((res)=>{
          setData(res)
        }).catch(error=>{
          console.log(error);
        })

      },[data]);

      // delete button
      const deleteBtn = (id)=>{
        
        Delete(id).then((result)=>{

            SuccessToast("Delete success");
          
        })
      }


     if(data.length>0){
      return (
        <div>
          <Container>
            <Row>
              <Col>
                  <Card className='border-0 shadow'>
                    <Card.Body>
                      <h6>Product List</h6>
                      <Table>
                        <thead>
                          <tr className='text-muted' style={{fontSize:"15px"}}>
                            <th>Product</th>
                            <th>Unit Price</th>
                            <th>Qty</th>
                            <th>Total Price</th>
                            <th style={{fontWeight:"700",fontSize:"20px"}}>Delete</th>
                            <th style={{fontWeight:"700",fontSize:"20px"}}>Update</th>
                          </tr>
                        </thead>
                        <tbody>
                           {
                           
                           data?.map((items)=>
                           <tr>
                           <td className='d-flex'>
                             <img style={{width:"60px",height:"60px",objectFit:"cover",borderRadius:"15px"}} src={items.Img} alt="" /> &nbsp;
                             <div>
                               <h6 style={{fontSize:"17px",fontWeight:"700",marginBottom:"0px"}}>Smart Watch for Men</h6>
                               <span style={{fontSize:"14px",fontWeight:"500"}}>{items.ProductCode}</span>
                             </div>
                           </td>
                           <td>{items.UnitPrice}</td>
                           <td>{items.Qty}</td>
                           <td>{items.TotalPrice}</td>
                           <td><Button onClick={()=>deleteBtn(items._id)} className='btn btn-danger'><i class='bx bxs-trash-alt'></i></Button></td>
                           <td><Link className='btn btn-success' to={`/update/${items._id}`}><i class='bx bxs-edit-alt' ></i></Link></td>
                         </tr>
                           )
                           }
                          
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
              </Col>
            </Row>
          </Container> 
           
        </div>
      )
       
     }else{

      return (
        <div>
            <FullScreenLoader/>
        </div>
     )

     }
 
}

export default GetAllData