import React from 'react' 
import StartPageCircle from './StartPageCircle'
import {Grid} from 'semantic-ui-react'
import {connect} from 'react-redux'


class Main extends React.Component{
    componentDidMount() {
       
    }

    render() {
      const date = new Date()
      console.log(date)


      if (this.props.dimensiuni.width < 1200)
        return (
          <Grid style ={{paddingTop: 20}} className="ui centered ">
            <Grid.Row>
              <Grid.Column width={3}>
              
              </Grid.Column>
              <Grid.Column width={10}  className="ui container center aligned" stretched>
              <StartPageCircle image1 ='https://i.imgur.com/sYCWMHd.jpg' 
                               
                                title = 'Cursuri'
                                link = '/Cursuri'/>  
              </Grid.Column>
            
            </Grid.Row>
            <Grid.Row>
            <Grid.Column width={3} ></Grid.Column>
              <Grid.Column width={10} stretched>
              <StartPageCircle image1 ='https://i.imgur.com/tbD3otb.jpg' 
                            
                            title = 'Broderie'
                            link = '/Atelier'/>  
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={10} stretched>
              <StartPageCircle image1 ='https://i.imgur.com/B1HA1qs.jpg' 
                            
                            title = 'Evenimente'
                            link = '/Evenimente'/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )
      else
      

        return(

            <Grid verticalAlign="middle" columns={4} centered>
            <Grid.Row></Grid.Row>
            <Grid.Row></Grid.Row>
            <Grid.Row>
              <Grid.Column>
              <StartPageCircle image1 ='https://i.imgur.com/sYCWMHd.jpg' 
                                image2 = 'https://i.imgur.com/gKSUxuh.jpg'
                                title = 'Cursuri'
                                link = '/Cursuri'/>              
            </Grid.Column>
              <Grid.Column>
             </Grid.Column>
              <Grid.Column>
              <StartPageCircle image1 ='https://i.imgur.com/tbD3otb.jpg' 
                                image2 = 'https://i.imgur.com/eygSYBy.jpg'
                            title = 'Broderie'
                            link = '/Atelier'/>  
            </Grid.Column>
            </Grid.Row>
            <Grid.Row></Grid.Row>
            <Grid.Row>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              <StartPageCircle image1 ='https://i.imgur.com/B1HA1qs.jpg' 
                            image2 = 'https://i.imgur.com/QBvPmvw.jpg'
                            title = 'Evenimente'
                            link = '/Evenimente'/>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid.Row>
            
           
          </Grid>

        )
    }
}


const mapStateToProps = ( state) => {
  return {
    dimensiuni: state.dimensiuni
  }
}


export default connect(mapStateToProps)(Main);

