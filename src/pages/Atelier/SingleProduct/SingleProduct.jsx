import React, {useEffect, useState} from 'react'
import { Field, Form, Formik } from 'formik';
 
import {  Grid,  Image } from 'semantic-ui-react'

import { connect } from 'react-redux';
import { aducProduse } from '../../../redux/Produces/ProducesActions';
import Loading from '../../../components/Loading';
import Layout from '../../../components/Atelier/Layout/Layout';
import './SingleProduct.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

//TODO: SELECTARE IMAGINE DIN POZE MICI

const SingleProduct = (props) =>{
   const {aducProduse,produs} = props
    useEffect(() => {
        aducProduse()
      
    }, [aducProduse])

   

    console.log(props)
  
    if(props.produs !==undefined){
     
      
      return (
       
    <Layout>
        
      <Grid centered >
        <Grid.Row > <h2>{props.produs.descriere}</h2></Grid.Row>
        
        
         <Grid.Row   >
            <Image  src={produs.linkImagine}   style={{maxHeight: 600 }} />
         </Grid.Row>

         <Grid.Row textAlign="center" stretched >
           <Grid.Column width={3}></Grid.Column>
            <Grid.Column width={2}>
                            {(produs.linkImagine !=="" ) &&  <LazyLoadImage  height={50}
                                                                              width={50}
                                                                              src={produs.linkImagine}></LazyLoadImage>}
            </Grid.Column>
            <Grid.Column width={2}> 
            {(produs.linkImagine1 !=="" ) &&  <LazyLoadImage  height={50}
                                                                              width={50}
                                                                              src={produs.linkImagine1}></LazyLoadImage>}
            </Grid.Column>
            <Grid.Column width={2}>
            {(produs.linkImagine2 !=="" ) &&  <LazyLoadImage  height={50}
                                                                              width={50}
                                                                              src={produs.linkImagine2}></LazyLoadImage>}
            </Grid.Column>
            <Grid.Column width={2}>
            {(produs.linkImagine3 !=="" ) &&  <LazyLoadImage  height={50}
                                                                              width={50}
                                                                              src={produs.linkImagine3}></LazyLoadImage>}
            </Grid.Column>
            <Grid.Column width={2}>
            {(produs.linkImagine4 !=="" ) &&  <LazyLoadImage  height={50}
                                                                              width={50}
                                                                              src={produs.linkImagine4}></LazyLoadImage>}                                                  
                          
            </Grid.Column>
                             
                          
                          
                             
         </Grid.Row>
                   
         
        
         
     
        <Grid.Row > <h5>Culoare: {props.produs.culoare}</h5></Grid.Row>
        <Grid.Row > <h5>Preț: {props.produs.pret} Lei</h5></Grid.Row>
        <Grid.Row ><h5>Mărimi: {props.produs.marime}</h5></Grid.Row>  
      </Grid>      
     
    
      
     
       
    
 
  
  </Layout>

)}
return <Loading />
}

const mapStateToProps = (state, ownProps) => {
    return {
       produs : state.ProdusReducer[ownProps.match.params.id],
       dimensiuni: state.dimensiuni
    }
}


export default connect(mapStateToProps, {aducProduse})(SingleProduct);