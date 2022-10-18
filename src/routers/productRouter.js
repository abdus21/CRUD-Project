import express from 'express';
import { createProduct, getAllProduct,deleteProduct, updateProduct, getSingleProduct } from '../controllers/ProductController.js';




const router = express.Router()

  router.post('/createproduct',createProduct)
  router.get('/allproduct',getAllProduct)
  router.get('/singleproduct/:id',getSingleProduct)
  router.delete('/deleteproduct/:id',deleteProduct
  )
  router.patch('/updateproduct/:id',updateProduct
  )




export default router