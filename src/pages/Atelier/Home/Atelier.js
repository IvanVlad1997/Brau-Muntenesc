import React from 'react'
import CategoryList from '../../../components/Atelier/CategoryList/CategoryList'
import Layout from '../../../components/Atelier/Layout/Layout'
import {Grid, Header, Button, Container} from 'semantic-ui-react'
import history from '../../../history'

class Atelier extends React.Component {
    render() {
        return(
            <Layout>
                <Grid >
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
                                        size='huge'>Categorii
                                    </Header>
                                </Grid.Column>
                                
                                
                                </Grid.Row>
                                <Grid.Row columns={2} >
                                     <CategoryList  />              
                                </Grid.Row>
                            </Grid>
                           
                            
                        </Grid.Column>
                        <Grid.Column width={1}></Grid.Column>
                    </Grid.Row>
                </Grid>
               
            </Layout>
        )
    }
}

export default Atelier;