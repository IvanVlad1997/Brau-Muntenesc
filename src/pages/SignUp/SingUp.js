import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import {Form, Control} from 'react-redux-form'
import {singupUser} from '../../redux/actions/AuthActions'
import {connect} from 'react-redux'


class LoginForm extends React.Component {

  onSubmit =(creds) => {  
    console.log(creds)

    this.props.singupUser(creds)
    }
  
    render() {

    return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Înregistrează-te
      </Header>
      <Form className= "ui form"
                model="user"
                onSubmit={(creds) => this.onSubmit(creds) }>
                    <label htmlFor="user.user">Email</label>
                    <Control.text model="user.user" id="user" />
                    <label htmlFor="user.password">Password</label>
                    <Control.text type="password" model="user.password" id="password" />
                    
                    
                    <button type ="submit">
                          Trimite                          
                      </button> 

       </Form>
            </Grid.Column>
  </Grid>
    )
    }
}

export default connect(null, {singupUser})(LoginForm)