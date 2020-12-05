
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {aducCategorie} from '../../../redux/CategorieAtelier/CategorieAtelierActions'

import Loading from '../../../common/Loading/Loading';
import CategoryItem from '../CategoryItem/CategoryItem'


const CategoryList = (props) => {
    const {aducCategorie} = props
    useEffect(() => {
        aducCategorie()
    }, [aducCategorie])
    
    
    if (props.listaCategorii.categorie !== '' )
      return  props.listaCategorii.map((c, index)=> {return (
       
              <CategoryItem  categorie = {c}  key={index}/>)})

      
      return <Loading />
     
  
    
}

const mapStateToProps = (state) => {
    return {
       listaCategorii: Object.values(state.CategorieReducer)
    }
}


export default connect(mapStateToProps, {aducCategorie})(CategoryList);