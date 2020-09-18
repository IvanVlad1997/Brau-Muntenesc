
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {aducProduse} from '../../../redux/Produces/ProducesActions'
import {aducCategorie} from '../../../redux/CategorieAtelier/CategorieAtelierActions'
import { connect } from 'react-redux';
import Layout from '../../../components/Atelier/Layout/Layout';
import ProductList from '../../../components/Atelier/ProductList/ProductList'


const Category = (props) => {
    useEffect(() => {
        props.aducCategorie()
        props.aducProduse()
        
        }, [])
    let produse
    console.log(props)  
    if (props.produse[0] !== '' ) produse = props.produse.map((produs, index) => {
         if (produs.categorie === props.categorie.numeCategorie)
         return <div key ={index}>{produs.categorie}</div>
      })
    
    return (
        <div>
            {produse}
        </div>
          
           
        
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        produse : Object.values(state.ProdusReducer),
        categorie : state.CategorieReducer[ownProps.id]
     }
}


export default connect(mapStateToProps, {aducProduse, aducCategorie})(Category);