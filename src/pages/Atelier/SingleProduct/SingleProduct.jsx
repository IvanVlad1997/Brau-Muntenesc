import React, {useEffect} from 'react'
import { Card, Grid, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { aducProduse } from '../../../redux/Produces/ProducesActions';
import Loading from '../../../components/Loading';
import Layout from '../../../components/Atelier/Layout/Layout';
import './SingleProduct.css'
import ReactImageZoom from 'react-image-zoom';


const SingleProduct = (props) =>{
    useEffect(() => {
        props.aducProduse()
      
    }, [])

    console.log(props)
  
    if(props.produs !==undefined){
     
      const proprietati = {width: 400, height:400, zoomWidth: 500, img: props.produs.linkImagine, zoomPosition:"right", offset: {horizontal: 20}};
      return (
       
    <Layout>
        
      <Grid >
        <Grid.Row centered> <h2>{props.produs.descriere}</h2></Grid.Row>
        
         {  props.dimensiuni.width > 1200
            ? <Grid.Row  >
                <Grid.Column width={2}></Grid.Column>
                <Grid.Column width={6}>
                <ReactImageZoom {...proprietati} />
                </Grid.Column>
             </Grid.Row>
            :    <Grid.Row  centered > <Image  src={props.produs.linkImagine}   style={{maxHeight: 600 }} /> </Grid.Row>
                   
         } 
        
         
     
        <Grid.Row centered> <h5>Culoare: {props.produs.culoare}</h5></Grid.Row>
        <Grid.Row centered> <h5>Preț: {props.produs.pret} Lei</h5></Grid.Row>
        <Grid.Row centered><h5>Mărimi: {props.produs.marime}</h5></Grid.Row>  
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