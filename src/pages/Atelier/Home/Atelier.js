import React from 'react'
import CategoryList from '../../../components/Atelier/CategoryList/CategoryList'
import Layout from '../../../components/Atelier/Layout/Layout'
import {Grid, Header, Segment, Container} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
 


class Atelier extends React.Component {
    render() {
        return(
            <Layout>
                
                
                <Grid  >
                    
                    <Grid.Row  >
                        <Container>
                        <Grid.Column stretched>

                        <Segment color="red" inverted textAlign="center">
                            <h2>Embleme, tricouri, materiale. Brodăm orice!</h2>
                            <h4>Sună la 0751/105.873 pentru a comanda </h4>
                            {/* TODO sau completează <Link>formularul.</Link> */}
                        </Segment>
                        </Grid.Column>
                        </Container>
                       

                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column   width={14} >
                            
                            <Grid columns='equal' className="center aligned" style = {{paddingTop: 35}} stackable>
                                <Grid.Row>
                                <Grid.Column> 
                                    <Header  
                                        style = {{paddingTop: 20, paddingBottom: 20}}
                                        color = "blue"
                                        textAlign= "center"
                                        size='huge'>Categorii
                                    </Header>
                                </Grid.Column>
                                
                                
                                </Grid.Row>
                                <Grid.Row columns={3} >
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