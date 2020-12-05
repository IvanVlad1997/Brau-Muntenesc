import React from 'react'
import {Grid} from 'semantic-ui-react'
import DespreNoi from '../../../components/Evenimente/ComponenteEvenimente/Despre/DespreNoi'
import Galerie from '../../../components/Evenimente/ComponenteEvenimente/AccesGalerie/Galerie'
import Contact from '../../../components/Evenimente/ComponenteEvenimente/Contact/Contact'
import {connect} from 'react-redux'
import Layout from "../../../components/Evenimente/Layout/Layout";
import TextEvenimente from "../../../components/Evenimente/ComponenteEvenimente/TextEvenimente/TextEvenimente";
import Text2Evenimente from "../../../components/Evenimente/ComponenteEvenimente/Text2Evenimente/Text2Evenimente";

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
                                <TextEvenimente latime = {this.props.dimensiuni.width}></TextEvenimente>
                                <Galerie latime = {this.props.dimensiuni.width}/>
                                <Text2Evenimente latime = {this.props.dimensiuni.width}></Text2Evenimente>
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