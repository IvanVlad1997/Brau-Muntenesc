import React from 'react';
import {connect} from 'react-redux'
import {aducGalerieVideo, deleteGalerieVideo, adaugaGalerieVideo} from '../../../redux/actions/actiuni'
import {Button, Container, Grid, Header} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import {Form, Control} from 'react-redux-form'
import ReactPlayer from 'react-player'
import './UrmaresteVlog'
import history from '../../../history'

class GalerieVideo extends React.Component {
    componentDidMount() {
        this.props.aducGalerieVideo()
    }

    onSubmit(v) {
        this.props.adaugaGalerieVideo(v)
    }
    
    butonDelete = (id) => {
        if( !this.props.auth.email) return 
        else {
            if (this.props.auth.email === "braumuntenesc@gmail.com"){
                return ( 
                    <React.Fragment>
           
            <Button onClick = {() => this.props.deleteGalerieVideo(id)} >Delete</Button>
           
            </React.Fragment>
            )
        }
    }
}
    
    forma = () => {
        if( !this.props.auth.email) return 
        else {
            if (this.props.auth.email === "braumuntenesc@gmail.com"){
                return (
                    <Form className= "ui form"
                    model="galerieVideoAdauga"
                    onSubmit={(creds) => this.onSubmit(creds) }>
                        <label htmlFor="galerieVideoAdauga.link">link</label>
                        <Control.text model="galerieVideoAdauga.link" id="link"  />
                           
                        <button type ="submit">
                              Trimite                          
                          </button> 
            
                     </Form>
                )
            }
    }
}


    renderLink(videos) {
        return videos.map((video) =>{
            return (
                <Grid.Column key={video.id} style ={{paddingTop:30}}>
                   {this.butonDelete(video.id)}
                    <div className= 'player-wrapper'>
                        <ReactPlayer
                        className='react-player'
                        url={video.link}
                        width='100%'
                        height='100%'
                       
                        controls ={true}
                        muted ={true}
                        
                        />
                        </div> 
                </Grid.Column>
            )
        })
        
    }

    render() {
    return (
      <Container >
        <Grid columns='equal' className="center aligned" style = {{paddingTop: 35}} stackable={1}>
          <Grid.Row>
          <Grid.Column> 
          <Button.Group size='large' >
          <Button onClick={() => history.push('/Cursuri')}>Du-mă înapoi</Button>           
              <Button.Or text="Sau" ></Button.Or>
              <Link className= "ui button" to ="/galerie">La galeria foto</Link>
          </Button.Group>
          <Header  
                style = {{paddingTop: 20, paddingBottom: 20}}
                color = "red"
                textAlign= "center"
                size='huge'>Galerie Video</Header>
          </Grid.Column>
            
            
          </Grid.Row>
          <Grid.Row columns={2} >
              {this.renderLink(this.props.GalerieVideo)}
             
              
          </Grid.Row>
          {this.forma()}
        </Grid>
    
           
         
        

           
          </Container>
    )
    }
}

const mapStateToProps = (state) => {
    return{
       
        auth : state.auth,
        GalerieVideo : Object.values(state.GalerieVideo),
       
    }
}


export default connect(mapStateToProps,{aducGalerieVideo, deleteGalerieVideo, adaugaGalerieVideo})(GalerieVideo)