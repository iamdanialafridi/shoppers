import React, { useState } from 'react'
import men from '../images/men.jpg'
import women from '../images/women.jpg'
import children from '../images/children.jpg'
import { useQuery } from '@tanstack/react-query'
import Error from "../pages/Error"
import Loader from './Loader'
import { Link } from 'react-router-dom'
import useFetchCategory from '../hooks/useFetchCategory'
import '../App.css'







function Categories() {
  const {isLoading,error,data} = useFetchCategory();
  if (error) return <CaetgroyCompErro catError={error}/>
  if(isLoading) return <Loader/>
                 
  return (
  <>
   <div className="site-section site-blocks-2">
      <div className="container">
        <div className="row">

          {
            data ?
            data.data.map((attrb,id) =>(
            <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay="">
            <Link className="block-2-item" key={attrb.id} to="/">
              <figure className="image" key={attrb.id}>
                <img key={attrb.attributes.images.data.id} src={"http://localhost:1337"+attrb.attributes.images.data.attributes.url} alt="" className="img-fluid"/>
              </figure>
              <div className="text">
                <span className="text-uppercase">collection</span>
                <h3 key={attrb.id}>{attrb.attributes.title}</h3>
              </div>
            </Link>
          </div>
          ))
        : <CaetgroyCompErro catError={error}/>
        }

         

        </div>
      </div>
    </div>
  
  </>
  )
}

export default Categories

function CaetgroyCompErro (probs){
  const probError = probs.catError.message;
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