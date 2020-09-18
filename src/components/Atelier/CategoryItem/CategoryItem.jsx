import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const CategoryItem = (props) =>{
    const {categorie} = props
    return (
    <Link to ={`/category/${categorie.id}`}>
    <Card>
    <Image src={categorie.linkImagine} wrapped ui={true} />
    <Card.Content>
      <Card.Header>{categorie.numeCategorie}</Card.Header>
          <Card.Description>
       {categorie.descriere}
      </Card.Description>
    </Card.Content>
 
  </Card>
  </Link>
)}

export default CategoryItem