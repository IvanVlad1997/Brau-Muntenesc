
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../../components/Atelier/Layout/Layout';
import ProductList from '../../../components/Atelier/ProductList/ProductList'


const Category = (props) => {
  
    
    return (
      
            
            <ProductList id = {props.match.params.id} />
       
    )
}




export default (Category);