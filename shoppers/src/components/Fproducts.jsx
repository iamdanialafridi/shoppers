import React from 'react'
import useFetchProduct from '../hooks/useFetchProduct'
import { Link } from 'react-router-dom';
import Loader from './Loader';
import '../App.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

 function Fproducts() {
  const {isLoading,error,data} = useFetchProduct(); 
  if (error) return <ProductCompErro productError = {error} />
if(isLoading) return <Loader/>
  return (
   <>

   
   
   <div className="site-section block-3 site-blocks-2 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 site-section-heading text-center pt-4">
            <h2>Featured Products</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel className="nonloop-block-3 owl-carousel owl-theme"
            autoplay ={true}
          loop  
          nav  
          margin={8}>

              { data ?
                data.data.map((attrib,id) =>(
                 
                <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                 {  
                 attrib.attributes.images.data.map((img,imgId)=>(
                 <img key={imgId}  src={"http://localhost:1337"+img.attributes.url} alt=" placeholder" className="img-fluid"/>
                 
                 ))}
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><Link key={id} to={`/single-product/${attrib.id}`}>{attrib.attributes.productTitle}</Link></h3>
                    <p className="mb-0">Finding perfect t-shirt</p>
                    <p  key={id} className="text-primary font-weight-bold">${attrib.attributes.price}</p>
                  </div>
                </div>
              </div>
              
              ))
            : <ProductCompErro productError = {error} />
            }

            


            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
    
   </>
  )
}

export default Fproducts;
function ProductCompErro (probs){
  const probError = probs.productError.message;
  return (
    <>
    <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    {probError ? probError :'404 Not Found'} 
                    
                  </h2>
               
                
            </div>
        </div>
    </div>
</div>
    </>
  )
}
