import React from 'react';
import {connect} from 'react-redux'
import {aducGalerieVideoEvenimente, deleteGalerieVideoEvenimente, adaugaGalerieVideoEvenimente} from '../../../redux/actions/actiuni'
import {Button, Container, Grid, Header} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import {Form, Control} from 'react-redux-form'
import ReactPlayer from 'react-player'
import '../../Cursuri/ComponenteCursuri/UrmaresteVlog'


class GalerieVideoEvenimente extends React.Component {
    componentDidMount() {
        this.props.aducGalerieVideoEvenimente()
    }

    onSubmit(v) {
        this.props.adaugaGalerieVideoEvenimente(v)
    }
    
    butonDelete = (id) => {
        if( !this.props.auth.email) return 
        else {
            if (this.props.auth.email === "braumuntenesc@gmail.com"){
                return ( 
                    <React.Fragment>
           
            <Button onClick = {() => this.props.deleteGalerieVideoEvenimente(id)} >Delete</Button>
           
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
      <Container style = {{paddingTop: 10}}>
        <Grid columns='equal' className="center aligned" style = {{paddingTop: 35}} >
         
        <Grid.Row>
                   <Header  style = {{paddingTop: 50, paddingBottom: 50, fontSize: 30}}
                color = "teal"
                textAlign= "center"
                size=  "huge">Galerie Video</Header>
             </Grid.Row>
           
             <Grid.Row>
                 
                 <Link to ="/evenimente" className="ui button">Du-mă înapoi </Link>     
             </Grid.Row>  

          <Grid.Row>
            <Grid.Column>
                    {this.renderLink(this.props.GalerieVideoEvenimente)}
          </Grid.Column>

          </Grid.Row>
          <Grid.Row columns={2} >
           
             
              
          </Grid.Row>
          
        </Grid>
    
           {this.forma()}
         
        

           
          </Container>
    )
    }
}

const mapStateToProps = (state) => {
    return{
       
        auth : state.auth,
        GalerieVideoEvenimente : Object.values(state.GalerieVideoEvenimente),
       
    }
}


export default connect(mapStateToProps,{aducGalerieVideoEvenimente, deleteGalerieVideoEvenimente, adaugaGalerieVideoEvenimente})(GalerieVideoEvenimente)