import React from 'react'
import { Grid, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import {connect} from 'react-redux'
import {deleteProdus} from '../../../redux/Produces/ProducesActions'
 

const ProductItem = (props) =>{

  const renderDeleteButton = (id) => {
    if( !props.auth.email) return 
    else {
        if (props.auth.email === "braumuntenesc@gmail.com"){
            return ( 
                <React.Fragment>
       
        <Button onClick = {() => props.deleteProdus(id)} >Delete</Button>
       
        </React.Fragment>
        )
    }
}
  }
    const {produs} = props
    return (
    
     <Grid.Column style={{padding:30}}>
       <Link to ={`/product/${produs.id}`}>
    
    <h3>
       {produs.descriere}
     </h3>    
     <h5>
     Preț: {produs.pret} Lei
       </h5>

    <LazyLoadImage 
      alt={produs.descriere}
   
      src={produs.linkImagine} // use normal <img> attributes as props
    
       height={450}
     
      width={300} />
 
  </Link>
  <div>
    {renderDeleteButton(produs.id)}
  </div>
    
  </Grid.Column>
)}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps, {deleteProdus})(ProductItem)