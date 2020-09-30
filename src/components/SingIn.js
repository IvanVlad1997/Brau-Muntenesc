import React from 'react'
import { Button, Grid, Header } from 'semantic-ui-react'
import {Control, Form} from 'react-redux-form'
import {loginUser, googleLogin, facebookLogin} from '../redux/actions/AuthActions'
import {connect} from 'react-redux'


class LoginForm extends React.Component {

  

    onSubmit =(creds) => {  
     console.log(creds)
     this.props.loginUser(creds)
     }




    handleClick1 = () => {
      this.props.googleLogin()
  }
  handleClick2 = () => {
    this.props.facebookLogin()
}
    render() {
 
      
    return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Loghează-te
      </Header>
     
            
    

         <Form className= "ui form"
                model="user"
                onSubmit={(creds) => this.onSubmit(creds) }
                style={{ padding: 10 }}>
                   
                      
                    <label htmlFor="user.user">Email</label>
                    <Control.text model="user.user" id="user" />
                    <label htmlFor="user.password">Password</label>
                    <Control.text type="password" model="user.password" id="password" />
                    <br />
                    <label  htmlFor="user.persistance"  style={{ padding: 10 }} >Rămâi logat</label>
                    <Control.checkbox model="user.persistance" id="persistance" ></Control.checkbox>
                    <br />
                    <button className="ui button primary" type ="submit">
                          Intră în cont                        
                      </button> 
                      
                   


       </Form>
       <Button style={{ padding: 10 }} onClick={()=> this.handleClick1()} color ="google plus">
          Folosește Google 
          </Button>  

          <Button style={{ padding: 10 }} onClick={()=> this.handleClick2()} color ="facebook">
          Folosește Facebook 
          </Button>  
           
         
    </Grid.Column>
  </Grid>
    )
    }
}

export default connect(null, {loginUser, googleLogin, facebookLogin})(LoginForm)


       
  