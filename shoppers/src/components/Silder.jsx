import React from 'react'
import useFetchSlider from '../hooks/useFetchSlider'
import Loader from './Loader'
import '../App.css'
import { Link } from 'react-router-dom'


function Silder() {
const {isLoading,error,data} = useFetchSlider();
if (error) return <ErrorCom Slidererror={error}/>
if(isLoading) return <Loader/>
  return (
   <>

    <div className="site-blocks-cover"  style={{ backgroundImage:`url(http://localhost:1337${data.data.attributes.image.data.attributes.url}` }}  data-aos="fade">
      <div className="container">
        <div className="row align-items-start align-items-md-center justify-content-end">
          <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
            <h1 className="mb-2">{data.data.attributes.title}</h1>
            <div className="intro-text text-center text-md-left">
              <p className="mb-4">{data.data.attributes.description} </p>
              <p>
                {/* <a href="#" className="btn btn-sm btn-primary">Shop Now</a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Silder

function ErrorCom (probs){
  const probError = probs.Slidererror.message;
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