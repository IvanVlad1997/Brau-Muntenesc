import React from 'react'
import {Control, Form} from 'react-redux-form'
import {connect} from 'react-redux'
import {adaugaPreturi, deletePreturi, aducPreturi} from '../../../redux/actions/actiuni'
import { List, Button, Container, Grid , Image} from 'semantic-ui-react'
import DropDown from './Dropdown'
import history from '../../../history'


class Preturi extends React.Component{
    componentDidMount() {
         this.props.aducPreturi()
    }

     onSubmit = (b) => {
            this.props.adaugaPreturi(b)
    }

     forma = () => {
        if( !this.props.auth.email) return 
        else {
            if (this.props.auth.email === "braumuntenesc@gmail.com"){
                return (
                    <Form className= "ui form"
                    model="preturiAdauga"
                    onSubmit={(creds) => this.onSubmit(creds) }>
                        <label htmlFor="preturiAdauga.pret">Pret</label>
                        <Control.text model="preturiAdauga.pret" id="pret"  />
                        <label htmlFor="preturiAdauga.categorie">Categorie</label>
                        <Control.text model="preturiAdauga.categorie" id="categorie" />
                             
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
            <Button onClick = {() => this.props.deletePreturi(id)} >Delete</Button>
            </List.Content>
            </React.Fragment>
            )
        }
    }
}

    renderList =(preturi) => {
       
            return preturi.map(pret => {
                return(
                <List.Item key={pret.id} style ={{fontSize: 20, paddingTop:35}}>
                    
                        <List.Content >
                            <List.Header >{pret.categorie}</List.Header>
                            <List.Description>
                            {pret.pret}
                            </List.Description>
                        </List.Content>
                        {this.butonDelete(pret.id)}
                         
                       
                </List.Item>
                )
            })
    }

    render(){
        return(
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                    <DropDown />
                          
                    </Grid.Column>
                    <Grid.Column width={10}>
                    <Container style = {{paddingTop: 35}} textAlign="center">
                    <Button onClick={()=> history.goBack()} >Du-mă înapoi </Button>     
                  <List >
                        {this.renderList(this.props.preturi)}
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
          
        )
     

   }
}


const mapStateToProps = (state) => {
    return{
        auth : state.auth,
        preturi : Object.values(state.preturi),
    }
}

export default connect(mapStateToProps, {deletePreturi, adaugaPreturi, aducPreturi})(Preturi)