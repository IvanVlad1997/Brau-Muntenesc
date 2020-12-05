import React from 'react'
import {Link} from 'react-router-dom'
import { Image, Reveal, Card, Icon, Container } from 'semantic-ui-react'
import {connect} from 'react-redux'


const StartPageCircle = (props) => {

if (props.dimensiuni.width <1200)
return (
  <Container >
  <Link to={props.link}    >  
 
  <Card centered style={{}}>
 
    <Image size='small'  src={props.image1} wrapped ui={false} />
    <Card.Content >

      <Card.Header  textAlign="center" style ={{fontSize:10, color: "red"}} ><Icon  name='hand point right outline'></Icon> {props.title}</Card.Header>
      
    </Card.Content>
   
        
       
  </Card>

      
    
  </Link>
  </Container>
   




)
else 
  return (
            <React.Fragment >
                <Link to={props.link}  style={{ textDecoration: 'none'}}  >  
                 <h2 className="ui header red" style={{textAlign: "center", textDecoration: 'none', marginLeft : 30 , marginBottom: 20}} >
                 <i className="child icon"></i>
                 <div className="content"  >
                     {props.title}
                 </div>
                 </h2>
                 </Link>
               <Reveal animated='rotate'>
                    <Reveal.Content visible>
                    <Link to={props.link} className="button"  >  
                    <Image circular style ={{height: 150, width:200}}  src={props.image1} />
                    </Link>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                    <Link to={props.link} className="button"  >  
                    <Image circular  style ={{height: 150, width:200}} src={props.image2} />
                    </Link>
                    </Reveal.Content>
                 </Reveal>
                 
            </React.Fragment>
             
        
        
  
       
    )
}

const mapStateToProps = (state) => {
  return {
    dimensiuni: state.dimensiuni
  }
}

export default connect(mapStateToProps)(StartPageCircle)