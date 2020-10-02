import React, {useEffect, useState } from 'react'

 
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

   const [link, setlink] = useState('')

    console.log(link)
    console.log(props)

    const handleClick = (a) => {
      setlink(a)
    }
  
    if(props.produs !==undefined){
     

      
      return (
       
    <Layout>
        
      <Grid centered >
        <Grid.Row > <h2>{props.produs.descriere}</h2></Grid.Row>
        
        
         <Grid.Row   >
            <Image  src={link === '' ? produs.linkImagine : link}   style={{maxHeight: 600 }} />
         </Grid.Row>

         <Grid.Row textAlign="center" stretched >
           <Grid.Column width={3}></Grid.Column>
            <Grid.Column width={2} onClick= {() => {handleClick(produs.linkImagine)}}>    
              {(produs.linkImagine !=="" ) &&  <LazyLoadImage  height={30}
                                                                              width={50}
                                                                              src={produs.linkImagine}></LazyLoadImage>}
                           
            </Grid.Column>
            <Grid.Column width={2} onClick= {() => {handleClick(produs.linkImagine1)}}> 
            {(produs.linkImagine1 !=="" ) &&  <LazyLoadImage  height={30}
                                                                              width={50}
                                                                              src={produs.linkImagine1}></LazyLoadImage>}
            </Grid.Column>
            <Grid.Column width={2} onClick= {() => {handleClick(produs.linkImagine2)}}>
            {(produs.linkImagine2 !=="" ) &&  <LazyLoadImage  height={30}
                                                                              width={50}
                                                                              src={produs.linkImagine2}></LazyLoadImage>}
            </Grid.Column>
            <Grid.Column width={2} onClick= {() => {handleClick(produs.linkImagine3)}}>
            {(produs.linkImagine3 !=="" ) &&  <LazyLoadImage  height={30}
                                                                              width={50}
                                                                              src={produs.linkImagine3}></LazyLoadImage>}
            </Grid.Column>
            <Grid.Column width={2} onClick= {() => {handleClick(produs.linkImagine4)}}>
            {(produs.linkImagine4 !=="" ) &&  <LazyLoadImage  height={30}
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