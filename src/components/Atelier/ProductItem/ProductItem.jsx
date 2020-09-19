import React from 'react'
import { Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {LazyLoadImage} from 'react-lazy-load-image-component'


const CategoryItem = (props) =>{
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
      height={250}
      src={produs.linkImagine} // use normal <img> attributes as props
      width={300} />
 
  </Link>
    
  </Grid.Column>
)}

export default CategoryItem