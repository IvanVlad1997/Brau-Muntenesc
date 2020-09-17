import React from 'react'
import Menu from './ComponenteEv/Menu'
import {Grid} from 'semantic-ui-react'
import DespreNoi from './ComponenteEv/DespreNoi'
import Galerie from './ComponenteEv/Galerie'
import Contact from './ComponenteEv/Contact'
import {connect} from 'react-redux'

class Evenimente extends React.Component {
    render() {
        return(


          <React.Fragment>
                <Grid centered textAlign="center">
               <Grid.Row >    
{/* MENU */}
                <Grid.Column width={16} style={{paddingRight:0}}>
                    <Menu />
                </Grid.Column>                                 
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
                

          </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dimensiuni: state.dimensiuni
    }
}

export default connect(mapStateToProps)(Evenimente);