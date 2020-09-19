import React from 'react' 
import StartPageCircle from './StartPageCircle'
import {Grid, Image} from 'semantic-ui-react'
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
              <StartPageCircle image1 ='https://i.imgur.com/mhxCTMS.jpg' 
                               
                                title = 'Cursuri'
                                link = '/Cursuri'/>  
              </Grid.Column>
            
            </Grid.Row>
            <Grid.Row>
            <Grid.Column width={3} ></Grid.Column>
              <Grid.Column width={10} stretched>
              <StartPageCircle image1 ='https://i.imgur.com/EPKtlii.jpg' 
                            
                            title = 'Broderie'
                            link = '/Atelier'/>  
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={10} stretched>
              <StartPageCircle image1 ='https://i.imgur.com/e5zxZhe.jpg' 
                            
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
              <StartPageCircle image1 ='https://i.imgur.com/mhxCTMS.jpg' 
                                image2 = 'https://scontent.fsbz1-1.fna.fbcdn.net/v/t1.0-9/67450923_475608889681235_4519817492599668736_o.jpg?_nc_cat=109&_nc_sid=9267fe&_nc_eui2=AeGci5l2VXzZBorZvslQ3-Po7In2FDGrKZPsifYUMaspk7OxbmMZqlUzaOliccRqCogBobkUu_px7SHLvJbgD5I4&_nc_ohc=m1KALTATstEAX_eEGKD&_nc_ht=scontent.fsbz1-1.fna&oh=2b8f6280fefb313152008824ec4882fb&oe=5F66C2FF'
                                title = 'Cursuri'
                                link = '/Cursuri'/>              
            </Grid.Column>
              <Grid.Column>
             </Grid.Column>
              <Grid.Column>
              <StartPageCircle image1 ='https://scontent.fsbz1-2.fna.fbcdn.net/v/t1.0-9/107604021_298272478029834_5145935540205798847_o.jpg?_nc_cat=100&_nc_sid=730e14&_nc_eui2=AeGx78onwiEu9-wHPVok7hzvIIlp24ZXlS8giWnbhleVLzRXFrkSRIs8-w9zA286LAtnRPJlYf_YEvvgoTLNcBSU&_nc_ohc=1yZNK-OBqiYAX_JPJ3J&_nc_ht=scontent.fsbz1-2.fna&oh=d4b6cf39248ffee121ebff7f1a728c8a&oe=5F66FD1A' 
                            image2 = 'https://i.imgur.com/xDl9JTR.jpg'
                            title = 'Atelier'
                            link = '/Atelier'/>  
            </Grid.Column>
            </Grid.Row>
            <Grid.Row></Grid.Row>
            <Grid.Row>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              <StartPageCircle image1 ='https://i.imgur.com/e5zxZhe.jpg' 
                            image2 = 'https://scontent.fsbz1-1.fna.fbcdn.net/v/t1.0-9/87478510_620515491857240_292740886381461504_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_eui2=AeF0MnS88ier0d-WIKAhkJZB1Pw5Dz320SDU_DkPPfbRILo1wVA9fq60ugvi9Vl5zQWBdV9YD2Fr4ybC0s_JD9x7&_nc_ohc=D0C_GbX0-nYAX8EQU_Z&_nc_ht=scontent.fsbz1-1.fna&oh=a991a34fb9045269d42c48769ab5f12f&oe=5F667D0D'
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

