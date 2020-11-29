import React from 'react'
import {Control, Form} from 'react-redux-form'
import {connect} from 'react-redux'
import {adaugaProgram, aducProgram, deleteProgram} from '../../../redux/actions/actiuni'
import { List, Button, Grid, Container, Image} from 'semantic-ui-react'
import DropDown from '../../../components/Cursuri/ComponenteCursuri/DropdownDreapta/Dropdown'
import history from '../../../history'
import Layout from "../../../components/Cursuri/Layout/Layout";

class Program extends React.Component{
    componentDidMount() {
         this.props.aducProgram()
    }

     onSubmit = (b) => {
            this.props.adaugaProgram(b)
    }

     forma = () => {
        if( !this.props.auth.email) return 
        else {
            if (this.props.auth.email === "braumuntenesc@gmail.com"){
                return (
                    <Form className= "ui form"
                    model="programAdauga"
                    onSubmit={(creds) => this.onSubmit(creds) }>
                        <label htmlFor="programAdauga.zi">zi</label>
                        <Control.text model="programAdauga.zi" id="zi"  />
                        <label htmlFor="programAdauga.ora">ora</label>
                        <Control.text model="programAdauga.ora" id="ora" />
                             
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
            <Button onClick = {() => this.props.deleteProgram(id)} >Delete</Button>
            </List.Content>
            </React.Fragment>
            )
        }
    }
}

    renderList =(programs) => {
       
            return programs.map(program => {
                return(
                <List.Item key={program.id} style ={{fontSize: 20, paddingTop:35}}>
                        {this.butonDelete(program.id)}
                        {program.zi}  {program.ora}
                       
                </List.Item>
                )
            })
    }

    render(){
        return(
            <Layout>
               <Grid>
                   <Grid.Row>
                       <Grid.Column width={3}></Grid.Column>
                       <Grid.Column width={10}>
                       <Container style = {{paddingTop: 35}} textAlign="center">
                            <Button onClick={()=> history.goBack()} >Du-mă înapoi </Button>
                            <List style = {{paddingTop: 35}}>
                            {this.renderList(this.props.programs)}
                            </List>
                            {this.forma()}
                       </Container>
                       </Grid.Column>
                       <Grid.Column width={3}>
                       <Image src="https://firebasestorage.googleapis.com/v0/b/brau-muntenesc.appspot.com/o/Imagini%20adaugate%20manual%2FAsset%203%20(1).svg?alt=media&token=867910af-5924-47d8-ac41-8c8269b21cb7">
                        </Image>
                        </Grid.Column>
                   </Grid.Row>
               </Grid>
            </Layout>
        )
   }
}

const mapStateToProps = (state) => {
    return{
        auth : state.auth,
        programs : Object.values(state.program),
    }
}

export default connect(mapStateToProps, {deleteProgram, adaugaProgram, aducProgram})(Program)