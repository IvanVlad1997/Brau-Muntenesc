import React from 'react'
import {Grid} from 'semantic-ui-react'
import DespreNoi from '../../../components/Evenimente/ComponenteEv/DespreNoi'
import Galerie from '../../../components/Evenimente/ComponenteEv/Galerie'
import Contact from '../../../components/Evenimente/ComponenteEv/Contact'
import {connect} from 'react-redux'
import Layout from "../../../components/Evenimente/Layout/Layout";

class Evenimente extends React.Component {
    render() {
        return(


          <Layout>
                <Grid centered textAlign="center">
               <Grid.Row >    {/* MENU */}

                </Grid.Row>                              
                </Grid>

                <Grid>
                    <Grid.Row>
                        <Grid.Column width={2}>

                        </Grid.Column>
                        <Grid.Column width={12}>
                               
                                <DespreNoi latime = {this.props.dimensiuni.width} />
                                <Galerie latime = {this.props.dimensiuni.width}/>
                                <Contact latime = {this.props.dimensiuni.width}/>

                        </Grid.Column>
                        <Grid.Column width={2}>

                        </Grid.Column>

                    </Grid.Row>
                </Grid>
                

          </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dimensiuni: state.dimensiuni
    }
}

export default connect(mapStateToProps)(Evenimente);