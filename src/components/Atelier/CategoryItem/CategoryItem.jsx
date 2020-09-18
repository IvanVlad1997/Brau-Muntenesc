import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './CategoryItem.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
 
const CategoryItem = (props) =>{
    const {categorie} = props
    return (
    <Link to ="/" >
    <LazyLoadImage
      alt={categorie.numeCategorie}
      height={300}
      src={categorie.linkImagine} // use normal <img> attributes as props
      width={300} />
    <div>
      {categorie.numeCategorie}
         
       {categorie.descriere}
       </div>
 

  </Link>
)}

export default CategoryItem