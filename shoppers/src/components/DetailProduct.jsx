import React, { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import './css/product.css'
import useFetchSingleData from '../hooks/useFetchSingleData'
import Loader from './Loader'
import { useMutation } from '@tanstack/react-query'
import Footer from './Footer'

function DetailProduct() {
  const {id} = useParams();
  if (!id) {
  Navigate('/')
  } 
  const {isLoading,error,data} = useFetchSingleData(parseInt(id));

  const initialValues ={
    pId : id,
    size :"small",
    quantity :1,
    amount : 0    
}
  const [product,setProduct] = useState(initialValues)
  let [qty,setQty] = useState(initialValues.quantity)

// doing mutation here
const mutation =  useMutation({
  mutationFn : async (data)=>{
    console.log('res',data)
   const res= await fetch(`http://localhost:1337/api/carts`,{
      method : "POST",
      mode : "cors",
      headers: {
          'content-type': 'application/json'
       },
       body : JSON.stringify({data})
  })
  const response = await res.json();
  return response;
 
  },
    onSuccess : (res)=>{
      console.log('onSucess',res)
      alert('success')
    },
    onError :(err)=>{
      console.log('onError',err)

      alert('error')
    }
})
// handling click event do mutation to do post request
const handleEvent = (e)=>{
  e.preventDefault();
  mutation.mutate(product)
}

if (error) return <SingleProductErr  />
if(isLoading) return <Loader/>
// handling onChange event
const handleChange =(event)=>{
  const cart = {...product};
  console.log('first,',cart)
  
  cart[event.target.name] = event.target.value;
  setProduct(cart);
    }

// decrement quantity
    const decQty = (e)=>{
      e.preventDefault()

      if (qty >0) {
        qty -=1;
        setQty(qty)
        product.quantity = qty
      }
    }
    // incrument qunatity func
    const incQty = (e)=>{
      e.preventDefault()

      if (qty >=0) {
        qty +=1
        setQty(qty)
        product.quantity = qty
      }
    }
    // set product price
const setAmount = qty * data.data.attributes.price;
product.amount = setAmount;

return (
<>
{ data ?
<div className="bg-light py-3">
<div className="container">
<div className="row">
<div className="col-md-12 mb-0">
<Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">{data.data.attributes.productTitle}</strong></div>
</div>
</div>
</div>  
: ''
}

{ data ?
<div className="site-section">
<div className="container">
<div className="row">
<div className="col-md-6">

{  


data.data.attributes.images.data.map((img,imgId)=>(
<img key={imgId}  src={"http://localhost:1337"+img.attributes.url} alt=" placeholder" className="img-fluid"/>

))}
</div>
<div className="col-md-6">
<h2 className="text-black">{data.data.attributes.productTitle}</h2>

<p className="mb-4">{data.data.attributes.description}</p>
<p><strong className="text-primary h4">${data.data.attributes.price}</strong></p>
<form onSubmit={handleEvent} >

<div className="mb-1 d-flex">

<div className="mb-1 d-flex">


<label  className="d-flex mr-3 mb-3">
{

data.data.attributes.size.map((size,id)=>(
<>
<span className="d-inline-block mr-2  m-1  sp">

<input type="radio" id={size.id} value={size.size}  name="size"  onChange={handleChange}/>
</span>
<span className="d-inline-block text-black">{size.size}</span>
</>
))}
</label>
</div>

</div>
<div className="mb-5">
<div className="input-group mb-3 bt" >
<div className="input-group-prepend">
<button onClick={decQty}  className="btn btn-outline-primary js-btn-minus" type="submit">-</button>
</div>
<input type="text" className="form-control text-center" id='quantity' name='quantity'  value={product.quantity}   onChange={handleChange}/>
<div className="input-group-append">

<button onClick={incQty} className="btn btn-outline-primary js-btn-plus" type="submit">+</button>
</div>
</div>

</div>

<p><button className="buy-now btn btn-sm btn-primary"  type="submit"  onClick={handleEvent}>Add To Cart</button></p>
</form>


</div>
</div>
</div>
</div>

: <SingleProductErr  />}
{/* <div className="site-section block-3 site-blocks-2 bg-light">
<div className="container">
<div className="row justify-content-center">
<div className="col-md-7 site-section-heading text-center pt-4">
<h2>Featured Products</h2>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="nonloop-block-3 owl-carousel">
<div className="item">
<div className="block-4 text-center">
<figure className="block-4-image">
<img src="images/cloth_1.jpg" alt=" placeholder" className="img-fluid"/>
</figure>
<div className="block-4-text p-4">
<h3><a href="#">Tank Top</a></h3>
<p className="mb-0">Finding perfect t-shirt</p>
<p className="text-primary font-weight-bold">$50</p>
</div>
</div>
</div>
<div className="item">
<div className="block-4 text-center">
<figure className="block-4-image">
<img src="images/shoe_1.jpg" alt=" placeholder" className="img-fluid"/>
</figure>
<div className="block-4-text p-4">
<h3><a href="#">Corater</a></h3>
<p className="mb-0">Finding perfect products</p>
<p className="text-primary font-weight-bold">$50</p>
</div>
</div>
</div>
<div className="item">
<div className="block-4 text-center">
<figure className="block-4-image">
<img src="images/cloth_2.jpg" alt=" placeholder" className="img-fluid"/>
</figure>
<div className="block-4-text p-4">
<h3><a href="#">Polo Shirt</a></h3>
<p className="mb-0">Finding perfect products</p>
<p className="text-primary font-weight-bold">$50</p>
</div>
</div>
</div>
<div className="item">
<div className="block-4 text-center">
<figure className="block-4-image">
<img src="images/cloth_3.jpg" alt=" placeholder" className="img-fluid"/>
</figure>
<div className="block-4-text p-4">
<h3><a href="#">T-Shirt Mockup</a></h3>
<p className="mb-0">Finding perfect products</p>
<p className="text-primary font-weight-bold">$50</p>
</div>
</div>
</div>
<div className="item">
<div className="block-4 text-center">
<figure className="block-4-image">
<img src="images/shoe_1.jpg" alt=" placeholder" className="img-fluid"/>
</figure>
<div className="block-4-text p-4">
<h3><a href="#">Corater</a></h3>
<p className="mb-0">Finding perfect products</p>
<p className="text-primary font-weight-bold">$50</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div> */}

<Footer/>
</>
)
}

export default DetailProduct

function SingleProductErr (){
return (
<>
<div className="container">
<div className="row">
<div className="col-md-12">
<div className="error-template">
<h1>
Oops!</h1>
<h2>
'404 Not Found'

</h2>


</div>
</div>
</div>
</div>
</>
)
}
