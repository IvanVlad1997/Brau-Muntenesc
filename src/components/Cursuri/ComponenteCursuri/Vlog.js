import React from 'react'
import {Control, Form} from 'react-redux-form'
import {connect} from 'react-redux'
import {adaugaVideo, deleteVideo, aducVideo} from '../../../redux/actions/actiuni'
import { List, Button, Container, Grid,  Header } from 'semantic-ui-react'
import './UrmaresteVlog'
import ReactPlayer from 'react-player'
import history from '../../../history'

import {Sticky, StickyContainer} from 'react-sticky'
import DropDown from './Dropdown'

class Vlog extends React.Component{
    componentDidMount() {
         this.props.aducVideo()
    }

    state = {titlu:'Sârba Ofițerească', link:'https://www.youtube.com/watch?v=8snx63yPpBs&t=2s', id:"" }

     onSubmit = (b) => {
            this.props.adaugaVideo(b)
    }

     forma = () => {
        if( !this.props.auth.email) return 
        else {
            if (this.props.auth.email === "braumuntenesc@gmail.com"){
                return (
                    <Form className= "ui form"
                    model="videoYTAdauga"
                    onSubmit={(creds) => this.onSubmit(creds) }>
                        <label htmlFor="videoYTAdauga.link">link</label>
                        <Control.text model="videoYTAdauga.link" id="link"  />
                        <label htmlFor="videoYTAdauga.titlu">titlu</label>
                        <Control.text model="videoYTAdauga.titlu" id="titlu" />
                             
                        <button type ="submit">
                              Trimite                          
                          </button> 
            
                     </Form>
                )
            }
    }
}

    butonDelete = (id) => {
        if( !this.props.auth.email) return 
        else {
            if (this.props.auth.email === "braumuntenesc@gmail.com"){
                return ( 
                    <React.Fragment>
            <List.Content floated='right'>
            <Button onClick = {() => this.props.deleteVideo(id)} >Delete</Button>
            </List.Content>
            </React.Fragment>
            )
        }
    }
}

    renderButtons = (video) =>{
        return video.map(vid => {
            return (

                <Button  key={vid.id} size="mini" onClick ={() => this.handleClick(vid) }>{vid.titlu}</Button>
                
            )
        })
    }

    handleClick = (vid) => {
        console.log(vid)
        this.setState({id: vid.id, link: vid.link, titlu:vid.titlu})
    }


    render(){
        if (this.props.dimensiuni.width <600)
        return(
            <Container style={{paddingTop:10}} >
                 <DropDown />      
                 
                <Grid>
               
                <Grid.Row style ={{paddingTop: 40 ,paddingBottom: 40}}>
                
                    <Grid.Column>
                   
                     
                        <Header style={{fontSize:10}} textAlign="center" >{this.state.titlu}</Header>
                           {this.butonDelete(this.state.id)}
                            <div className='player-wrapper'>
                            <ReactPlayer
                                className='react-player'
                                url={this.state.link}
                                width='100%'
                                height='100%'
                                controls
                                />
                            </div>
                    
                    
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column >
                    
                    <Button.Group  vertical style ={{paddingTop:30}} fluid> 
                        {this.renderButtons(this.props.video)}                
                    </Button.Group>
                     
                </Grid.Column> 
                </Grid.Row> 
                </Grid>
                 
              
                        
                 
                  {this.forma()}
               
                  
            </Container>
        )
        else
        return(
            <Container style={{paddingTop:3}} >
                 <Button onClick={() => history.push("/Cursuri")}>Du-mă înapoi</Button>       
                 <StickyContainer>
                <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                    
                    <Button.Group vertical style ={{paddingTop:30}}>
                        {this.renderButtons(this.props.video)}                
                    </Button.Group>
                     
                    </Grid.Column>
                    <Grid.Column width={1}>

                    </Grid.Column>
                    <Grid.Column width={11}>
                    <Sticky>
                    {({ style  }) => <h1 style={style}>   
                        <Header  textAlign="center" >{this.state.titlu}</Header>
                           {this.butonDelete(this.state.id)}
                            <div className='player-wrapper'>
                            <ReactPlayer
                                className='react-player'
                                url={this.state.link}
                                width='100%'
                                height='100%'
                                controls
                                />
                            </div>
                    
                    </h1>}
                    </Sticky>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
                 
              
                        
                 
                  {this.forma()}
               
                  </StickyContainer>
            </Container>
        )
     

   }
}


const mapStateToProps = (state) => {
    return{
       
        auth : state.auth,
        video : Object.values(state.videoYT),
        dimensiuni: state.dimensiuni
       
    }
}

export default connect(mapStateToProps, {deleteVideo, adaugaVideo, aducVideo})(Vlog)