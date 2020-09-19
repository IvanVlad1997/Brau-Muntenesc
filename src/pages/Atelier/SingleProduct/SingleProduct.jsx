import React, {useEffect} from 'react'
import { Card, Grid, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { aducProduse } from '../../../redux/Produces/ProducesActions';
import Loading from '../../../components/Loading';
import Layout from '../../../components/Atelier/Layout/Layout';
import './SingleProduct.css'

const SingleProduct = (props) =>{
    useEffect(() => {
        props.aducProduse()
      
    }, [])

    console.log(props)
    
    if(props.produs !==undefined)return (
       
    <Layout>
      <Grid centered>
        <Grid.Row> <h2>{props.produs.descriere}</h2></Grid.Row>
        <Grid.Row><Image  src={props.produs.linkImagine}   style={{maxHeight: 600 }} /></Grid.Row>
        <Grid.Row> <h5>Culoare: {props.produs.culoare}</h5></Grid.Row>
        <Grid.Row><h5>Preț: {props.produs.pret} Lei</h5></Grid.Row>
        <Grid.Row><h5>Mărimi: {props.produs.marime}</h5></Grid.Row>  
      </Grid>      
     
    
      
     
       
    
 
  
  </Layout>

)
return <Loading />
}

const mapStateToProps = (state, ownProps) => {
    return {
       produs : state.ProdusReducer[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, {aducProduse})(SingleProduct);