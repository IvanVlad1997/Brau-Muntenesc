
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {Button, Form} from 'semantic-ui-react'
import { connect } from 'react-redux';
import Loading from '../../../components/Loading';


const AdminPanel = (props) => {
    if( !props.auth.email) return <Loading />
    else {
         if (props.auth.email === "braumuntenesc@gmail.com")
    return(
     <React.Fragment>
         <Link className="ui button" to="/newCategory">Creează o nouă categorie</Link>
         <Button>Adaugă un produs</Button>
         <Link className="ui primary button" to="/Atelier">Înapoi</Link>
     </React.Fragment>
    );
    else return <Redirect to="/" />
}}

const mapStateToProps = (state) => {
    return {
       auth: state.auth
    }
}


export default connect(mapStateToProps)(AdminPanel);