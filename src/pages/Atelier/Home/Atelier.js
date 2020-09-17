import React from 'react'
import CategoryList from '../../../components/Atelier/CategoryList/CategoryList'
import Layout from '../../../components/Atelier/Layout/Layout'
import {Grid} from 'semantic-ui-react'
class Atelier extends React.Component {
    render() {
        return(
            <Layout>
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column width={2}>

                        </Grid.Column>
                        <Grid.Column width={12} >
                             <CategoryList />    
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
               
            </Layout>
        )
    }
}

export default Atelier;