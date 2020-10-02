import React, {useEffect, useState } from 'react'

 
import {  Button, Grid,  Image } from 'semantic-ui-react'

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

   console.log(props)
   

    const handleClick = (a) => {
      setlink(a)
    }
    
    const nextButton = (a) => {
      let lungime = produs.links.length -1
    
      if (a=== -1 ) setlink(produs.links[1])
        else if(a=== lungime) setlink(produs.links[0])
        else setlink(produs.links[++a])
      

    }

    const prevButton = (a) => {
      let lungime = produs.links.length -1
     
      if (a=== -1 || a === 0 ) setlink(produs.links[lungime])
                else setlink(produs.links[--a])
    }
    
  
    if(props.produs !==undefined){ 
      return (
       
    <Layout>
        
      <Grid centered style={{margin:0}} >
        
      <Grid.Row > <h5>Culoare: {props.produs.culoare}</h5></Grid.Row>
        <Grid.Row > <h5>Preț: {props.produs.pret} Lei</h5></Grid.Row>
        <Grid.Row ><h5>Mărimi: {props.produs.marime}</h5></Grid.Row>  
        
         <Grid.Row   >
            <Grid.Column style={{textAlign: "center"}} width={2}><Button   onClick={()=> {prevButton(produs.links.indexOf(link))}}>A</Button></Grid.Column>
            <Grid.Column width={12}><Image centered  src={link === '' ? produs.linkImagine : link}   style={{maxHeight: 600 }} /></Grid.Column>
            <Grid.Column style={{textAlign: "center"}} width={2}><Button   onClick={()=> {nextButton(produs.links.indexOf(link))}}>A</Button></Grid.Column>
         </Grid.Row>

         <Grid.Row textAlign="center" stretched >
           <Grid.Column width={3}></Grid.Column>
            <Grid.Column style={{padding:0}}  width={2} onClick= {() => {handleClick(produs.links[0])}}>    
              {(produs.linkImagine !=="" ) &&  <LazyLoadImage  height={70}
                                                                              width={70}
                                                                              src={produs.linkImagine}></LazyLoadImage>}
                           
            </Grid.Column>
            <Grid.Column style={{padding:0}} width={2} onClick= {() => {handleClick(produs.links[1])}}> 
            {(produs.linkImagine1 !=="" ) &&  <LazyLoadImage  height={70}
                                                                              width={70}
                                                                              src={produs.linkImagine1}></LazyLoadImage>}
            </Grid.Column>
            <Grid.Column style={{padding:0}} width={2} onClick= {() => {handleClick(produs.links[2])}}>
            {(produs.linkImagine2 !=="" ) &&  <LazyLoadImage  height={70}
                                                                              width={70}
                                                                              src={produs.linkImagine2}></LazyLoadImage>}
            </Grid.Column>
            <Grid.Column style={{padding:0}} width={2} onClick= {() => {handleClick(produs.links[3])}}>
            {(produs.linkImagine3 !=="" ) &&  <LazyLoadImage  height={70}
                                                                              width={70}
                                                                              src={produs.linkImagine3}></LazyLoadImage>}
            </Grid.Column>
            <Grid.Column style={{padding:0}} width={2} onClick= {() => {handleClick(produs.links[4])}}>
            {(produs.linkImagine4 !=="" ) &&  <LazyLoadImage  height={70}
                                                                              width={70}
                                                                              src={produs.linkImagine4}></LazyLoadImage>}                                                  
                          
            </Grid.Column>
                                            
         </Grid.Row>
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