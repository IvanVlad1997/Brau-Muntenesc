
import React, {useEffect} from 'react';
import {aducProduse} from '../../../redux/Produces/ProducesActions'
import {aducCategorie} from '../../../redux/CategorieAtelier/CategorieAtelierActions'
import { connect } from 'react-redux';
import Layout from '../Layout/Layout';
import ProductItem from '../ProductItem/ProductItem'
import {Grid, Header} from 'semantic-ui-react'


const Category = (props) => {
    const {aducCategorie, aducProduse} = props
    useEffect(() => {
        aducCategorie()
        aducProduse()
        
        }, [aducCategorie, aducProduse])
    let produse
    console.log(props)  
    if (props.produse[0] !== '' && props.categorie[0] !== '' ) produse = props.produse.map((produs, index) => {
         if (produs.categorie === props.categorie.numeCategorie)
         return <div key ={index}><ProductItem produs={produs} /></div>
         else return null;
      })
    
    return (
        <Layout>
        <Grid style={{margin:0}} >
            <Grid.Row>
                <Grid.Column width={1}></Grid.Column>
                <Grid.Column   width={14} >
                    
                    <Grid columns='equal' className="center aligned" style = {{paddingTop: 35}} stackable>
                        <Grid.Row>
                        <Grid.Column> 
                            <Header  
                                style = {{paddingTop: 20, paddingBottom: 20}}
                                color = "black"
                                textAlign= "center"
                                size='huge'>Produse
                            </Header>
                        </Grid.Column>
                        
                        
                        </Grid.Row>
                        <Grid.Row columns={2} >
                                  {produse}          
                        </Grid.Row>
                    </Grid>
                   
                    
                </Grid.Column>
                <Grid.Column width={1}></Grid.Column>
            </Grid.Row>
        </Grid>    
    </Layout>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        produse : Object.values(state.ProdusReducer),
        categorie : state.CategorieReducer[ownProps.id]
     }
}


export default connect(mapStateToProps, {aducProduse, aducCategorie})(Category);