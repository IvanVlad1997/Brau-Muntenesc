import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const CategoryItem = (props) =>{
    const {produs} = props
    return (
    <Link to ={`/product/${produs.id}`}>
    <Card>
    <Image src={produs.linkImagine} wrapped ui={true} />
    <Card.Content>
      <Card.Header>{produs.descriere}</Card.Header>
          <Card.Description>
       Culoare: {produs.culoare}
      </Card.Description>
      <Card.Description>
       Preț: {produs.pret} Lei
      </Card.Description>
      <Card.Description>
       Mărimi: {produs.marime}
      </Card.Description>
    </Card.Content>
 
  </Card>
  </Link>
)}

export default CategoryItem