import React from 'react'
import { Card, Grid, Icon, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './CategoryItem.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
 
const CategoryItem = (props) =>{
    const {categorie} = props
    return (
      <Grid.Column style={{padding:30}}>
    <Link to ={`/category/${categorie.id}`} >
    
    <h3>
      {categorie.numeCategorie}
     </h3>    
     <h5>
       {categorie.descriere}
       </h5>
    <LazyLoadImage 
      alt={categorie.numeCategorie}
      height={300}
      src={categorie.linkImagine} // use normal <img> attributes as props
      width={360} />
 
     
 

  </Link>
  </Grid.Column>
)}

export default CategoryItem