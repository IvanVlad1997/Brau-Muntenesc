
import React from 'react';


import ProductList from '../../../components/Atelier/ProductList/ProductList'


const Category = (props) => {
  
    
    return (
      
            
            <ProductList id = {props.match.params.id} />
       
    )
}




export default (Category);