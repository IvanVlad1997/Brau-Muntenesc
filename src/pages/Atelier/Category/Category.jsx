
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../../components/Atelier/Layout/Layout';
import ProductList from '../../../components/Atelier/ProductList/ProductList'


const Category = (props) => {
  
    
    return (
        <Layout>
            
            <ProductList id = {props.match.params.id} />
        </Layout>
    )
}




export default (Category);