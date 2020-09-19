import React from 'react'
import { Button, Card, Grid, Icon, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './CategoryItem.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {connect} from 'react-redux'
import {deleteCategorie} from '../../../redux/CategorieAtelier/CategorieAtelierActions'
 

const CategoryItem = (props) =>{
    const renderDeleteButton = (id) => {
      if( !props.auth.email) return 
      else {
          if (props.auth.email === "braumuntenesc@gmail.com"){
              return ( 
                  <React.Fragment>
         
          <Button onClick = {() => props.deleteCategorie(id)} >Delete</Button>
         
          </React.Fragment>
          )
      }
  }
    }

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
      height={280}
      src={categorie.linkImagine} // use normal <img> attributes as props
      width={300} />
 
     
 

  </Link>
  <div>
  {renderDeleteButton(categorie.id)}
  </div>
     
   
  </Grid.Column>
)}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps, {deleteCategorie})(CategoryItem)