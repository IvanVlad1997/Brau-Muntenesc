
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import {aducCategorie} from '../../../redux/CategorieAtelier/CategorieAtelierActions'
import Loading from '../../Loading';
import CategoryItem from '../CategoryItem/CategoryItem'


const CategoryList = (props) => {
    useEffect(() => {
        props.aducCategorie()
    }, [])
    
    
    if (props.listaCategorii.categorie !== '' )
      return  props.listaCategorii.map((c, index)=> {return <CategoryItem  categorie = {c}  key={index}/>})
    return <Loading />
    
}

const mapStateToProps = (state) => {
    return {
       listaCategorii: Object.values(state.CategorieReducer)
    }
}


export default connect(mapStateToProps, {aducCategorie})(CategoryList);